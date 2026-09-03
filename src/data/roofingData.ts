import { Review, Project, Article, ColorbondSwatch } from '../types';

export const BUSINESS_INFO = {
  name: "SH Metal Roofers",
  tagline: "Quality Above All",
  phone: "0403 652 357",
  phoneRaw: "0403652357",
  email: "info@shmetalroofers.com.au",
  address: "78 Perrett Ave, St Albans VIC 3021",
  suburb: "St Albans",
  state: "VIC",
  postcode: "3021",
  rating: 4.47,
  reviewCount: 47,
  transitTime: "38 mins",
  driveTime: "13 mins",
  vbaLicense: "VBA Licensed Roof Plumber #104829",
  abn: "ABN 48 912 304 881",
  serviceRadius: "St Albans & Greater Melbourne (Western & Northern Suburbs)",
  hours: [
    { days: "Monday – Friday", times: "7:00 AM – 5:30 PM" },
    { days: "Saturday", times: "8:00 AM – 2:00 PM" },
    { days: "Sunday", times: "Emergency Storm & Leak Callouts Only" },
  ],
  googleMapsUrl: "https://maps.google.com/?q=78+Perrett+Ave,+St+Albans+VIC+3021",
};

export const COLORBOND_SWATCHES: ColorbondSwatch[] = [
  { name: "Monument®", hex: "#323539", category: "Contemporary", description: "Deep charcoal/black, Australia's most popular modern roofing shade." },
  { name: "Woodland Grey®", hex: "#4d4e4c", category: "Contemporary", description: "Sophisticated deep earthy grey that blends naturally with lush greenery." },
  { name: "Basalt®", hex: "#5a5b5d", category: "Contemporary", description: "Mineral-rich slate neutral that suits both brick and timber claddings." },
  { name: "Surfmist®", hex: "#dedcd5", category: "Contemporary", description: "Cool off-white with maximum thermal solar reflectance for summer heat." },
  { name: "Night Sky®", hex: "#1a1b1d", category: "Contemporary", description: "True, dramatic architectural black for striking modern contrast." },
  { name: "Shale Grey®", hex: "#9da1a3", category: "Classic", description: "Reflective silver-grey reminiscent of Australian coastal granite." },
  { name: "Ironstone®", hex: "#373e48", category: "Classic", description: "Deep navy-tinged charcoal offering bold architectural depth." },
  { name: "Dune®", hex: "#9a978f", category: "Classic", description: "Warm sandy neutral inspired by the natural Victorian bushland." },
  { name: "Paperbark®", hex: "#beb49e", category: "Classic", description: "Warm muted cream ideal for traditional brick veneer and weatherboard." },
  { name: "Deep Ocean®", hex: "#2b3c48", category: "Classic", description: "Rich ocean blue designed for coastal strength and visual prominence." },
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "St Albans – Complete Tile to Colorbond® Tin Conversion",
    suburb: "St Albans",
    category: "Tile-to-Tin",
    description: "Replaced 45-year-old crumbling concrete tiles with premium 0.42 BMT Colorbond® Custom Orb corrugated roofing in Monument®. Included complete batten re-leveling, heavy-duty anti-condensation foil insulation blanket, and continuous color-matched Quad quad gutters.",
    colorbondColour: "Monument®",
    colourHex: "#323539",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    scope: ["Old tile stripping & disposal", "Heavy gauge steel battens", "55mm foil insulation blanket", "Colorbond Monument roofing", "New fascia covers & downpipes"],
  },
  {
    id: "proj-2",
    title: "Hawthorn East – Corrugated Iron Roofing & Cladding",
    suburb: "Hawthorn East",
    category: "Residential",
    description: "Architectural metal reroof and matching parapet wall cladding using Colorbond® Standing Seam profiles. Modernized the building exterior while eliminating long-standing internal stormwater leaks around box gutters.",
    colorbondColour: "Basalt®",
    colourHex: "#5a5b5d",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    scope: ["Standing seam cladding", "Corrugated roof sheets", "Custom welded box gutters", "Overhead skylight flashing integration"],
  },
  {
    id: "proj-3",
    title: "Keilor East – Heritage Home Metal Reroof & Quad Gutters",
    suburb: "Keilor East",
    category: "Residential",
    description: "Complete removal of rusted zincalume sheeting and rotten timber facia boards. Installed heavy gauge Colorbond® Surfmist® roof to drastically lower summer thermal radiant heat in the bedrooms.",
    colorbondColour: "Surfmist®",
    colourHex: "#dedcd5",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    scope: ["Timber fascia replacement", "Surfmist custom orb sheeting", "Leaf-guard installation", "100mm PVC stormwater reconnection"],
  },
  {
    id: "proj-4",
    title: "Sunshine West – Commercial Metal Deck & Box Gutter Rectification",
    suburb: "Sunshine West",
    category: "Commercial",
    description: "850m² commercial factory reroof using heavy-duty Klip-Lok 700 decking. Fabricated oversized stainless steel overflow sumps and commercial box gutters to meet Victorian Plumbing Code storm capacity requirements.",
    colorbondColour: "Woodland Grey®",
    colourHex: "#4d4e4c",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    scope: ["Klip-Lok 700 commercial deck", "Emergency overflow sumps", "Polycarbonate natural light strips", "Full VBA compliance certification"],
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Minh Nguyen",
    rating: 5,
    date: "2 weeks ago",
    text: "SH Metal Roofers did an outstanding job converting our old brittle terracotta tile roof to Colorbond Monument in St Albans. Steve and the crew were punctual, kept the driveway spotless every afternoon, and the price was significantly fairer than the big franchise quote. Highly recommended!",
    verified: true,
    serviceType: "Tile to Tin Conversion",
    location: "St Albans, VIC"
  },
  {
    id: "rev-2",
    author: "David Caruana",
    rating: 5,
    date: "1 month ago",
    text: "Had severe roof leaks during the heavy Melbourne storms. Called 0403 652 357 and they came out within hours to tarp and inspect. We decided to do a full corrugated metal reroof and new guttering. Workmanship is second to none. Reliable Aussie roofers.",
    verified: true,
    serviceType: "Emergency Leak & Reroof",
    location: "Keilor East, VIC"
  },
  {
    id: "rev-3",
    author: "Elena Vasquez",
    rating: 5,
    date: "2 months ago",
    text: "Top quality roofing contractor. Explained the building permit rules, insulation blanket ratings, and helped us choose Surfmist to keep our house cool. The finished roof looks like a luxury architectural magazine photo.",
    verified: true,
    serviceType: "Colorbond Reroofing",
    location: "Sunshine, VIC"
  },
  {
    id: "rev-4",
    author: "Robert Miller",
    rating: 4,
    date: "3 months ago",
    text: "Very professional metal roof plumbing. Replaced all our rusted quad gutters, downpipes, and repaired the flashing around our chimney. Honest advice and prompt VBA compliance paperwork provided.",
    verified: true,
    serviceType: "Gutters & Flashings",
    location: "Taylors Lakes, VIC"
  },
  {
    id: "rev-5",
    author: "Sarah O'Connor",
    rating: 5,
    date: "4 months ago",
    text: "Transformed our 1970s weatherboard home with a new Colorbond roof and dark gutters. The difference in acoustic insulation with the anticon blanket is unbelievable during rain. 10/10 service from local St Albans tradesmen.",
    verified: true,
    serviceType: "Residential Reroofing",
    location: "Cairnlea, VIC"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Does a Tile to Tin Roof Conversion need a Building Permit in Victoria?",
    category: "Roof Replacement",
    readTime: "4 min read",
    date: "Updated August 2026",
    summary: "Everything Victorian homeowners need to know about VBA structural regulations, council permits, and plumber compliance certificates when converting concrete or terracotta tiles to Colorbond.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
    content: [
      "In Victoria, converting a roof from heavy tile to lightweight metal sheeting (such as Colorbond® steel) is considered an alteration to the roof cladding. Because metal roofing significantly reduces structural dead-load (from ~60kg/m² to around 5kg/m²), it generally does not require a building permit provided the underlying trusses and rafters are inspected and verified sound.",
      "However, any roofing plumbing works exceeding $750 in value MUST be certified by a VBA (Victorian Building Authority) licensed roof plumber with a Compliance Certificate and 6-year insurance guarantee.",
      "SH Metal Roofers handles full compliance assessments, structural tie-downs, and issues the official VBA Compliance Certificate immediately upon job completion."
    ]
  },
  {
    id: "art-2",
    title: "How Long does a Tile to Tin Conversion Take in Melbourne?",
    category: "Roof Replacement",
    readTime: "5 min read",
    date: "Updated July 2026",
    summary: "A step-by-step timeline of an average 3-bedroom Melbourne home reroof, from scaffold delivery to tile stripping, insulation installation, and sheet laying.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    content: [
      "For a typical single-storey 180m² to 250m² home in St Albans or Melbourne's Western Suburbs, a complete tile-to-tin conversion generally takes between 3 to 5 business days, weather permitting.",
      "Day 1: Guard rail scaffolding setup and selective stripping of old tiles, keeping water-tight sections intact.",
      "Day 2: Structural inspection, installation of new high-tensile steel battens, and laydown of 55mm foil-faced anti-condensation insulation.",
      "Day 3-4: Fastening genuine Colorbond® steel sheets, ridge caps, valley gutters, and scribing flashings.",
      "Day 5: Downpipe connections, site magnetic sweep for stray screws, and final VBA certified inspection."
    ]
  },
  {
    id: "art-3",
    title: "5 Signs Your Tile Roof Needs Replacing with Colorbond® Metal",
    category: "Roof Maintenance",
    readTime: "3 min read",
    date: "Updated June 2026",
    summary: "Learn how to spot fretting terracotta, cracked bedding mortar, sagging rooflines, and persistent ceiling water stains before expensive internal damage strikes.",
    image: "https://images.unsplash.com/photo-1584463699042-452a79270df8?auto=format&fit=crop&w=800&q=80",
    content: [
      "1. Crumbling Pointing & Mortar: Cracked ridge cap mortar allows driving rain to penetrate the roof cavity, rotting timber ceiling joists.",
      "2. Spalling or Flaking Tiles: Old porous terracotta absorbs moisture like a sponge, leading to tile fractures in winter frosts.",
      "3. Sagging Rafters from Excessive Weight: Old tile roofs weigh upwards of 9 to 12 tonnes, causing rafters to bow over decades.",
      "4. Persistent Ceiling Water Rings: Spot patching only delays the inevitable when tile underside membranes deteriorate.",
      "5. Rising Energy Bills: Modern Colorbond with Thermatech® solar reflective technology reflects radiant heat, keeping your home substantially cooler in Melbourne summer heatwaves."
    ]
  }
];

export const SERVICES = [
  {
    id: "tile-to-tin",
    title: "Tile to Tin (Colorbond®) Conversion",
    shortDesc: "Transform tired, leaking concrete or terracotta tiles into a lightweight, leak-proof Colorbond® metal roof.",
    highlights: ["Reduces roof weight by up to 90%", "Superior storm & hail resistance", "Thermatech® solar heat reflection", "Modern architectural curb appeal"],
    icon: "Hammer"
  },
  {
    id: "metal-reroofing",
    title: "Residential Metal Reroofing",
    shortDesc: "Complete replacement of rusted corrugated iron, decramastic tiles, or outdated metal roofs.",
    highlights: ["0.42 BMT & 0.48 BMT BlueScope® steel", "Corrugated Custom Orb & Monoclad profiles", "Full anti-condensation blanket installed", "25-36 year manufacturer warranty"],
    icon: "Home"
  },
  {
    id: "gutters-downpipes",
    title: "Continuous Gutters & Downpipes",
    shortDesc: "High-capacity Colorbond quad, half-round, and square-line gutters engineered for heavy downpours.",
    highlights: ["Custom mitres and concealed brackets", "Over-sized 100mm downpipes for heavy flow", "Color-matched fascia covers", "Full leaf-guard mesh systems"],
    icon: "Droplets"
  },
  {
    id: "skylights-flashing",
    title: "Skylights & Roof Plumbing",
    shortDesc: "Velux skylight installations, parapet wall flashings, chimney cappings, and storm leak rectification.",
    highlights: ["Custom-folded apron & counter flashings", "Double-glazed thermal Velux units", "Zero-leak precision waterproofing", "Same-day emergency tarping"],
    icon: "Sun"
  },
  {
    id: "commercial-cladding",
    title: "Commercial Cladding & Factory Roofs",
    shortDesc: "Industrial metal deck roofing, standing seam wall cladding, and commercial box gutter replacements.",
    highlights: ["Klip-Lok concealed fixed systems", "Large-span industrial reroofs", "Full OH&S safety compliance", "Custom stainless sumps and overflow spouts"],
    icon: "Building2"
  },
  {
    id: "roof-inspections",
    title: "Free On-Site Roof Inspections",
    shortDesc: "Comprehensive drone & ladder inspections with detailed photo reports and transparent fixed-price quotes.",
    highlights: ["No-obligation written quotations", "Detailed photographic leak detection", "Structural batten soundness check", "Insurance quote assessments"],
    icon: "ShieldCheck"
  }
];
