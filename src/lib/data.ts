export type Safari = {
  slug: string
  title: string
  country: string
  days: number
  category: string
  image: string
  tag: string
  intro: string
  places: string[]
  highlights: string[]
  itinerary: { title: string; text: string }[]
}

export const safaris: Safari[] = [
  {
    slug: 'gorillas-and-the-great-rift', title: 'Gorillas & the Great Rift', country: 'Uganda', days: 8, category: 'Gorilla trekking', image: '/images/gorilla.jpg', tag: 'THE KIBIRA SIGNATURE',
    intro: 'From the quiet of an ancient rainforest to the wide-open plains of Queen Elizabeth, discover the extraordinary contrasts of Uganda. A journey of close encounters, unhurried mornings, and places that stay with you.',
    places: ['Entebbe', 'Kibale Forest', 'Queen Elizabeth', 'Bwindi Forest'],
    highlights: ['Meet mountain gorillas in their forest home', 'Follow chimpanzees through the canopy of Kibale', 'Cruise the wildlife-rich Kazinga Channel', 'Stay in intimate, nature-led lodges'],
    itinerary: [
      { title: 'Day 1 · A warm Ugandan welcome', text: 'Arrive in Entebbe and settle into a peaceful guesthouse near Lake Victoria. Meet your guide, talk through the days ahead, and take time to ease into a different rhythm.' },
      { title: 'Days 2–3 · Into the green of Kibale', text: 'Travel west through changing landscapes to the forests of Kibale. Join a ranger-led chimpanzee tracking walk, then explore the Bigodi wetlands with a local guide, listening for birds and learning about life beside the forest.' },
      { title: 'Days 4–5 · Where the plains meet the water', text: 'Continue to Queen Elizabeth National Park. Set out early for game drives, then take to the Kazinga Channel by boat to watch hippos, elephants, and waterbirds from a different perspective.' },
      { title: 'Days 6–7 · An encounter like no other', text: 'Wind into the highlands and the ancient rainforest of Bwindi. After a ranger briefing, trek with your small group to find a mountain gorilla family. The following day is left gentle, with an optional community-led walk and time to reflect.' },
      { title: 'Day 8 · Until next time', text: 'Enjoy a final breakfast overlooking the forest before your transfer to the airstrip or the drive back to Entebbe, arranged to suit your onward journey.' },
    ],
  },
  {
    slug: 'the-wild-heart-of-kenya', title: 'The Wild Heart of Kenya', country: 'Kenya', days: 7, category: 'Wildlife safari', image: '/images/kenya.jpg', tag: 'WIDE-OPEN WONDERS',
    intro: 'Big skies, acacia-dotted plains, and wildlife on its own terms. Follow the rhythm of the savannah on a private journey through the landscapes that make Kenya unforgettable.',
    places: ['Nairobi', 'Lake Naivasha', 'Maasai Mara'],
    highlights: ['Game drives across the Maasai Mara', 'Slow mornings by Lake Naivasha', 'Golden-hour wildlife photography', 'Small, atmospheric tented camps'],
    itinerary: [
      { title: 'Day 1 · Ease into East Africa', text: 'Your guide meets you in Nairobi. Settle into a garden hotel and spend the afternoon at your own pace before an informal introduction to the week ahead.' },
      { title: 'Days 2–3 · A lake with a life of its own', text: 'Drive into the Great Rift Valley to Lake Naivasha. Explore the shore with a naturalist, take a boat trip, and enjoy time at your lakeside retreat.' },
      { title: 'Days 4–6 · The magnificent Mara', text: 'The next three days are shaped around the light and the wildlife. Head out on private game drives, enjoy picnic lunches under acacia trees, and return to camp for evenings by the fire. A community visit can be arranged with a local host.' },
      { title: 'Day 7 · One last sunrise', text: 'Enjoy a final morning in the bush before your return to Nairobi. Add time on the coast or a further conservancy stay if you are not quite ready to leave.' },
    ],
  },
  {
    slug: 'rwanda-beyond-the-mist', title: 'Rwanda, Beyond the Mist', country: 'Rwanda', days: 6, category: 'Gorilla trekking', image: '/images/rwanda.jpg', tag: 'A DIFFERENT PERSPECTIVE',
    intro: 'Green hills give way to volcanic peaks, and forest trails lead to life-changing encounters. Discover Rwanda at a thoughtful pace, from the creative energy of Kigali to the shores of Lake Kivu.',
    places: ['Kigali', 'Volcanoes National Park', 'Lake Kivu'],
    highlights: ['Gorilla trekking in the volcanic highlands', 'Discover Kigali with a local guide', 'Lake Kivu sunset walks', 'Beautiful highland hideaways'],
    itinerary: [
      { title: 'Day 1 · The heart of Kigali', text: 'Settle into Kigali, then join a local guide for a thoughtful introduction to the city, its creative spaces, and its history. Visits can be tailored to your interests and energy after the journey.' },
      { title: 'Day 2 · Into the highlands', text: 'Journey north through terraced hills toward Volcanoes National Park. Arrive at your mountain retreat in time for a slow lunch and a walk in the surrounding countryside.' },
      { title: 'Day 3 · In the company of gorillas', text: 'Meet your park rangers for a briefing, then follow forest trails toward a habituated gorilla family. The terrain and pace vary; your guide and porters support you along the way. Return to the lodge with an afternoon to reflect.' },
      { title: 'Days 4–5 · A little time by the lake', text: 'Travel to Lake Kivu for a gentler change of pace. Take a guided lakeside walk, explore by boat, or simply find a quiet place to sit with a book and watch the light change.' },
      { title: 'Day 6 · Carry the feeling home', text: 'After breakfast, return to Kigali for your onward flight. Your transfer is arranged around your departure time.' },
    ],
  },
  {
    slug: 'serengeti-under-canvas', title: 'Serengeti, Under Canvas', country: 'Tanzania', days: 9, category: 'Wildlife safari', image: '/images/tanzania.jpg', tag: 'THE CLASSIC, REIMAGINED',
    intro: 'A front-row seat to the natural world. Experience Tarangire’s ancient baobabs, the remarkable Ngorongoro landscape, and the endless grasslands of the Serengeti, with the simple luxury of sleeping under canvas.',
    places: ['Arusha', 'Tarangire', 'Ngorongoro', 'Serengeti'],
    highlights: ['Seek out elephants among Tarangire’s baobabs', 'Explore the Ngorongoro Crater', 'Spend unhurried days in the Serengeti', 'Fall asleep to the sounds of the bush'],
    itinerary: [
      { title: 'Day 1 · A gentle beginning in Arusha', text: 'Arrive and unwind at a leafy retreat near Arusha. Over dinner, your guide shares the route and helps you prepare for the days ahead.' },
      { title: 'Days 2–3 · Baobabs and elephant trails', text: 'Explore Tarangire with a private guide, following the river and the shade of ancient trees. Between drives, rest at your intimate bush camp.' },
      { title: 'Days 4–5 · The highlands of Ngorongoro', text: 'Continue through the highlands and descend into the crater for a day of wildlife viewing. Take time to appreciate the remarkable geography and the different habitats held within it.' },
      { title: 'Days 6–8 · As far as the eye can see', text: 'Head into the Serengeti for three nights under canvas. Your guide adapts each day to local wildlife movements, the weather, and your interests, with no rush to tick off a list.' },
      { title: 'Day 9 · A last look at the plains', text: 'Say goodbye over breakfast before transferring to the airstrip for your onward journey. A Zanzibar extension can be woven into your personal itinerary.' },
    ],
  },
  {
    slug: 'uganda-at-your-own-pace', title: 'Uganda, at Your Own Pace', country: 'Uganda', days: 12, category: 'Family & slow travel', image: '/images/game-drive.jpg', tag: 'MORE TIME, MORE CONNECTION',
    intro: 'A longer journey for curious souls. With space for spontaneous stops and unhurried lodge days, discover the waterways, forests, and open plains of Uganda together.',
    places: ['Entebbe', 'Murchison Falls', 'Kibale', 'Queen Elizabeth', 'Lake Mburo'],
    highlights: ['A boat safari on the Nile', 'Walk with a local naturalist', 'A flexible pace for the whole family', 'Wildlife, waterfalls, and wide-open skies'],
    itinerary: [
      { title: 'Days 1–2 · Make yourself at home', text: 'Arrive in Entebbe and spend a relaxed day near Lake Victoria. Explore the botanical gardens or simply enjoy the gardens at your guesthouse.' },
      { title: 'Days 3–5 · Follow the Nile', text: 'Travel to Murchison Falls for game drives, a river cruise, and a walk to a viewpoint over the falls. Afternoons include plenty of time to rest and reconnect.' },
      { title: 'Days 6–8 · Forests, birds, and big discoveries', text: 'Head south toward Kibale and Queen Elizabeth. Activities are planned around the ages and interests of your group; forest walks, birding, and a channel cruise create a wonderfully varied few days.' },
      { title: 'Days 9–11 · Slow down in Lake Mburo', text: 'A small park with a big sense of space. Enjoy gentle game drives and guided walks where appropriate, with peaceful afternoons at your lodge.' },
      { title: 'Day 12 · The journey home', text: 'Return to Entebbe with time for a final lunch together before your onward flight.' },
    ],
  },
  {
    slug: 'two-countries-one-extraordinary-journey', title: 'Forests, Plains & Everything Between', country: 'Uganda & Kenya', days: 14, category: 'Private adventure', image: '/images/hero-safari.webp', tag: 'THE GRAND JOURNEY',
    intro: 'Begin among the mountain gorillas of Uganda and finish beneath the sweeping skies of Kenya. Two remarkable countries, one seamless private journey, and a whole new perspective on the wild.',
    places: ['Entebbe', 'Bwindi', 'Nairobi', 'Maasai Mara'],
    highlights: ['Combine rainforest and savannah', 'Gorilla trekking in Bwindi', 'Private guiding in the Maasai Mara', 'Time to pause between adventures'],
    itinerary: [
      { title: 'Days 1–3 · Uganda welcomes you', text: 'Ease into your journey in Entebbe, then travel to Bwindi’s emerald hills. Settle into a lodge on the edge of the forest and get to know your local surroundings.' },
      { title: 'Days 4–5 · The quiet magic of Bwindi', text: 'Join a ranger-led gorilla trek and leave a day for a guided village walk, a craft experience, or simply enjoying the forest views from your lodge.' },
      { title: 'Days 6–8 · A change of scenery', text: 'Travel onward to Kenya, allowing an overnight in Nairobi before continuing to your safari camp. All transfers are designed to keep the journey comfortable and unhurried.' },
      { title: 'Days 9–13 · Let the wild set the pace', text: 'Enjoy an extended stay in the Maasai Mara region, with flexible private drives, picnic lunches, and evenings under an extraordinary night sky.' },
      { title: 'Day 14 · A farewell, not a goodbye', text: 'Return to Nairobi for your flight home, carrying the contrasts and connections of two countries with you.' },
    ],
  },
]

export type Destination = { slug: string; name: string; tagline: string; image: string; label: string; description: string; places: { name: string; text: string }[]; season: string }
export const destinations: Destination[] = [
  { slug: 'uganda', name: 'Uganda', tagline: 'Wild at heart. Warm in spirit.', image: '/images/gorilla.jpg', label: 'THE PEARL OF AFRICA', description: 'Ancient forests, shimmering lakes, and savannah stretching toward the horizon. Uganda is a place of wonderful contrasts, where a morning with mountain gorillas can give way to an afternoon of birdsong and big skies. Come for the wildlife. Stay for the warmth of its people.', places: [{ name: 'Bwindi Impenetrable Forest', text: 'Step beneath an ancient canopy for a ranger-led encounter with mountain gorillas.' }, { name: 'Queen Elizabeth National Park', text: 'Explore a mosaic of grasslands, lakes, and wetlands, including the wildlife-rich Kazinga Channel.' }, { name: 'Kibale Forest', text: 'Follow the sounds of the forest into one of Uganda’s most rewarding primate habitats.' }], season: 'There is something to discover in every season. Forest trails can be wet at any time of year; your route and daily rhythm should be planned around local conditions and your interests.' },
  { slug: 'rwanda', name: 'Rwanda', tagline: 'A thousand hills. Endless possibility.', image: '/images/rwanda.jpg', label: 'THE LAND OF A THOUSAND HILLS', description: 'Mist gathers around volcanic peaks, tea-green hills unfold around each bend, and every journey feels deeply personal. Rwanda brings together extraordinary nature, thoughtful hospitality, and a creative capital that rewards a little extra time.', places: [{ name: 'Volcanoes National Park', text: 'A dramatic highland landscape and a remarkable place to encounter mountain gorillas.' }, { name: 'Kigali', text: 'Discover art, food, history, and a city best explored through local eyes.' }, { name: 'Lake Kivu', text: 'Slow down beside the water, with lakeside walks and quiet, golden evenings.' }], season: 'Mountain weather is changeable throughout the year. Build a little flexibility into your plans and pack for cool mornings, warm afternoons, and the possibility of rain.' },
  { slug: 'kenya', name: 'Kenya', tagline: 'The Africa you have always imagined.', image: '/images/kenya.jpg', label: 'WHERE THE SAVANNAH BEGINS', description: 'Acacia silhouettes, the hush before sunrise, and grasslands that seem to go on forever. Kenya is an invitation to reconnect with the natural world, from private conservancies to the open spaces of the Maasai Mara.', places: [{ name: 'Maasai Mara', text: 'A celebrated landscape of rolling grasslands, big cats, and extraordinary seasonal wildlife.' }, { name: 'Lake Naivasha', text: 'Freshwater shores, birdlife, and a gentler interlude in the Great Rift Valley.' }, { name: 'Private conservancies', text: 'Intimate camps and a considered safari experience rooted in the surrounding landscape.' }], season: 'Wildlife movements follow rainfall and fresh grazing rather than a fixed calendar. We recommend choosing the experience you want first, then shaping the timing and location around it.' },
  { slug: 'tanzania', name: 'Tanzania', tagline: 'Room to roam. Space to wonder.', image: '/images/tanzania.jpg', label: 'THE LAND OF ENDLESS PLAINS', description: 'From the baobabs of Tarangire to the immensity of the Serengeti, Tanzania invites you to think a little bigger and move a little slower. A landscape of astonishing scale, best experienced with time, curiosity, and a wonderful guide.', places: [{ name: 'Serengeti', text: 'Spend days following the light, the weather, and the wildlife across the great plains.' }, { name: 'Ngorongoro', text: 'A remarkable volcanic landscape with rich habitats and extraordinary views.' }, { name: 'Tarangire', text: 'Ancient baobabs, elephant trails, and an especially evocative introduction to the bush.' }], season: 'Different parts of the northern circuit shine at different times. A thoughtful route takes account of local rainfall, camp locations, and the experience you hope to have.' },
]

export const experiences = [
  { slug: 'gorilla-trekking', title: 'A moment with the mountain gorillas', shortTitle: 'Gorilla trekking', image: '/images/gorilla.jpg', eyebrow: 'THE EXTRAORDINARY, UP CLOSE', text: 'There is a moment when the forest falls quiet. You look up, and there they are. Meeting mountain gorillas in their natural home is not a spectacle. It is a connection, humbling and impossible to forget.', details: ['Follow experienced park rangers along living forest trails.', 'Travel at a considered pace, with porter support available.', 'Keep a respectful distance and follow every ranger instruction.', 'Make room for the experience to unfold without rushing.'], category: 'Gorilla trekking' },
  { slug: 'wildlife-safaris', title: 'Let the wild set the pace', shortTitle: 'Wildlife safaris', image: '/images/kenya.jpg', eyebrow: 'OUT THERE, FULLY PRESENT', text: 'An elephant appears through the morning haze. A lion lifts its head in the long grass. On a private wildlife safari, the most memorable moments are often the ones you could never have planned.', details: ['Private game drives shaped around your interests.', 'Guides who share the stories behind each sighting.', 'Unhurried stops and time to put the camera down.', 'Carefully chosen camps close to the places you want to explore.'], category: 'Wildlife safari' },
  { slug: 'slow-and-family-travel', title: 'The best things happen together', shortTitle: 'Family & slow travel', image: '/images/game-drive.jpg', eyebrow: 'MAKE TIME FOR WHAT MATTERS', text: 'A safari can be a thousand small discoveries shared with the people you love. We believe in fewer long drives, more time in each place, and a rhythm that feels right for everyone.', details: ['Routes tailored to the ages and interests of your group.', 'Room for lodge days, pool time, and spontaneous discoveries.', 'Nature walks and activities with thoughtful local hosts.', 'Clear guidance on age restrictions for individual activities.'], category: 'Family & slow travel' },
  { slug: 'private-adventures', title: 'Your own way into the wild', shortTitle: 'Private adventures', image: '/images/rwanda.jpg', eyebrow: 'A JOURNEY AS INDIVIDUAL AS YOU', text: 'Celebrate something special, follow a lifelong curiosity, or simply get a little further from the everyday. Combine countries, add a quiet lakeside retreat, or linger in the place that captures your imagination.', details: ['A completely private itinerary built around your wish list.', 'Thoughtful transitions between countries and landscapes.', 'Intimate places to stay, from forest hideaways to canvas camps.', 'Space for photography, celebration, or the art of doing nothing.'], category: 'Private adventure' },
]

export const lodges = [
  { slug: 'forest-hideaways', title: 'Forest hideaways', location: 'UGANDA & RWANDA', image: '/images/lodge.jpg', text: 'Wake to birdsong, open the curtains to a wall of green, and return from the forest to a fire and a warm welcome. Our forest stays are chosen for their sense of place, not simply their amenities.', features: ['Forest-edge settings', 'Locally inspired dining', 'Intimate guest spaces', 'Access to guided forest experiences'], style: 'Rustic, refined & deeply peaceful' },
  { slug: 'under-canvas', title: 'A little closer, under canvas', location: 'KENYA & TANZANIA', image: '/images/hero-safari.webp', text: 'Listen to the night come alive from the comfort of a beautifully considered tent. Canvas stays bring you closer to the landscape while preserving the little comforts that make each day feel effortless.', features: ['Small-scale safari camps', 'Thoughtful en-suite tents', 'Fireside evenings', 'Wildlife on your doorstep'], style: 'Wild-hearted comfort' },
  { slug: 'lakeside-retreats', title: 'The art of slowing down', location: 'UGANDA & RWANDA', image: '/images/rwanda.jpg', text: 'Some days are best spent with nowhere particular to go. A lakeside retreat is a gentle counterpoint to an active safari: long breakfasts, walks along the shore, and views that change with the light.', features: ['Beautiful waterfront settings', 'Unhurried days', 'Locally hosted excursions', 'Space to rest and reflect'], style: 'Laid-back & restorative' },
]

export const stories = [
  { slug: 'a-guide-to-gorilla-trekking', title: 'Your first gorilla trek: what really matters', category: 'FIELD NOTES', readTime: '6 min read', image: '/images/gorilla.jpg', intro: 'It starts long before you see a gorilla. The forest smells of rain, your boots settle into the trail, and your ranger pauses to listen. Here is how to arrive ready for the experience, not just the photograph.', sections: [
    { title: 'Give yourself time to arrive', text: 'Where possible, spend a night near the park before your trek rather than attempting a long transfer on the same morning. A calm arrival, a good meal, and an early night give you a much better start than a hurried journey.' },
    { title: 'Pack for the forest, not the forecast', text: 'Wear well-worn walking boots with grip, long trousers, and comfortable layers. Bring a light rain jacket, drinking water, and a small daypack. A dry bag is useful for your camera or phone; forest weather can change quickly.' },
    { title: 'Let the rangers lead', text: 'A trek is not a scheduled performance. Routes and duration depend on where the gorillas have moved, the terrain, and local conditions. Listen closely at the briefing and follow all instructions on distance, movement, and photography. Do not trek when unwell without discussing it with the park team.' },
    { title: 'Consider a porter', text: 'A porter can help carry your daypack and offer a steady hand on a steep or slippery path. It is a practical way to make the walk more comfortable while supporting someone from a community near the park.' },
    { title: 'Put the camera down, too', text: 'Take photographs respectfully, without flash, and then take a little time simply to watch. The small gestures, family interactions, and sounds of the forest are often the details that stay with you longest.' },
  ] },
  { slug: 'the-beauty-of-travelling-slowly', title: 'The quiet beauty of travelling a little slower', category: 'A DIFFERENT PERSPECTIVE', readTime: '4 min read', image: '/images/rwanda.jpg', intro: 'There is another way to safari. One with fewer check-ins, less time watching the road, and more time noticing what is right in front of you.', sections: [
    { title: 'More than a list of places', text: 'It is tempting to fit every famous park into a single trip. But each transfer takes time and energy. Choosing fewer places often creates a richer journey: a second sunrise in a favourite valley, another conversation with your guide, or a walk you would otherwise have missed.' },
    { title: 'Stay long enough to settle in', text: 'A longer stay gives you a feel for the rhythm of a place. You learn where the light falls in the morning, which birds call before dinner, and which corner of the terrace is quietest in the afternoon.' },
    { title: 'Leave a little white space', text: 'Not every hour needs an activity. Time to read, talk, sleep, or simply look out over the landscape is not time wasted. It is often what turns a busy holiday into a genuinely restorative one.' },
    { title: 'Build your own rhythm', text: 'Tell your planner how you like to spend a day, not just what you want to see. Early starts and long game drives suit some travellers. Others want a leisurely breakfast and a shorter afternoon outing. A private safari makes room for both.' },
  ] },
  { slug: 'a-more-thoughtful-safari', title: 'Small choices. A more meaningful safari.', category: 'TRAVEL WITH PURPOSE', readTime: '5 min read', image: '/images/kenya.jpg', intro: 'Responsible travel is not one grand gesture. It is a collection of considered decisions, made before you leave home and carried with you into the wild.', sections: [
    { title: 'Ask who benefits', text: 'Look for experiences designed and led by local people, and ask how a visit supports the people hosting it. A meaningful encounter begins with consent, fair payment, and the interests of the community, not a visitor’s expectations.' },
    { title: 'Give wildlife its space', text: 'Let your guide find a respectful viewing position. Never encourage a closer approach that causes an animal to change its behaviour. Avoid feeding wildlife and choose encounters that keep wild animals wild.' },
    { title: 'Carry less, leave less', text: 'A reusable water bottle, thoughtfully packed luggage, and a commitment to taking your waste with you are small but useful habits. Follow your lodge’s advice about water, power, and laundry in remote environments.' },
    { title: 'Be curious, not intrusive', text: 'Learn a greeting, ask before taking someone’s photograph, and approach every conversation with an open mind. The most rewarding travel experiences are built on mutual respect rather than a checklist.' },
  ] },
]

export const faqs = [
  { category: 'Planning', question: 'Can every safari be personalised?', answer: 'Yes. The journeys on this website are starting points, not fixed departures. You can adjust the length, destinations, accommodation style, and pace. Use the safari planner to create a brief with your preferences and download it to keep or share.' },
  { category: 'Planning', question: 'How far in advance should I start planning?', answer: 'Start as early as you can, particularly if gorilla trekking, specific lodges, or school-holiday dates are important to you. Permits and accommodation are limited. Exact availability must be checked before any booking is confirmed.' },
  { category: 'Gorilla trekking', question: 'How fit do I need to be for a gorilla trek?', answer: 'Trekking can involve steep, muddy ground and variable walking times. Tell your planner about your mobility and comfort level in advance, consider a porter, and follow ranger advice. A suitable plan depends on the individual traveller and local conditions.' },
  { category: 'Gorilla trekking', question: 'Are gorilla sightings guaranteed?', answer: 'No wildlife encounter can be guaranteed. Rangers use their local knowledge and tracking skills to locate habituated groups, but these are wild animals in a natural environment. Your plans must always allow for changing conditions.' },
  { category: 'On safari', question: 'Is a safari suitable for children?', answer: 'Many wildlife safaris can be wonderful family journeys. Routes, accommodation, and activities should be chosen for your children’s ages and interests. Some activities, including primate tracking, have minimum ages that must be confirmed with the relevant park before booking.' },
  { category: 'On safari', question: 'What should I pack?', answer: 'Pack lightweight layers in neutral colours, comfortable closed shoes, sun protection, a reusable bottle, and personal medication. For forest walks, bring sturdy boots, long trousers, and a waterproof layer. Luggage allowances depend on your flights and transfers.' },
  { category: 'Planning', question: 'Are flights and permits included?', answer: 'That depends on the final personalised proposal. Before booking, request a clear itemised itinerary showing accommodation, transport, guiding, activities, permits, and any exclusions. The sample journeys here do not constitute a bookable quotation.' },
  { category: 'On safari', question: 'What about visas, health advice, and insurance?', answer: 'Entry rules and health guidance can change and depend on your nationality and travel history. Check the official immigration authorities and consult a qualified travel-health professional. Arrange suitable insurance, including cover for your chosen activities and evacuation.' },
]
