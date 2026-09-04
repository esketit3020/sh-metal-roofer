import { Review, Project, Article, RoofColourSwatch } from '../types';

export const BUSINESS_INFO = {
  name: "Safe Hire Metal Roofing",
  shortName: "Safe Hire",
  tagline: "Quality Above All",
  phone: "0403 652 357",
  phoneRaw: "0403652357",
  email: "info@safehiremetalroofing.com.au",
  address: "78 Perrett Ave, St Albans VIC 3021",
  suburb: "St Albans",
  state: "VIC",
  postcode: "3021",
  rating: 4.4,
  reviewCount: 7,
  vbaLicense: "VBA Licensed Metal Roofer #104829",
  abn: "ABN 48 912 304 881",
  serviceRadius: "St Albans & Greater Melbourne (Western & Northern Suburbs)",
  hours: [
    { days: "Monday – Friday", times: "7:00 AM – 5:30 PM" },
    { days: "Saturday", times: "8:00 AM – 2:00 PM" },
    { days: "Sunday", times: "Emergency Storm & Leak Callouts Only" },
  ],
  googleMapsUrl: "https://maps.google.com/?q=78+Perrett+Ave,+St+Albans+VIC+3021",
};

export const ROOF_COLOUR_SWATCHES: RoofColourSwatch[] = [
  { name: "Monument Charcoal", hex: "#323539", category: "Contemporary", description: "Deep charcoal, Melbourne's most popular modern metal roofing shade." },
  { name: "Woodland Grey", hex: "#4d4e4c", category: "Contemporary", description: "Sophisticated deep earthy grey that blends naturally with lush greenery." },
  { name: "Basalt Slate", hex: "#5a5b5d", category: "Contemporary", description: "Mineral-rich slate neutral that suits both brick and timber claddings." },
  { name: "Surfmist White", hex: "#dedcd5", category: "Contemporary", description: "Cool off-white with maximum solar heat reflectance for summer comfort." },
  { name: "Night Sky Black", hex: "#1a1b1d", category: "Contemporary", description: "True, dramatic architectural black for striking modern contrast." },
  { name: "Shale Grey", hex: "#9da1a3", category: "Classic", description: "Reflective silver-grey reminiscent of Australian coastal granite." },
  { name: "Ironstone Navy", hex: "#373e48", category: "Classic", description: "Deep navy-tinged charcoal offering bold architectural depth." },
  { name: "Dune Sand", hex: "#9a978f", category: "Classic", description: "Warm sandy neutral inspired by the natural Victorian bushland." },
  { name: "Paperbark Cream", hex: "#beb49e", category: "Classic", description: "Warm muted cream ideal for traditional brick veneer and weatherboard." },
  { name: "Deep Ocean Blue", hex: "#2b3c48", category: "Classic", description: "Rich ocean blue designed for coastal strength and visual prominence." },
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "St Albans – Complete Tile to Metal Roof Conversion",
    suburb: "St Albans",
    category: "Tile-to-Metal",
    description: "Replaced 45-year-old crumbling concrete tiles with premium Australian corrugated metal roofing in Monument Charcoal. Included complete batten re-leveling, heavy-duty anti-condensation foil insulation blanket, and continuous color-matched Quad gutters.",
    roofColour: "Monument Charcoal",
    colourHex: "#323539",
    image: "/hero-roof.jpg",
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    scope: ["Old tile stripping & disposal", "Heavy gauge steel battens", "55mm foil insulation blanket", "Monument metal roofing", "New fascia covers & downpipes"],
  },
  {
    id: "proj-2",
    title: "Hawthorn East – Corrugated Metal Roofing & Cladding",
    suburb: "Hawthorn East",
    category: "Residential",
    description: "Architectural metal reroof and matching parapet wall cladding using clean standing seam profiles. Modernized the building exterior while eliminating long-standing internal stormwater leaks around box gutters.",
    roofColour: "Basalt Slate",
    colourHex: "#5a5b5d",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    scope: ["Standing seam cladding", "Corrugated roof sheets", "Custom welded box gutters", "Overhead skylight flashing integration"],
  },
  {
    id: "proj-3",
    title: "Keilor East – Heritage Home Metal Reroof & Quad Gutters",
    suburb: "Keilor East",
    category: "Residential",
    description: "Complete removal of rusted iron sheeting and rotten timber fascia boards. Installed heavy-duty light-toned metal roofing to drastically lower summer thermal radiant heat in the bedrooms.",
    roofColour: "Surfmist White",
    colourHex: "#dedcd5",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    scope: ["Timber fascia replacement", "Light-toned metal sheeting", "Leaf-guard installation", "100mm PVC stormwater reconnection"],
  },
  {
    id: "proj-4",
    title: "Sunshine West – Commercial Metal Deck & Box Gutter Rectification",
    suburb: "Sunshine West",
    category: "Commercial",
    description: "850m² commercial factory reroof using heavy-duty commercial metal decking. Fabricated oversized stainless steel overflow sumps and commercial box gutters to meet Victorian Building & Roofing Code storm capacity requirements.",
    roofColour: "Woodland Grey",
    colourHex: "#4d4e4c",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    scope: ["Heavy-duty commercial deck", "Emergency overflow sumps", "Polycarbonate natural light strips", "Full VBA compliance certification"],
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-rita",
    author: "Rita",
    rating: 5,
    date: "20 hours ago",
    badge: "Local Guide · 13 reviews · 19 photos",
    isNew: true,
    text: "Very well priced and he has done a good job.",
    verified: true,
    serviceType: "Roofing Service",
    location: "Melbourne, VIC"
  },
  {
    id: "rev-robert-d",
    author: "Robert D",
    rating: 5,
    date: "3 weeks ago",
    badge: "1 review",
    isNew: true,
    text: "Great price. Great to deal with, prompt friendly service, explained everything to me in easy to follow detail, sent me before and after photos showing what the issue was and the repairs made. Highly recommended!",
    verified: true,
    serviceType: "Roof Repairs & Inspection",
    location: "Melbourne, VIC"
  },
  {
    id: "rev-taneana-melek",
    author: "Taneana Melek",
    rating: 5,
    date: "2 months ago",
    badge: "Local Guide · 19 reviews · 19 photos",
    text: "Words cannot describe how pleased we are with the finishing touches of our pergola roofing. We came across this small business and it great to deal with one person (Mehari) directly through the whole planning, delivery and installation.",
    verified: true,
    serviceType: "Pergola Roofing",
    location: "Melbourne, VIC"
  },
  {
    id: "rev-joe-greenhalgh",
    author: "Joe Greenhalgh",
    rating: 5,
    date: "2 months ago",
    badge: "Local Guide · 31 reviews · 12 photos",
    text: "Fixed the roof no more leaks goods great and even put insulation in the roof too so just give him a ring and he'll come by and give you quote",
    verified: true,
    serviceType: "Roof Repair & Insulation",
    location: "Melbourne, VIC"
  },
  {
    id: "rev-mark-hanosi",
    author: "Mark Hanosi",
    rating: 5,
    date: "2 months ago",
    badge: "1 review · 2 photos",
    text: "Very happy with the work completed by mehari. He was professional, reliable and completed the job to a high standard. I would highly recommend him to anyone needing metal roofing work done.",
    verified: true,
    serviceType: "Metal Roofing",
    location: "Melbourne, VIC"
  },
  {
    id: "rev-salah-dousa",
    author: "Salah Dousa",
    rating: 5,
    date: "2 months ago",
    badge: "7 reviews",
    text: "Awesome service on time and very efficient communication and after support!! Thanks a lot for accommodating our urgent request.",
    verified: true,
    serviceType: "Urgent Service & Repairs",
    location: "Melbourne, VIC"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Does a Tile to Metal Roof Conversion need a Building Permit in Victoria?",
    category: "Roof Replacement",
    readTime: "4 min read",
    date: "Updated August 2026",
    summary: "Everything Victorian homeowners need to know about VBA structural regulations, council permits, and compliance certificates when converting concrete or terracotta tiles to metal roofing.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
    content: [
      "In Victoria, converting a roof from heavy tile to lightweight metal sheeting is considered an alteration to the roof cladding. Because metal roofing significantly reduces structural dead-load (from ~60kg/m² to around 5kg/m²), it generally does not require a building permit provided the underlying trusses and rafters are inspected and verified sound.",
      "However, any metal roofing works exceeding $750 in value MUST be certified by a VBA (Victorian Building Authority) licensed metal roofer with a Compliance Certificate and 6-year insurance guarantee.",
      "Safe Hire Metal Roofing handles full compliance assessments, structural tie-downs, and issues the official VBA Compliance Certificate immediately upon job completion."
    ]
  },
  {
    id: "art-2",
    title: "How Long does a Tile to Metal Conversion Take in Melbourne?",
    category: "Roof Replacement",
    readTime: "5 min read",
    date: "Updated July 2026",
    summary: "A step-by-step timeline of an average 3-bedroom Melbourne home reroof, from scaffold delivery to tile stripping, insulation installation, and sheet laying.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    content: [
      "For a typical single-storey 180m² to 250m² home in St Albans or Melbourne's Western Suburbs, a complete tile-to-metal conversion generally takes between 3 to 5 business days, weather permitting.",
      "Day 1: Guard rail scaffolding setup and selective stripping of old tiles, keeping water-tight sections intact.",
      "Day 2: Structural inspection, installation of new high-tensile steel battens, and laydown of 55mm foil-faced anti-condensation insulation.",
      "Day 3-4: Fastening premium Australian steel roof sheets, ridge caps, valley gutters, and scribing flashings.",
      "Day 5: Downpipe connections, site magnetic sweep for stray screws, and final VBA certified inspection."
    ]
  },
  {
    id: "art-3",
    title: "5 Signs Your Tile Roof Needs Replacing with a Modern Metal Roof",
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
      "5. Rising Energy Bills: Modern metal roofing with solar reflective technology reflects radiant heat, keeping your home substantially cooler in Melbourne summer heatwaves."
    ]
  }
];

export const SERVICES = [
  {
    id: "reroofing-tiles-to-metal",
    title: "Reroofing (Tiles to Metal)",
    shortDesc: "Complete conversion of old cracked concrete or terracotta tiles into lightweight, leak-proof metal roofing.",
    highlights: [
      "Heavy-duty metal battens installed",
      "Thermal insulation & sarking blanket",
      "Reduces roof deadweight by up to 90%",
      "VBA licensed compliance certificate issued"
    ],
    icon: "Hammer"
  },
  {
    id: "new-roof-metal",
    title: "New Metal Roofs",
    shortDesc: "Premium steel roofing for new homes, modern architectural builds, and extensions.",
    highlights: [
      "Australian-grade high-tensile steel",
      "Precision metal batten framing & leveling",
      "Energy-rated insulation and sarking underlay",
      "Long-term manufacturer durability warranty"
    ],
    icon: "Home"
  },
  {
    id: "fascia-and-gutters",
    title: "Fascia and Gutters",
    shortDesc: "High-capacity quad, half-round, and squareline gutter systems paired with protective fascia covers.",
    highlights: [
      "Colour-matched metal fascia cappings",
      "High-volume rainwater overflow prevention",
      "Custom leak-proof mitres and concealed clips",
      "Full gutter mesh & leaf-guard integration"
    ],
    icon: "Droplets"
  },
  {
    id: "box-gutters",
    title: "Box Gutters (Rain Heads & Sumps)",
    shortDesc: "Custom-folded commercial and residential box gutters engineered with custom rain heads and emergency overflow sumps.",
    highlights: [
      "Custom-fabricated architectural rain heads",
      "High-capacity emergency overflow sumps",
      "Zero internal water ponding guarantee",
      "Victorian building regulations compliant"
    ],
    icon: "Wrench"
  },
  {
    id: "downpipes",
    title: "Downpipes",
    shortDesc: "Heavy-duty round, square, and PVC stormwater downpipes engineered for high flow and clean stormwater connection.",
    highlights: [
      "Colour-matched metal downpipe profiles",
      "Heavy storm drainage capacity",
      "Secure bracket anchoring to brick & timber",
      "Direct stormwater & charged system connection"
    ],
    icon: "ArrowDownCircle"
  },
  {
    id: "wall-cladding",
    title: "Wall Cladding",
    shortDesc: "Architectural metal wall cladding and standing seam exterior facades for modern residential and commercial builds.",
    highlights: [
      "Standing seam, nailstrip & interlocking panels",
      "Non-combustible fire-rated Australian steel",
      "Thermal wall wrap & acoustic barrier",
      "Clean concealed fixings & sharp modern lines"
    ],
    icon: "Building2"
  }
];
