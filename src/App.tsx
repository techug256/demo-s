import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteProvider } from './lib/site-context'
import { Layout } from './components/Layout'
import { HomePage } from './pages/Home'
import { SafariDetailPage, SafarisPage } from './pages/Safaris'
import { DestinationDetailPage, DestinationsPage } from './pages/Destinations'
import { ExperienceDetailPage, ExperiencesPage, LodgeDetailPage, LodgesPage } from './pages/Collections'
import { AboutPage, ConservationPage, FAQPage, LegalPage, NotFoundPage, StoriesPage, StoryPage } from './pages/Editorial'
import { PlannerPage } from './pages/Planner'

function App() {
  return (
    <BrowserRouter>
      <SiteProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="safaris" element={<SafarisPage />} />
            <Route path="safaris/:slug" element={<SafariDetailPage />} />
            <Route path="destinations" element={<DestinationsPage />} />
            <Route path="destinations/:slug" element={<DestinationDetailPage />} />
            <Route path="experiences" element={<ExperiencesPage />} />
            <Route path="experiences/:slug" element={<ExperienceDetailPage />} />
            <Route path="lodges" element={<LodgesPage />} />
            <Route path="lodges/:slug" element={<LodgeDetailPage />} />
            <Route path="stories" element={<StoriesPage />} />
            <Route path="stories/:slug" element={<StoryPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="conservation" element={<ConservationPage />} />
            <Route path="plan-your-safari" element={<PlannerPage />} />
            <Route path="contact" element={<PlannerPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="privacy" element={<LegalPage type="privacy" />} />
            <Route path="terms" element={<LegalPage type="terms" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </SiteProvider>
    </BrowserRouter>
  )
}

export default App
