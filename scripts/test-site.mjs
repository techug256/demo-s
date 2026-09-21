import { chromium, expect } from '@playwright/test'
import { createServer } from 'node:http'
import { readFile, stat, mkdir } from 'node:fs/promises'
import { join, extname } from 'node:path'

const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.mp4': 'video/mp4' }
const server = createServer(async (req, res) => {
  try {
    let path = join(process.cwd(), 'dist', decodeURIComponent(new URL(req.url, 'http://localhost').pathname))
    try { if ((await stat(path)).isDirectory()) path = join(path, 'index.html') } catch { path = join(process.cwd(), 'dist/index.html') }
    res.setHeader('Content-Type', mime[extname(path)] || 'application/octet-stream')
    res.end(await readFile(path))
  } catch { res.statusCode = 500; res.end('Error') }
})
await new Promise((resolve) => server.listen(4179, '127.0.0.1', resolve))
await mkdir('reference/screenshots', { recursive: true })
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 })
const errors = []
page.on('pageerror', (error) => errors.push(error.message))
const assert = (condition, message) => { if (!condition) throw new Error(message) }
const url = 'http://127.0.0.1:4179'
const loadImages = async () => page.locator('img').evaluateAll((images) => Promise.all(images.map((image) => { image.loading = 'eager'; return image.decode().catch(() => undefined) })))
try {
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await loadImages()
  await page.screenshot({ path: 'reference/screenshots/home-desktop.png', fullPage: true })
  assert(await page.locator('h1').textContent() === 'Africa, in itstruest form.', 'Homepage heading not found')
  await page.getByRole('button', { name: 'Feel the Kibira spirit' }).click()
  await page.locator('video').waitFor()
  assert(await page.getByRole('dialog').isVisible(), 'Film modal did not open')
  await page.keyboard.press('Escape')
  assert(await page.getByRole('dialog').count() === 0, 'Escape did not close modal')
  await page.getByRole('button', { name: 'Save Gorillas & the Great Rift', exact: true }).click()
  await page.getByRole('button', { name: /Your shortlist/ }).click()
  assert(await page.getByRole('dialog').getByRole('link', { name: 'Gorillas & the Great Rift' }).isVisible(), 'Saved journey missing from shortlist')
  await page.getByRole('button', { name: 'Close dialog' }).click()
  await page.reload({ waitUntil: 'networkidle' })
  assert(await page.getByRole('button', { name: 'Remove Gorillas & the Great Rift', exact: true }).getAttribute('aria-pressed') === 'true', 'Shortlist did not persist')
  await page.getByLabel('Choose your destination').selectOption('Uganda')
  await page.getByLabel('Choose your experience').selectOption('Gorilla trekking')
  await page.getByRole('button', { name: 'Find my safari' }).click()
  await expect(page.locator('.safari-card')).toHaveCount(1)
  await page.getByRole('button', { name: 'Clear filters' }).click()
  await expect(page.locator('.safari-card')).toHaveCount(6)
  await page.getByLabel('Search safaris').fill('serengeti')
  await expect(page.locator('.safari-card')).toHaveCount(1)
  await page.getByLabel('Search safaris').fill('no matching journey')
  await expect(page.locator('.no-results')).toBeVisible()
  await page.getByRole('button', { name: 'Explore all journeys', exact: true }).click()
  await page.getByLabel('Sort journeys').selectOption('shortest')
  await expect(page.locator('.safari-card').first()).toContainText('Rwanda, Beyond the Mist')
  await loadImages()
  await page.screenshot({ path: 'reference/screenshots/safaris-desktop.png', fullPage: true })
  await page.goto(`${url}/safaris/gorillas-and-the-great-rift`, { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Days 2–3 · Into the green of Kibale' }).click()
  await expect(page.getByRole('button', { name: 'Days 2–3 · Into the green of Kibale' })).toHaveAttribute('aria-expanded', 'true')
  await loadImages()
  await page.evaluate(() => { document.activeElement?.blur(); window.scrollTo({ top: 0, behavior: 'instant' }) })
  await page.screenshot({ path: 'reference/screenshots/safari-detail-desktop.png', fullPage: true })
  const routes = ['/safaris/the-wild-heart-of-kenya', '/safaris/rwanda-beyond-the-mist', '/safaris/serengeti-under-canvas', '/safaris/uganda-at-your-own-pace', '/safaris/two-countries-one-extraordinary-journey', '/destinations', '/destinations/uganda', '/destinations/rwanda', '/destinations/kenya', '/destinations/tanzania', '/experiences', '/experiences/gorilla-trekking', '/experiences/wildlife-safaris', '/experiences/slow-and-family-travel', '/experiences/private-adventures', '/lodges', '/lodges/forest-hideaways', '/lodges/under-canvas', '/lodges/lakeside-retreats', '/about', '/conservation', '/stories', '/stories/a-guide-to-gorilla-trekking', '/stories/the-beauty-of-travelling-slowly', '/stories/a-more-thoughtful-safari', '/faq', '/privacy', '/terms', '/contact', '/unknown-page']
  for (const route of routes) {
    await page.goto(url + route, { waitUntil: 'domcontentloaded' })
    await page.locator('h1').waitFor()
    assert(await page.locator('h1').count() === 1, `${route}: expected exactly one h1`)
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route}: horizontal overflow`)
  }
  await page.goto(`${url}/faq`, { waitUntil: 'networkidle' })
  await page.getByLabel('Search frequently asked questions').fill('children')
  await expect(page.locator('.accordion-item')).toHaveCount(1)
  await page.goto(`${url}/plan-your-safari?journey=gorillas-and-the-great-rift`, { waitUntil: 'networkidle' })
  assert(await page.getByRole('button', { name: 'Uganda', exact: true }).getAttribute('aria-pressed') === 'true', 'Journey destination not preselected')
  await page.getByRole('button', { name: 'Rwanda', exact: true }).click()
  await page.getByRole('button', { name: 'A little more about you' }).click()
  await page.getByRole('button', { name: '11–14 days', exact: true }).click()
  await page.getByRole('button', { name: 'Photography', exact: true }).click()
  await page.getByRole('button', { name: 'A little more about you' }).click()
  await page.getByLabel('Your name').fill('Alex Traveller')
  await page.getByLabel('Email address').fill('alex@example.com')
  await page.getByLabel('Anything else on your mind?').fill('A private journey with time to explore and photograph wildlife.')
  await page.getByRole('checkbox').check()
  await page.getByRole('button', { name: 'Create my safari brief' }).click()
  await expect(page.locator('.planner-success')).toBeVisible()
  const downloadPromise = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Download my brief' }).click()
  const download = await downloadPromise
  assert(download.suggestedFilename() === 'My-Kibira-Safari-Brief.txt', 'Brief download failed')
  await page.screenshot({ path: 'reference/screenshots/planner-completed-desktop.png', fullPage: true })
  await page.getByRole('button', { name: 'Start a new brief' }).click()
  await expect(page.locator('.planner-progress')).toBeVisible()
  await page.getByRole('button', { name: 'A little more about you' }).click()
  await expect(page.getByRole('alert')).toBeVisible()
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(url, { waitUntil: 'networkidle' })
  await loadImages()
  await page.screenshot({ path: 'reference/screenshots/home-mobile.png', fullPage: true })
  await page.getByRole('button', { name: 'Open navigation' }).click()
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Destinations', exact: true }).click()
  await expect(page).toHaveURL(`${url}/destinations`)
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toHaveCount(0)
  const mobileRoutes = ['/', '/safaris', '/safaris/gorillas-and-the-great-rift', '/destinations', '/destinations/uganda', '/experiences', '/experiences/gorilla-trekking', '/lodges', '/lodges/forest-hideaways', '/about', '/conservation', '/stories', '/stories/a-guide-to-gorilla-trekking', '/faq', '/plan-your-safari', '/privacy', '/terms']
  for (const route of mobileRoutes) {
    await page.goto(url + route, { waitUntil: 'domcontentloaded' })
    await page.locator('h1').waitFor()
    await loadImages()
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route}: mobile horizontal overflow`)
    const broken = await page.locator('img').evaluateAll((images) => images.filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.src))
    assert(broken.length === 0, `${route}: broken images: ${broken}`)
  }
  await page.goto(`${url}/plan-your-safari`, { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'reference/screenshots/planner-mobile.png', fullPage: true })
  await page.getByRole('button', { name: 'Surprise me — I’m open to inspiration', exact: true }).click()
  await page.getByRole('button', { name: 'A little more about you' }).click()
  await page.getByRole('button', { name: 'A little more about you' }).click()
  await page.getByLabel('Your name').fill('Morgan Explorer')
  await page.getByLabel('Email address').fill('morgan@example.com')
  await page.getByRole('checkbox').check()
  await page.getByRole('button', { name: 'Create my safari brief' }).click()
  await expect(page.locator('.planner-success')).toBeVisible()
  for (const width of [360, 768, 1024, 1280, 1920]) {
    await page.setViewportSize({ width, height: 1000 })
    for (const path of ['/', '/safaris', '/destinations', '/plan-your-safari']) {
      await page.goto(url + path, { waitUntil: 'domcontentloaded' })
      await page.locator('h1').waitFor()
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${path}: horizontal overflow at ${width}px`)
    }
  }
  assert(errors.length === 0, `Browser runtime errors: ${errors.join(', ')}`)
  console.log(`PASS: Desktop and mobile navigation, ${routes.length + mobileRoutes.length} route checks, no overflows, no broken loaded images, safari filters, sorting, search, local shortlist persistence, video modal, accordion, FAQ search, full desktop and mobile planner, validation, and file download. No browser runtime errors.`)
} catch (error) {
  console.error(error)
  await page.screenshot({ path: 'reference/screenshots/test-failure.png', fullPage: true })
  process.exitCode = 1
} finally {
  await browser.close()
  await new Promise((resolve) => server.close(resolve))
}
