/* ── Getaway destination data ─────────────────────────────────────────── */
const HQ   = '?w=1200&q=90&auto=format&fit=crop';
const CARD = '?w=900&q=90&auto=format&fit=crop';
const Q    = CARD;

window.DESTINATIONS = {

  /* ── KANNUR / THEYYAM ─────────────────────────────────────────────── */
  kannur: {
    id: 'kannur',
    bannerImg: 'Kannur-optimized.png',
    heroVideo: 'kannur-hero.mp4',
    bannerObjPos: 'center center',
    pill: { text: 'Ideal for 2 Days trip' },
    dateRange: 'Oct – Feb (Best Season)',
    titleLines: ['Experience the', 'Malabar coast at Kannur'],
    location: 'Kannur, Kerala',
    travelTime: '8 hrs',
    weather: '26-28°C',
    description: 'Kannur sits on the Malabar coast where Marco Polo once called it the "Great Emporium of Spice Trade." Today it\'s a place of ancient sea forts, India\'s longest drive-in beach, handloom villages and — if you time it right — the most spectacular ritual art on earth.',
    tags: 'Culture . Coastal . Heritage',
    thingsToKnow: [
      'Muzhappilangad is India\'s longest drive-in beach at 4 km — go at dawn or dusk for the best light and fewest crowds',
      'St. Angelo Fort offers panoramic sea views from its ramparts — arrive at sunset for an unmissable golden hour over the Arabian Sea',
      'Theyyam season runs October to May — check local temple calendars to catch a live performance, free and open to everyone'
    ],
    knownFor: {
      heading: '"Kannur"', subheading: 'known for', squiggleW: '89px',
      items: [
        { img: 'theyyam_banner.png', objPos: 'left center', label: 'Theyyam', ytId: 'BeczZlAnnQM' },
        { img: 'https://images.unsplash.com/photo-1713502359486-d3611d924f61'+Q, label: 'Muzhuppilangad beach', ytId: 'hweTJNEWzoM' },
        { img: 'https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0'+Q, label: 'Thalasseri Biriyani', ytQ: 'Thalasseri+Biryani+Kerala' },
        { img: 'https://images.unsplash.com/photo-1714645818805-da5adaca356a'+Q, label: 'Parassinikadavu Temple', ytQ: 'Parassinikadavu+Muthappan+Theyyam+Kannur' }
      ]
    },
    planTitle: 'Plan your', planSub: 'Kannur days', planSqW: '67px',
    hotels: {
      subtitle: 'Stay at Kannur (Ernakulam)',
      items: [
        { name: 'KBC Green Park Hotel', area: 'Resort · Chalad', dist: '5.3 km from city centre', origPrice: '₹4200', price: '₹3200', img: 'https://images.unsplash.com/photo-1701421016474-09b19faa9f77'+CARD, rating: '4.4', reviews: '1841' },
        { name: 'Krishna Beach Resort', area: 'Resort · Chalad', dist: '5.3 km from city centre', origPrice: '₹4200', price: '₹3200', img: 'https://images.unsplash.com/photo-1724947052687-e580b3010aad'+CARD, rating: '4.4', reviews: '1841', badge: '20% off' },
        { name: 'Beach Princess Hotel', area: 'Resort · Thalassery', dist: '3.1 km from city centre', origPrice: '₹3800', price: '₹2800', img: 'https://images.unsplash.com/photo-1701421016474-09b19faa9f77'+Q, rating: '4.2', reviews: '762' },
        { name: 'Ayesha Beach Resort', area: 'Resort · Payyambalam', dist: '1.8 km from city centre', origPrice: '₹4500', price: '₹3500', img: 'https://images.unsplash.com/photo-1724947052687-e580b3010aad'+Q, rating: '4.3', reviews: '541' },
        { name: 'The Kannur Beach Hotel', area: 'Hotel · Beach Road', dist: '0.5 km from city centre', origPrice: '₹5200', price: '₹4200', img: 'https://images.unsplash.com/photo-1720975658882-54ccac0b8c9f'+Q, rating: '4.5', reviews: '328' }
      ]
    },
    buses: {
      route: 'Bangalore ↔ Kannur',
      items: [
        { dep: '20:15', arr: '09:00', dur: '7h 30m', seats: '11', price: '₹450', operator: 'Green Line Travels and H..', busType: 'Volvo multi axle A/C sleeper (2+1)', rating: '4.4', reviews: '1841' },
        { dep: '20:15', arr: '09:00', dur: '7h 30m', seats: '11', price: '₹450', operator: 'Green Line Travels and H..', busType: 'Volvo multi axle A/C sleeper (2+1)', rating: '4.4', reviews: '1841' },
        { dep: '20:30', arr: '10:00', dur: '7h 30m', seats: '14', price: '₹480', operator: 'SRS Travels', busType: 'Volvo multi axle A/C sleeper (2+1)', rating: '4.2', reviews: '986' },
        { dep: '21:00', arr: '09:30', dur: '7h 30m', seats: '9', price: '₹520', operator: 'VRL Travels', busType: 'Volvo multi axle A/C sleeper (2+1)', rating: '4.2', reviews: '986' },
        { dep: '22:00', arr: '11:00', dur: '7h 30m', seats: '18', price: '₹390', operator: 'KPN Travels', busType: 'Volvo multi axle A/C sleeper (2+1)', rating: '4.2', reviews: '986' }
      ]
    },
    foods: {
      heading: 'Authentic tastes of Kannur',
      items: [
        { num: '1', label: 'Chicken Biryani', img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a'+Q, ytQ: 'Chicken+Biryani+recipe' },
        { num: '2', label: 'Mint Lime Iced Tea', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc'+Q, ytQ: 'Mint+Lime+Iced+Tea+recipe' },
        { num: '3', label: 'Steamed Mussels', img: 'https://images.unsplash.com/photo-1710775694428-5f6e66ae6a4c'+Q, ytQ: 'Steamed+Mussels+recipe' },
        { num: '4', label: 'Idiyappam & Stew', img: 'https://images.unsplash.com/photo-1620894592665-c68bdefed3fd'+Q, ytQ: 'Idiyappam+Vegetable+Stew+Kerala' },
        { num: '5', label: 'Mango Achar', img: 'https://images.unsplash.com/photo-1664791461482-79f5deee490f'+Q, ytQ: 'Mango+Achar+pickle+recipe' }
      ]
    },
    places: {
      heading: 'Things to do & see',
      subtitle: 'Kannur has more than you think',
      items: [
        { tag: 'Beach Escape', name: 'Muzhappilangad Drive In Beach', desc: "Kerala's only drive-in beach", img: 'https://images.unsplash.com/photo-1713502359486-d3611d924f61'+Q, ytId: 'hweTJNEWzoM' },
        { tag: 'Scenic Drives', name: 'Palakkayam Thattu', desc: 'Amazing view at 3,500ft above sea level.', img: 'https://images.unsplash.com/photo-1777532996402-9f6104b73d7e'+CARD, ytQ: 'Palakkayam+Thattu+Kannur' },
        { tag: 'Heritage', name: 'Fort St. Angelo', desc: '500-year-old Portuguese sea fort', img: 'https://images.unsplash.com/photo-1647668747141-4c1505825332'+Q, ytId: 'h7rXe6MmPkQ' },
        { tag: 'Wildlife', name: 'Parassinikadavu', desc: 'Famous snake park & Muthappan temple', img: 'https://images.unsplash.com/photo-1660994116172-28efd88bd6b5'+Q, ytQ: 'Parassinikadavu+Kannur' },
        { tag: 'Culture', name: 'Arakkal Museum', desc: 'Only Muslim royal family in Kerala', img: 'https://images.unsplash.com/photo-1652960245376-17eb4a87f98b'+Q, ytQ: 'Arakkal+Museum+Kannur' }
      ]
    }
  },

  /* ── FORT KOCHI / BIENNALE ────────────────────────────────────────── */
  kochi: {
    id: 'kochi',
    bannerImg: 'Kochi-optimized.webp',
    heroVideo: 'kochi-hero.mp4',
    bannerObjPos: 'center center',
    pill: { text: 'Ideal for 3 Days trip' },
    dateRange: 'Oct – Feb (Best Season)',
    titleLines: ['Experience the', 'colonial harbour of Fort Kochi'],
    location: 'Fort Kochi, Kerala',
    travelTime: '12 hrs',
    weather: '28-32°C',
    description: 'Fort Kochi wears its 500-year history lightly — Portuguese churches, Dutch palaces, Jewish synagogues and Chinese fishing nets all share the same cobbled streets. Walk the lanes at dawn, watch fishermen haul their catch, and let the sea breeze do the rest.',
    tags: 'Coastal . Heritage . Culture',
    thingsToKnow: [
      'Chinese Fishing Nets are most magical at sunrise — arrive before 7am when fishermen are working and the golden light hits the water',
      'Fort Kochi is best explored on foot or by rented bicycle — most heritage lanes are too narrow for cars',
      'St. Francis Church (built 1503) is India\'s oldest European church — Vasco da Gama was briefly buried here'
    ],
    knownFor: {
      heading: '"Fort Kochi"', subheading: 'known for', squiggleW: '105px',
      items: [
        { img: 'Kochi-optimized.webp', label: 'Chinese Fishing Nets', ytQ: 'Chinese+Fishing+Nets+Fort+Kochi' },
        { img: 'https://images.unsplash.com/photo-1652960245376-17eb4a87f98b'+CARD, label: 'Mattancherry', ytQ: 'Mattancherry+Jew+Town+Kochi+spice' },
        { img: 'https://images.unsplash.com/photo-1543198926-22fea2a870dd'+Q, label: 'Kathakali', ytQ: 'Kathakali+performance+Kerala' },
        { img: 'https://images.unsplash.com/photo-1571980844080-5568fbce49f7'+Q, label: 'Heritage Walks', ytQ: 'Fort+Kochi+heritage+walk' }
      ]
    },
    planTitle: 'Plan your', planSub: 'Fort Kochi days', planSqW: '90px',
    hotels: {
      subtitle: 'Stay at Fort Kochi',
      items: [
        { name: 'Brunton Boatyard Hotel', area: 'Heritage · Fort Kochi', dist: '0.3 km from Fishing Nets', origPrice: '₹8500', price: '₹6800', img: 'https://images.unsplash.com/photo-1701421016474-09b19faa9f77'+Q, rating: '4.8', reviews: '2341' },
        { name: 'Malabar House', area: 'Boutique · Fort Kochi', dist: '0.5 km from Mattancherry Palace', origPrice: '₹7200', price: '₹5400', img: 'https://images.unsplash.com/photo-1724947052687-e580b3010aad'+Q, rating: '4.7', reviews: '1652', badge: '25% off' },
        { name: 'CGH Earth Spice Village', area: 'Eco Resort · Kumbalangi', dist: '8 km from Fort Kochi', origPrice: '₹9000', price: '₹7200', img: 'https://images.unsplash.com/photo-1720975658882-54ccac0b8c9f'+Q, rating: '4.9', reviews: '891' },
        { name: 'Old Harbour Hotel', area: 'Heritage · Fort Kochi', dist: '0.2 km from Chinese Nets', origPrice: '₹6500', price: '₹4800', img: 'https://images.unsplash.com/photo-1724947052687-e580b3010aad'+Q, rating: '4.6', reviews: '1124' },
        { name: 'Forte Kochi', area: 'Boutique · Fort Kochi', dist: '0.4 km from Dutch Palace', origPrice: '₹5800', price: '₹4200', img: 'https://images.unsplash.com/photo-1701421016474-09b19faa9f77'+Q, rating: '4.5', reviews: '763' }
      ]
    },
    buses: {
      route: 'Bangalore ↔ Fort Kochi',
      items: [
        { dep: '19:00', arr: '07:30', dur: '12h 30m', seats: '8', price: '₹750', operator: 'KSRTC Airavat Club Class', busType: 'Volvo multi axle A/C sleeper (2+1)', rating: '4.3', reviews: '3241' },
        { dep: '19:30', arr: '08:00', dur: '12h 30m', seats: '12', price: '₹680', operator: 'Orange Tours Travels', busType: 'Volvo A/C sleeper (2+1)', rating: '4.1', reviews: '1876' },
        { dep: '20:00', arr: '09:00', dur: '13h 00m', seats: '6', price: '₹820', operator: 'RedBus Premium', busType: 'Volvo multi axle A/C sleeper (2+1)', rating: '4.4', reviews: '987' },
        { dep: '20:30', arr: '09:30', dur: '13h 00m', seats: '15', price: '₹620', operator: 'VRL Travels', busType: 'Volvo A/C sleeper (2+1)', rating: '4.2', reviews: '2134' },
        { dep: '21:00', arr: '10:00', dur: '13h 00m', seats: '11', price: '₹590', operator: 'KPN Travels', busType: 'Volvo A/C sleeper (2+1)', rating: '4.0', reviews: '1543' }
      ]
    },
    foods: {
      heading: 'Must try foods in "Fort Kochi"',
      items: [
        { num: '1', label: 'Grilled Fish', img: 'https://images.unsplash.com/photo-1673436977947-0787164a9abc'+Q, ytQ: 'Grilled+Whole+Fish+recipe' },
        { num: '2', label: 'South Indian Thali', img: 'https://images.unsplash.com/photo-1742281257687-092746ad6021'+Q, ytQ: 'South+Indian+Thali+meals' },
        { num: '3', label: 'Idiyappam & Stew', img: 'https://images.unsplash.com/photo-1620894592665-c68bdefed3fd'+Q, ytQ: 'Idiyappam+Vegetable+Stew+Kerala' },
        { num: '4', label: 'Prawns in Red Sauce', img: 'https://images.unsplash.com/photo-1761545832792-535fafbad368'+Q, ytQ: 'Prawns+red+sauce+recipe' },
        { num: '5', label: 'North Indian Thali', img: 'https://images.unsplash.com/photo-1567337710282-00832b415979'+Q, ytQ: 'North+Indian+Thali+meals' }
      ]
    },
    places: {
      heading: 'Places to visit "Fort Kochi"',
      subtitle: 'Heritage, art & backwaters',
      items: [
        { tag: 'Heritage', name: 'Chinese Fishing Nets', desc: 'Iconic 600-year-old cantilever fishing nets at sunset', img: 'Kochi-optimized.webp', ytQ: 'Chinese+Fishing+Nets+Kochi' },
        { tag: 'Heritage', name: 'Jew Town & Synagogue', desc: 'Oldest functioning synagogue in the Commonwealth, surrounded by spice traders', img: 'https://images.unsplash.com/photo-1647668747141-4c1505825332'+Q, ytQ: 'Jew+Town+Mattancherry+Kochi+synagogue' },
        { tag: 'Heritage', name: 'Dutch Palace', desc: 'Mattancherry Palace with Kerala murals', img: 'https://images.unsplash.com/photo-1652960245376-17eb4a87f98b'+Q, ytQ: 'Dutch+Palace+Mattancherry+Kochi' },
        { tag: 'Culture', name: 'Jewish Synagogue', desc: 'Oldest active synagogue in Commonwealth', img: 'https://images.unsplash.com/photo-1647668747141-4c1505825332'+Q, ytQ: 'Jewish+Synagogue+Kochi' },
        { tag: 'Scenic', name: 'Marine Drive', desc: 'Promenade with backwater views at dusk', img: 'https://images.unsplash.com/photo-1645680149311-5a00ae5a2b2a'+Q, ytQ: 'Marine+Drive+Kochi' }
      ]
    }
  },

  /* ── COORG ───────────────────────────────────────────────────────── */
  coorg: {
    id: 'coorg',
    bannerImg: 'Coorg-optimized.webp',
    heroVideo: 'coorg-hero.mp4',
    bannerObjPos: 'center center',
    pill: { text: 'Ideal for 3 Days trip' },
    dateRange: 'Nov – Feb (Best Season)',
    titleLines: ['Experience the', 'coffee hills of Coorg'],
    location: 'Kodagu, Karnataka',
    travelTime: '6 hrs',
    weather: '15-28°C',
    description: 'Coorg (Kodagu) rises in the misty Western Ghats — rolling coffee estates, spice-scented air, and Abbey Falls cutting through monsoon green. Walk plantation trails at dawn, taste freshly brewed arabica at a Kodava homestay, and breathe in the cool mountain quiet that makes every hill-station break feel unhurried.',
    tags: 'Nature . Coffee . Trekking',
    thingsToKnow: [
      'Coffee picking season (Nov–Feb) is when estates open for free guided walks — book in advance',
      'Coorg is home to India\'s largest Tibetan settlement at Bylakuppe — the golden temple is unmissable',
      'The Kodava people are a warrior clan — homestays here offer the most authentic cultural experience'
    ],
    knownFor: {
      heading: '"Coorg"', subheading: 'known for', squiggleW: '67px',
      items: [
        { img: 'Coorg-optimized.webp', label: 'Coffee Estates', ytQ: 'Coorg+coffee+plantation+Karnataka' },
        { img: 'https://images.unsplash.com/photo-1655128629694-3f94cc94b544'+Q, label: 'Abbey Falls', ytQ: 'Abbey+Falls+Coorg+Karnataka' },
        { img: 'https://images.unsplash.com/photo-1652960245376-17eb4a87f98b'+Q, label: 'Namdroling Monastery', ytQ: 'Namdroling+Golden+Temple+Coorg' },
        { img: 'https://images.unsplash.com/photo-1571980844080-5568fbce49f7'+Q, label: "Raja's Seat", ytQ: 'Rajas+Seat+Coorg+sunset' }
      ]
    },
    planTitle: 'Plan your', planSub: 'Coorg days', planSqW: '67px',
    hotels: {
      subtitle: 'Stay at Coorg (Madikeri)',
      items: [
        { name: 'Coorg Wilderness Resort', area: 'Jungle Resort · Siddapura', dist: '12 km from Madikeri', origPrice: '₹7500', price: '₹5800', img: 'https://images.unsplash.com/photo-1701421016474-09b19faa9f77'+Q, rating: '4.7', reviews: '1342' },
        { name: 'Misty Woods Resort', area: 'Boutique · Galibeedu', dist: '8 km from Abbey Falls', origPrice: '₹6200', price: '₹4600', img: 'https://images.unsplash.com/photo-1720975658882-54ccac0b8c9f'+Q, rating: '4.5', reviews: '987', badge: '20% off' },
        { name: 'Orange County Resort', area: 'Eco Resort · Siddapur', dist: '15 km from Madikeri', origPrice: '₹12000', price: '₹9500', img: 'https://images.unsplash.com/photo-1724947052687-e580b3010aad'+Q, rating: '4.9', reviews: '2187' },
        { name: 'The Tamara Coorg', area: 'Luxury · Yavakapadi', dist: '18 km from Madikeri', origPrice: '₹15000', price: '₹11200', img: 'https://images.unsplash.com/photo-1724947052687-e580b3010aad'+Q, rating: '4.8', reviews: '654' },
        { name: 'Bison River Resort', area: 'Nature Resort · Virajpet', dist: '20 km from Madikeri', origPrice: '₹5500', price: '₹4000', img: 'https://images.unsplash.com/photo-1701421016474-09b19faa9f77'+Q, rating: '4.4', reviews: '432' }
      ]
    },
    buses: {
      route: 'Bangalore ↔ Madikeri',
      items: [
        { dep: '21:00', arr: '05:30', dur: '6h 30m', seats: '14', price: '₹420', operator: 'KSRTC Rajahamsa', busType: 'A/C Sleeper (2+1)', rating: '4.3', reviews: '2876' },
        { dep: '21:30', arr: '06:00', dur: '6h 30m', seats: '9', price: '₹380', operator: 'SRS Travels', busType: 'A/C Sleeper (2+1)', rating: '4.1', reviews: '1543' },
        { dep: '22:00', arr: '06:30', dur: '6h 30m', seats: '16', price: '₹350', operator: 'VRL Travels', busType: 'A/C Semi-sleeper', rating: '4.0', reviews: '987' },
        { dep: '22:30', arr: '07:00', dur: '6h 30m', seats: '8', price: '₹460', operator: 'Kallada Travels', busType: 'Volvo A/C Sleeper', rating: '4.4', reviews: '1234' },
        { dep: '23:00', arr: '07:30', dur: '6h 30m', seats: '12', price: '₹320', operator: 'KPN Travels', busType: 'A/C Semi-sleeper', rating: '3.9', reviews: '876' }
      ]
    },
    foods: {
      heading: 'Must try foods in "Coorg"',
      items: [
        { num: '1', label: 'Roast Pork', img: 'https://images.unsplash.com/photo-1762305193665-4334391da15f'+Q, ytQ: 'Roast+Pork+recipe' },
        { num: '2', label: 'Pour-over Coffee', img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31'+Q, ytQ: 'Pour+over+Coffee+brewing' },
        { num: '3', label: 'Shrimp Gumbo', img: 'https://images.unsplash.com/photo-1559847844-5315695dadae'+Q, ytQ: 'Shrimp+Gumbo+recipe' },
        { num: '4', label: 'Butter Chicken', img: 'https://images.unsplash.com/photo-1606471191009-63994c53433b'+Q, ytQ: 'Butter+Chicken+recipe' },
        { num: '5', label: 'Old Fashioned', img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187'+Q, ytQ: 'Old+Fashioned+cocktail+recipe' }
      ]
    },
    places: {
      heading: 'Places to visit "Coorg"',
      subtitle: 'Waterfalls, forests & tea',
      items: [
        { tag: 'Waterfall', name: 'Abbey Falls', desc: 'Spectacular 70ft waterfall in coffee forest', img: 'https://images.unsplash.com/photo-1655128629694-3f94cc94b544'+Q, ytQ: 'Abbey+Falls+Coorg' },
        { tag: 'Viewpoint', name: "Raja's Seat", desc: 'Sunset viewpoint with valley panorama', img: 'Coorg-optimized.webp', ytQ: 'Rajas+Seat+Coorg+viewpoint' },
        { tag: 'Monastery', name: 'Namdroling Monastery', desc: 'Golden Temple of the Tibetan settlement', img: 'https://images.unsplash.com/photo-1652960245376-17eb4a87f98b'+Q, ytQ: 'Namdroling+Monastery+Coorg' },
        { tag: 'Wildlife', name: 'Dubare Elephant Camp', desc: 'Interact with trained elephants at sunrise', img: 'https://images.unsplash.com/photo-1647668747141-4c1505825332'+Q, ytQ: 'Dubare+Elephant+Camp+Coorg' },
        { tag: 'Trekking', name: 'Iruppu Falls', desc: '170ft waterfall with Brahmagiri trek', img: 'https://images.unsplash.com/photo-1713502359486-d3611d924f61'+Q, ytQ: 'Iruppu+Falls+Coorg+trek' }
      ]
    }
  }
};
