import { 
  ShieldCheck, 
  TrendingUp, 
  Wrench, 
  Settings, 
  Globe,
  Award,
  Fuel,
  Gamepad2,
  Store,
  Users,
  Factory,
  Briefcase,
  Scissors,
  Monitor,
  Palette,
  Coffee,
  ShoppingBag,
  Zap,
  Map,
  Shirt
} from 'lucide-react';
import { Feature, Product, IndustrySolution, BlogPost } from './types';

export const COMPANY_NAME = "ArcadeSkillGames";

export const PAIN_POINTS: Feature[] = [
  {
    id: "legal",
    title: "100% Legal Skill Logic",
    description: "Certified 'Skill-Based' math models distinct from chance-based devices.",
    icon: ShieldCheck
  },
  {
    id: "profit",
    title: "High-Hold Revenue",
    description: "Algorithms refined over 25 years to maximize player dwell time.",
    icon: TrendingUp
  },
  {
    id: "service",
    title: "Factory-Direct Support",
    description: "Instant spare parts and direct engineer access.",
    icon: Wrench
  },
  {
    id: "custom",
    title: "OEM/ODM Branding",
    description: "Custom software and cabinets for your specific market.",
    icon: Settings
  }
];

export const PRODUCTS: Product[] = [
  // --- FISH TABLES (Machines) ---
  {
    id: "m-fish-1",
    title: "Ocean King 3 Plus - Legend of Phoenix (8-Player)",
    formFactor: "machine",
    category: "fish-table",
    description: "The gold standard in multiplayer fish hunting. This skill-based attraction rewards precise aiming and strategic cooperation. Complete 8-player cabinet with 4K LCD.",
    imageUrl: "https://picsum.photos/600/400?random=10",
    features: ["8 Player Configuration", "Bill Acceptors & Printers Included", "55-inch LG 4K Display"]
  },
  {
    id: "m-fish-2",
    title: "Monster Awakens - 4 Player Table",
    formFactor: "machine",
    category: "fish-table",
    description: "Compact 4-player fish table perfect for smaller venues. Features the same high-earning skill math model as larger tables but fits in tight spaces like C-stores.",
    imageUrl: "https://picsum.photos/600/400?random=16",
    features: ["Foldable Design for Transport", "Adjustable Skill Settings", "Key In / Key Out Ready"]
  },
  
  // --- FISH TABLES (Kits) ---
  {
    id: "k-fish-1",
    title: "Ocean King 3 Plus Game Board Kit",
    formFactor: "kit",
    category: "fish-table",
    description: "Upgrade your existing fish table cabinet. Kit includes Game Board (PCB), IO Board, and Wire Harness. Fully compatible with standard IGS pinouts.",
    imageUrl: "https://picsum.photos/600/400?random=17",
    features: ["Original IGS Software", "Operator Adjustable Settings", "Plug & Play Upgrade"]
  },

  // --- SKILL ARCADE (Machines - Vertical/Other) ---
  {
    id: "m-arcade-1",
    title: "Platinum Vertical Skill Cabinet",
    formFactor: "machine",
    category: "skill-arcade",
    description: "The ultimate vertical cabinet for modern skill games. Features a massive 43\" vertical touch screen, Halo LED lighting, and premium sound to attract players in any venue.",
    imageUrl: "https://picsum.photos/600/400?random=11",
    features: ["43\" PCAP Touch Screen", "Anti-Cheat Pulse Guard", "Metal Cabinet Construction"]
  },

  // --- SKILL ARCADE (Kits) ---
  {
    id: "k-arcade-1",
    title: "Fire Link Skill Edition (Software Kit)",
    formFactor: "kit",
    category: "skill-arcade",
    description: "Turn your vertical cabinet into a high-earning skill machine. Includes PC Box, Dongle, and Touch Driver. Features Pre-Reveal mechanics for full compliance.",
    imageUrl: "https://picsum.photos/600/400?random=12",
    features: ["Pre-Reveal Mechanics", "Mandatory Skill Feature", "High Resolution Graphics"]
  },

  // --- SKILL REEL / NUDGE (Machines) ---
  {
    id: "m-reel-1",
    title: "Vegas Pro Dual Screen Cabinet",
    formFactor: "machine",
    category: "skill-reel",
    description: "Classic dual 22-inch screen metal cabinet designed for Skill Reel titles. Players utilize Nudge/Swap tactics to complete winning combinations. Heavy-duty security.",
    imageUrl: "https://picsum.photos/600/400?random=14",
    features: ["Dual 22\" LCD Screens", "SAS Protocol Compatible", "Button Deck Customizable"]
  },
  {
    id: "m-reel-2",
    title: "Curved 43\" Elite Cabinet",
    formFactor: "machine",
    category: "skill-reel",
    description: "Premium J-Curve cabinet for VIP areas. Immersive 4K display creates a high-end skill gaming experience. Ideal for Game Rooms requiring modern aesthetics.",
    imageUrl: "https://picsum.photos/600/400?random=15",
    features: ["4K J-Curve Display", "Bose Sound System", "Wireless Phone Charger"]
  },

  // --- SKILL REEL / NUDGE (Kits) ---
  {
    id: "k-reel-1",
    title: "Lucky 777 Nudge Kit",
    formFactor: "kit",
    category: "skill-reel",
    description: "Retro-style skill reel software. Players must use the 'Nudge' feature to manually align the winning line, ensuring the outcome is determined by skill, not chance.",
    imageUrl: "https://picsum.photos/600/400?random=18",
    features: ["Nudge Skill Mechanic", "36/10 Pin Harness", "VGA/HDMI Output"]
  },
  {
    id: "k-reel-2",
    title: "Golden Buffalo Skill Board",
    formFactor: "kit",
    category: "skill-reel",
    description: "High-volatility skill reel game board. Features 'Skill Swap' mechanics where players strategically swap symbols to form the best pattern.",
    imageUrl: "https://picsum.photos/600/400?random=19",
    features: ["Skill Swap Feature", "Touchscreen Compatible", "Adjustable Difficulty"]
  }
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  // 1. Game Distributors
  {
    id: "distributors",
    title: "Game Distributors",
    icon: Globe,
    headline: "Wholesale Skill Games for Master Distributors",
    description: "Stop losing margin to middlemen. We partner directly with master distributors to provide white-label manufacturing and container-load pricing. Secure your supply chain with our factory-direct OEM solutions.",
    deepDive: "In the competitive landscape of amusement distribution, margins are everything. Sourcing from local importers cuts into your bottom line. We offer a direct manufacturing partnership for wholesale skill game machines. Our engineering team works with distributors to ensure all game logic (Nudge, Swap, Fish) meets the specific statutory requirements of your region (e.g., PA Skill Games, GA COAM, NE). We provide full spare parts kits with every container to ensure your downstream operators never face downtime.",
    imageUrl: "https://picsum.photos/800/600?random=101",
    painPoints: [
      "Middlemen markups reducing wholesale margins",
      "Inconsistent machine quality from brokers",
      "Slow supply chain for spare parts",
      "Lack of manufacturer technical support"
    ],
    benefits: [
      "Factory-Direct Pricing (No Middleman)",
      "Container Volume Discounts",
      "Priority Manufacturing Queue",
      "Direct R&D Engineer Access"
    ],
    recommendedProductIds: ["m-fish-1", "m-arcade-1", "m-reel-2"],
    techSpecs: [
      { label: "MOQ", value: "1 Unit (Sample) / 20ft Container" },
      { label: "Shipping", value: "FOB / CIF Available" },
      { label: "Voltage", value: "110V/220V Switchable" },
      { label: "Warranty", value: "12 Months Core Components" }
    ],
    roiComparison: [
      { feature: "Unit Cost", competitor: "High (Broker Fees)", us: "Factory Direct (Low)" },
      { feature: "Customization", competitor: "None/Limited", us: "Full OEM Support" },
      { feature: "Parts Supply", competitor: "Slow/Unreliable", us: "Instant Dispatch" }
    ],
    buyersGuide: [
      "Check for SAS protocol compatibility for accounting.",
      "Ensure the manufacturer offers English-speaking tech support.",
      "Verify the cabinet material is 1.2mm steel or thicker for durability."
    ],
    caseStudy: {
      title: "Texas Distributor Expansion",
      metrics: "+40% Profit Margin",
      summary: "A Dallas-based distributor switched from a local importer to our factory-direct model, saving 40% on hardware costs and enabling them to undercut competitors."
    },
    testimonial: {
      name: "Michael R.",
      role: "CEO, Lonestar Amusements",
      quote: "The direct line to the engineers makes a huge difference. We fixed a software compatibility issue in 24 hours."
    },
    faqs: [
      { question: "Do you offer exclusivity?", answer: "Yes, for qualified distributors ordering container volumes, we offer territory protection." },
      { question: "Can we put our logo on the games?", answer: "Absolutely. We offer white-label services for cabinets, decals, and software startup screens." }
    ]
  },
  // 2. Game Agents
  {
    id: "game-agents",
    title: "Game Agents",
    icon: Briefcase,
    headline: "Reliable Route Operations for Game Agents",
    description: "As an agent, your reputation depends on uptime and compliance. We provide rugged, anti-cheat protected cabinets and stable software that keeps your route running smoothly.",
    deepDive: "Route operators face a unique challenge: managing machines across dozens of locations. Reliability is key. Our machines feature industrial-grade components designed to run 24/7 in unattended environments. We integrate 'Pulse Guard' technology to prevent EMP cheating devices, protecting your revenue. Furthermore, our detailed backend reporting allows you to track play history and errors remotely.",
    imageUrl: "https://picsum.photos/800/600?random=102",
    painPoints: [
      "Frequent software crashes causing downtime",
      "Players cheating/hacking older machines",
      "Difficulty tracking revenue across locations",
      "Territory disputes with other agents"
    ],
    benefits: [
      "99.9% Software Uptime Stability",
      "Advanced Anti-Cheat I/O Boards",
      "Automated Accounting Reports",
      "Exclusive Territory Protection Options"
    ],
    recommendedProductIds: ["m-arcade-1", "m-reel-1", "k-fish-1"],
    techSpecs: [
      { label: "Security", value: "Reinforced Locks & Bars" },
      { label: "Connectivity", value: "CAT5 / WiFi Ready" },
      { label: "Bill Acceptor", value: "ICT / MEI Compatible" },
      { label: "Printer", value: "ICT / Custom Thermal" }
    ],
    roiComparison: [
      { feature: "Uptime", competitor: "Frequent Resets", us: "99.9% Stable" },
      { feature: "Anti-Cheat", competitor: "Vulnerable", us: "EMP/Jammer Proof" },
      { feature: "Service Calls", competitor: "Weekly", us: "Monthly/Quarterly" }
    ],
    buyersGuide: [
      "Look for 'Key In/Key Out' options vs Printer support based on location needs.",
      "Ensure the I/O board has anti-spark protection.",
      "Choose cabinets with reinforced cash box enclosures."
    ],
    caseStudy: {
      title: "Route Stabilization",
      metrics: "90% Less Downtime",
      summary: "An agent in Georgia replaced aging cabinets with our Platinum Vertical series, reducing maintenance calls from 5/week to nearly zero."
    },
    testimonial: {
      name: "Sarah Jenkins",
      role: "Route Operator",
      quote: "My store owners love the look of the machines, but I love that they never break down. My phone stopped ringing on weekends."
    },
    faqs: [
      { question: "Are these legal in my state?", answer: "Our games feature Nudge, Skill Swap, and Pre-Reveal mechanics. However, you must verify local ordinances." },
      { question: "How do I update the games?", answer: "We provide USB updates or board swaps for new game titles to keep players engaged." }
    ]
  },
  // 3. Custom Game Kits/Private Label
  {
    id: "custom-venue",
    title: "Custom Kits & Private Label",
    icon: Palette,
    headline: "Private Label Game Kits & Custom Cabinets",
    description: "Build your own brand, not someone else's. We design custom game software, cabinet decals, and startup screens featuring your logo.",
    deepDive: "Stand out in a crowded market. Generic games are everywhere. We offer ODM (Original Design Manufacturing) services where we modify the game assets to fit your brand. Want a specific theme (e.g., Western, Sci-Fi, Local Sports)? Our art team can reskin existing skill engines to create a unique product that is exclusively yours, preventing competitors from offering the same experience.",
    imageUrl: "https://picsum.photos/800/600?random=103",
    painPoints: [
      "Competitors down the street have the same games",
      "Generic cabinets dilute your brand identity",
      "Inability to adjust game math for local players",
      "Lack of ownership over game data"
    ],
    benefits: [
      "Custom Logo on Startup Screens",
      "Exclusive/Region-Locked Game Titles",
      "Tailored Math/Volatility Models",
      "Full Custom Cabinet Design Service"
    ],
    recommendedProductIds: ["k-arcade-1", "k-reel-2", "m-reel-2"],
    techSpecs: [
      { label: "Dev Time", value: "4-6 Weeks for Reskin" },
      { label: "Format", value: "Vertical / Dual Screen" },
      { label: "Resolution", value: "Full HD / 4K" },
      { label: "Touch", value: "3M / IR Compatible" }
    ],
    roiComparison: [
      { feature: "Brand Equity", competitor: "None (Generic)", us: "High (Your Brand)" },
      { feature: "Player Loyalty", competitor: "Low", us: "High (Exclusive Content)" },
      { feature: "Flexibility", competitor: "Locked", us: "Custom Math Models" }
    ],
    buyersGuide: [
      "Define your target audience volatility preference (High risk vs Low risk).",
      "Prepare your high-res logo files for integration.",
      "Consider region-locking features to protect your IP."
    ],
    caseStudy: {
      title: "Brand Launch",
      metrics: "Unique Market Position",
      summary: "A chain of 15 entertainment lounges launched their own 'Lounge Link' game series using our engine, creating a cult following."
    },
    testimonial: {
      name: "David C.",
      role: "Brand Director",
      quote: "Seeing our logo on the screen instead of a generic factory name made our venues feel truly professional."
    },
    faqs: [
      { question: "What is the minimum for custom software?", answer: "We can do simple logo swaps for small orders, but full reskins usually require 50+ units." },
      { question: "Do I own the game rights?", answer: "For full custom development, we can negotiate exclusive rights for your territory." }
    ]
  },
  // 4. Game Rooms
  {
    id: "game-rooms",
    title: "Game Rooms",
    icon: Gamepad2,
    headline: "High-Traffic Attractions for Game Rooms",
    description: "Dedicated game rooms need variety. From 10-player Fish Hunters to vertical Skill Nudge cabinets, we provide a diverse floor mix.",
    deepDive: "To run a successful game room, you need 'Anchor Attractions'. Our 8 or 10-player Ocean King tables serve as the social hub of your venue, driving excitement and group play. Surrounding these with our high-definition vertical skill cabinets creates a balanced floor plan that caters to both competitive multiplayer fans and solo strategic players. Our SAS-compatible systems allow for seamless integration with card swipe management tools.",
    imageUrl: "https://picsum.photos/800/600?random=104",
    painPoints: [
      "Stale game library failing to attract youth",
      "Low player interaction on single machines",
      "Need for modern, high-resolution visuals",
      "Balancing floor space with revenue"
    ],
    benefits: [
      "Diverse Game Library (Fish, Nudge, Swap)",
      "Social Multiplayer Setups",
      "4K Visuals & Immersive Sound",
      "Remote Management Systems"
    ],
    recommendedProductIds: ["m-fish-1", "m-reel-2", "m-arcade-1"],
    techSpecs: [
      { label: "Floor Space", value: "Fish Table: 8x6 ft" },
      { label: "Power", value: "110V / 10A Dedicated" },
      { label: "Audio", value: "Subwoofer Integrated" },
      { label: "Chairs", value: "Gaming Stools Available" }
    ],
    roiComparison: [
      { feature: "Social Play", competitor: "Low (Solo Only)", us: "High (Multiplayer)" },
      { feature: "Visual Appeal", competitor: "Dated Graphics", us: "4K 60FPS" },
      { feature: "Avg Bet", competitor: "$1-$2", us: "$5-$10 (Skill)" }
    ],
    buyersGuide: [
      "Mix 30% multiplayer tables with 70% solo cabinets for optimal flow.",
      "Ensure adequate aisle width (min 3ft) around fish tables.",
      "Invest in comfortable seating to extend play sessions."
    ],
    caseStudy: {
      title: "Arcade Revitalization",
      metrics: "+200% Weekend Traffic",
      summary: "Replacing old crane games with two 8-player Ocean King tables transformed a quiet game room into the local hotspot."
    },
    testimonial: {
      name: "Tony G.",
      role: "Arcade Owner",
      quote: "The fish tables are always full. It's the first thing people run to when they walk in the door."
    },
    faqs: [
      { question: "How much space do I need?", answer: "An 8-player table needs about 100 sq ft including chair space." },
      { question: "Can I adjust the difficulty?", answer: "Yes, operators can access the settings menu to adjust the skill difficulty levels." }
    ]
  },
  // 5. Arcades (General)
  {
    id: "arcades",
    title: "Arcade Venues",
    icon: Zap,
    headline: "Next-Gen Skill Arcades",
    description: "Transform your arcade with 'Skill Redemption' style gameplay. Our machines offer the excitement of adult gaming with legal compliance.",
    deepDive: "Modern arcades are evolving beyond Pac-Man. Adult players demand deeper gameplay mechanics. Our 'Skill Redemption' games bridge the gap between traditional arcade fun and the thrill of winning prizes. By utilizing Ticket Redemption modes or point-based systems, our machines fit perfectly into Dave & Buster's style family entertainment centers (FECs) or adult-focused barcades.",
    imageUrl: "https://picsum.photos/800/600?random=105",
    painPoints: [
      "High maintenance costs of old equipment",
      "Need for legal alternatives to gambling",
      "Attracting adult demographics",
      "Visual appeal of aging cabinets"
    ],
    benefits: [
      "VIP J-Curve & Aurora LED Cabinets",
      "Ticket Redemption Compatibility",
      "High-End Audio Systems",
      "Compliance Mode for Arcade Laws"
    ],
    recommendedProductIds: ["m-reel-2", "m-fish-1"],
    techSpecs: [
      { label: "Interface", value: "Ticket Dispenser / Card Swipe" },
      { label: "Display", value: "43 inch Curve" },
      { label: "Input", value: "Button Deck / Touch" },
      { label: "Sound", value: "Stereo + Sub" }
    ],
    roiComparison: [
      { feature: "Demographic", competitor: "Kids Only", us: "Adults (Higher Spend)" },
      { feature: "Prize Value", competitor: "Low (Trinkets)", us: "High (Electronics/Cash)" },
      { feature: "Replayability", competitor: "Low", us: "High (Skill Curve)" }
    ],
    buyersGuide: [
      "Check your local laws regarding 'Cash Payout' vs 'Ticket Redemption'.",
      "Select cabinets with LED attract modes to draw attention.",
      "Use card readers to reduce coin jams."
    ],
    caseStudy: {
      title: "FEC Upgrade",
      metrics: "+15% Adult F&B Sales",
      summary: "Adding a 'Skill Zone' for adults increased dwell time, leading to higher food and beverage sales at the attached bar."
    },
    testimonial: {
      name: "Marcus L.",
      role: "FEC Manager",
      quote: "It's a great way to keep the parents entertained while the kids play laser tag."
    },
    faqs: [
      { question: "Can these dispense tickets?", answer: "Yes, we can install standard ticket dispensers or interface with Embed/Intercard systems." },
      { question: "Are they difficult to maintain?", answer: "No, they use standard PC architecture and industrial screens." }
    ]
  },
  // 6. Gas Stations
  {
    id: "gas-stations",
    title: "Gas Stations",
    icon: Fuel,
    headline: "Passive Income Skill Machines for Gas Stations",
    description: "Turn 3 sq. ft. of dead space into a profit center. Our vertical skill cabinets are designed for 24/7 operation with reinforced security.",
    deepDive: "Gas stations and truck stops have high foot traffic but limited floor space. Our vertical cabinets are engineered specifically for this environment. With a footprint of just 24x24 inches, they fit in corners or near ATMS. Crucially, they are built like tanks: steel doors, reinforced bill validators, and drill-proof locks ensure your assets are safe in 24-hour unattended locations.",
    imageUrl: "https://picsum.photos/800/600?random=106",
    painPoints: [
      "Limited floor space",
      "Staff too busy to monitor machines",
      "Security concerns & vandalism risks",
      "Need for durable hardware"
    ],
    benefits: [
      "Ultra-Compact 24\" Footprint",
      "Reinforced Steel Security Bars",
      "Bill Validator Guards",
      "100% Passive Income Stream"
    ],
    recommendedProductIds: ["m-arcade-1", "m-fish-2"],
    techSpecs: [
      { label: "Dimensions", value: "24\"W x 24\"D x 72\"H" },
      { label: "Weight", value: "250 lbs (Steel)" },
      { label: "Security", value: "Pry-proof Doors" },
      { label: "Power", value: "Standard Outlet" }
    ],
    roiComparison: [
      { feature: "Revenue/SqFt", competitor: "ATM ($)", us: "Skill Game ($$$)" },
      { feature: "Staff Time", competitor: "High (Food)", us: "Zero (Passive)" },
      { feature: "Theft Risk", competitor: "Medium", us: "Low (Reinforced)" }
    ],
    buyersGuide: [
      "Place machines near the counter for visibility but out of the main queue.",
      "Anchor the machine to the wall or floor for added security.",
      "Ensure your staff knows it is a 'Skill Game' not a 'Slot Machine' to answer customer queries."
    ],
    caseStudy: {
      title: "C-Store Chain",
      metrics: "$1,500/mo Net per Machine",
      summary: "A chain of 10 gas stations installed one unit per store. The passive income covered the utility bills for all locations."
    },
    testimonial: {
      name: "Ahmed K.",
      role: "Station Owner",
      quote: "It just sits there and makes money. I don't have to restock it like the soda cooler."
    },
    faqs: [
      { question: "What if someone breaks the screen?", answer: "We use tempered glass, but replacement touch screens are affordable and easy to swap." },
      { question: "Does it accept credit cards?", answer: "Yes, we can install cashless systems like Nayax." }
    ]
  },
  // 7. Convenience Stores
  {
    id: "convenience-stores",
    title: "Convenience Stores",
    icon: ShoppingBag,
    headline: "Impulse Play Machines for C-Stores",
    description: "Capitalize on high foot traffic. Our countertop and compact vertical machines are designed to capture impulse play.",
    deepDive: "In a convenience store, every second of customer dwell time counts. While customers wait for lottery tickets or food, our bright, attractive skill games entice them to play a quick round. We offer countertop models that sit right next to the POS, encouraging impulse play with loose change, effectively increasing the average ticket size of every visitor.",
    imageUrl: "https://picsum.photos/800/600?random=107",
    painPoints: [
      "Low margins on standard retail items",
      "Need to increase customer dwell time",
      "Complex installation requirements",
      "Cash handling issues"
    ],
    benefits: [
      "Plug & Play Installation",
      "Countertop Models Available",
      "High-Velocity Cash Cycle",
      "Attracts Repeat Visits"
    ],
    recommendedProductIds: ["m-fish-2", "m-arcade-1"],
    techSpecs: [
      { label: "Counter Space", value: "22\" Width Required" },
      { label: "Screen", value: "22\" Touch" },
      { label: "Acceptor", value: "Bill + Printer" },
      { label: "Network", value: "WiFi Optional" }
    ],
    roiComparison: [
      { feature: "Margin", competitor: "Grocery (20%)", us: "Skill Game (90%+)" },
      { feature: "Space", competitor: "Large Cooler", us: "Countertop" },
      { feature: "Labor", competitor: "Stocking Required", us: "No Stocking" }
    ],
    buyersGuide: [
      "Keep the volume at a moderate level to attract attention without annoying staff.",
      "Use countertop models if floor space is premium.",
      "Rotate game themes seasonally."
    ],
    caseStudy: {
      title: "Corner Store Success",
      metrics: "+$800/Week Revenue",
      summary: "A small corner store placed a countertop skill game next to the register. Change from purchases was fed directly into the machine."
    },
    testimonial: {
      name: "Lisa M.",
      role: "Store Manager",
      quote: "Customers love playing a quick $5 while their deli sandwich is being made."
    },
    faqs: [
      { question: "Can I bolt it to the counter?", answer: "Yes, mounting holes are provided for security." },
      { question: "Does it print receipts?", answer: "Yes, for ticket redemption or cash out verification." }
    ]
  },
  // 8. Barbershops
  {
    id: "barbershops",
    title: "Barbershops",
    icon: Scissors,
    headline: "Monetize the Wait: Barbershop Gaming",
    description: "Clients waiting for a haircut are bored. Turn that downtime into revenue. Our stylish skill game cabinets fit the aesthetic.",
    deepDive: "The waiting area of a barbershop is typically dead space where customers scroll on phones. By installing a stylish skill game cabinet, you transform this boredom into engagement. Our machines can be customized with sleek black or wood-grain finishes to match the sophisticated aesthetic of a modern barbershop, providing entertainment that pays the rent.",
    imageUrl: "https://picsum.photos/800/600?random=108",
    painPoints: [
      "Unused lobby space earning $0",
      "Customers impatient during long waits",
      "Need for equipment that looks stylish",
      "Noise disturbing the ambiance"
    ],
    benefits: [
      "Sleek, Modern Cabinet Designs",
      "Volume Control & Headphone Jacks",
      "Keeps Customers Happy & Occupied",
      "Passive Revenue to Cover Rent"
    ],
    recommendedProductIds: ["m-arcade-1"],
    techSpecs: [
      { label: "Noise", value: "Adjustable Volume" },
      { label: "Finish", value: "Matte Black / Chrome" },
      { label: "Headphones", value: "3.5mm Jack Output" },
      { label: "Lighting", value: "Soft LED Halo" }
    ],
    roiComparison: [
      { feature: "Waiting Area", competitor: "Magazines ($0)", us: "Skill Game ($$$)" },
      { feature: "Vibe", competitor: "Boring", us: "Exciting" },
      { feature: "Customer Mood", competitor: "Impatient", us: "Entertained" }
    ],
    buyersGuide: [
      "Choose a cabinet style that complements your shop's interior design.",
      "Keep the sound low or use headphones to not disturb conversations.",
      "Offer shop credit as a prize option."
    ],
    caseStudy: {
      title: "Fade & Play",
      metrics: "Rent Covered",
      summary: "A 4-chair barbershop installed two machines. The monthly revenue completely covers their storefront lease."
    },
    testimonial: {
      name: "Marcus",
      role: "Master Barber",
      quote: "My clients come early now just to play the games before their cut."
    },
    faqs: [
      { question: "Is it loud?", answer: "No, you have full control over the volume and attract mode sounds." },
      { question: "How big is it?", answer: "Our vertical cabinets take up less than 2.5 square feet." }
    ]
  },
  // 9. Tattoo Studios
  {
    id: "tattoo-studios",
    title: "Tattoo Studios",
    icon: Map,
    headline: "Entertainment for Tattoo Studio Lobbies",
    description: "Tattoo sessions often involve friends waiting for hours. Give them something exciting to do.",
    deepDive: "Tattoo appointments are long, and clients often bring friends for moral support who sit idle for hours. A skill game machine provides perfect entertainment for these waiting guests. Unlike kids' arcades, our machines have 'edgy' themes and high-skill ceilings that appeal to the artistic, adult demographic typical of tattoo studios.",
    imageUrl: "https://picsum.photos/800/600?random=109",
    painPoints: [
      "Friends of clients sitting idle",
      "Need for alternative revenue streams",
      "Matching the studio's artistic vibe",
      "Durability for public access"
    ],
    benefits: [
      "Customizable Cabinet Art",
      "High-Yield Skill Games",
      "Durable Metal Construction",
      "Engages Waiting Guests"
    ],
    recommendedProductIds: ["m-arcade-1", "m-reel-2"],
    techSpecs: [
      { label: "Art", value: "Custom Decals Available" },
      { label: "Durability", value: "Industrial Steel" },
      { label: "Screen", value: "Tempered Glass" },
      { label: "Payment", value: "Cash / Cashless" }
    ],
    roiComparison: [
      { feature: "Lobby Value", competitor: "Zero", us: "High Revenue" },
      { feature: "Aesthetics", competitor: "Clashing", us: "Customizable" },
      { feature: "Engagement", competitor: "Phone Scrolling", us: "Active Play" }
    ],
    buyersGuide: [
      "We can apply your studio's artwork to the cabinet for a seamless look.",
      "Position the machine visible from the street to attract walk-ins.",
      "Ensure the machine accepts $1, $5, and $20 bills."
    ],
    caseStudy: {
      title: "Ink & Games",
      metrics: "+$1200/mo Extra",
      summary: "A busy studio added a machine for waiting guests. It generates enough cash to pay for all shop supplies monthly."
    },
    testimonial: {
      name: "Jax",
      role: "Studio Owner",
      quote: "It fits the vibe perfectly. We put our own flash art on the side panels."
    },
    faqs: [
      { question: "Can we customize the art?", answer: "Yes, send us your vector files and we will wrap the cabinet." },
      { question: "Is it secure?", answer: "Yes, industrial locks and steel construction." }
    ]
  },
  // 10. Laundromats
  {
    id: "laundromats",
    title: "Laundromats",
    icon: Shirt,
    headline: "Wash, Dry, Play: Laundromat Solutions",
    description: "You have a captive audience for 45-60 minutes. Don't let them just sit there. Monetize dwell time.",
    deepDive: "Laundromats are the holy grail of 'captive audiences'. Customers are stuck there for 45-60 minutes waiting for cycles to finish. Instead of staring at phones, they can be engaged with skill gaming. Laundromat owners report some of the highest ROIs because the foot traffic is consistent and the customers are looking for a way to pass the time.",
    imageUrl: "https://picsum.photos/800/600?random=110",
    painPoints: [
      "Customers bored while waiting for cycles",
      "Low ancillary revenue beyond washing",
      "Need for cash-heavy or cashless integration",
      "Machines must be kick-proof"
    ],
    benefits: [
      "Monetizes Dead Wait Time",
      "Heavy-Duty Industrial Cabinets",
      "Cashless Payment Ready",
      "Increases Customer Retention"
    ],
    recommendedProductIds: ["m-arcade-1", "m-reel-1"],
    techSpecs: [
      { label: "Durability", value: "Kick-Proof Metal" },
      { label: "Power", value: "Standard Outlet" },
      { label: "Visibility", value: "High Brightness LCD" },
      { label: "Install", value: "Plug & Play" }
    ],
    roiComparison: [
      { feature: "Dwell Time", competitor: "Wasted", us: "Monetized" },
      { feature: "Revenue", competitor: "Vending ($)", us: "Gaming ($$$)" },
      { feature: "Space", competitor: "Same as Washer", us: "High Yield" }
    ],
    buyersGuide: [
      "Place machines in the direct line of sight of the seating area.",
      "Use heavy-duty metal cabinets to withstand public wear and tear.",
      "Ensure the bill acceptor can handle worn bills common in cash businesses."
    ],
    caseStudy: {
      title: "Laundry Revenue Boost",
      metrics: "Double Digit Growth",
      summary: "A laundromat owner installed 3 machines. The gaming revenue now surpasses the profit from the soda and soap vending machines combined."
    },
    testimonial: {
      name: "Mrs. Kim",
      role: "Laundromat Owner",
      quote: "Best investment for the shop. It keeps the customers busy and happy."
    },
    faqs: [
      { question: "Will it disturb customers?", answer: "Volume is adjustable. Most customers appreciate the entertainment." },
      { question: "How secure is the cash?", answer: "Very. We use double-locking steel cash boxes." }
    ]
  },
  // 11. Internet Cafes
  {
    id: "internet-cafes",
    title: "Internet Cafes",
    icon: Monitor,
    headline: "Skill Gaming Integration for Cyber Cafes",
    description: "Enhance your PC/Console offerings with dedicated Skill Game machines. Higher margins than standard PC rental.",
    deepDive: "While PC time rental offers thin margins, skill gaming offers high-yield potential. Integrating dedicated 'Sweepstakes' or 'Skill' cabinets into your cyber cafe diversifies your offering. We offer server-based management systems that allow you to control credits from a central POS, integrating seamlessly with your existing cafe management workflow.",
    imageUrl: "https://picsum.photos/800/600?random=111",
    painPoints: [
      "Low margins on hourly PC rental",
      "Need for centralized management",
      "Hardware reliability for 24/7 use",
      "Differentiating from home gaming"
    ],
    benefits: [
      "High-Margin Skill Software",
      "Server-Based Management",
      "Community Tournament Features",
      "Robust Anti-Cheat Security"
    ],
    recommendedProductIds: ["k-arcade-1", "k-fish-1", "m-reel-1"],
    techSpecs: [
      { label: "Network", value: "LAN / Server Base" },
      { label: "Management", value: "POS Integration" },
      { label: "Form Factor", value: "Sit-down / Upright" },
      { label: "OS", value: "Linux / Windows Embedded" }
    ],
    roiComparison: [
      { feature: "Hourly Profit", competitor: "Low ($3-$5)", us: "High ($20+)" },
      { feature: "Maintenance", competitor: "High (PC update)", us: "Low (Embedded)" },
      { feature: "Management", competitor: "Manual", us: "Centralized" }
    ],
    buyersGuide: [
      "Consider a 'Fish Table' as a centerpiece for group play.",
      "Use POS integration to manage credits and reduce cash handling at machines.",
      "Create a VIP area for high-stakes skill players."
    ],
    caseStudy: {
      title: "Cafe Expansion",
      metrics: "Revenue Doubled",
      summary: "A PC bang added a skill gaming section. The gaming machines occupy 20% of the floor space but generate 50% of the revenue."
    },
    testimonial: {
      name: "Kevin Z.",
      role: "Cafe Manager",
      quote: "The server management system makes it so easy to add points for customers."
    },
    faqs: [
      { question: "Can I use my own PC hardware?", answer: "Yes, we sell kits (Board + I/O) compatible with standard PC setups." },
      { question: "Is network required?", answer: "For server-based games, yes. Standalone games do not require internet." }
    ]
  },
  // 12. Entertainment Lounges
  {
    id: "entertainment-lounges",
    title: "Entertainment Lounges",
    icon: Coffee,
    headline: "Premium Gaming for Lounges & Bars",
    description: "Add a VIP gaming experience to your lounge. Designed for social environments, boosting food and beverage sales.",
    deepDive: "Upscale lounges require upscale entertainment. You can't put a cheap plastic machine in a VIP environment. Our 'Elite' series cabinets feature curved 4K screens, Halo LED lighting, and premium chrome finishes. They act as functional furniture that adds to the ambiance while generating significant revenue. The 'Nudge' and 'Skill' nature of the games encourages social interaction, keeping patrons in their seats longer ordering drinks.",
    imageUrl: "https://picsum.photos/800/600?random=112",
    painPoints: [
      "Need to increase dwell time & bar tabs",
      "Creating a social atmosphere",
      "Equipment must look premium/upscale",
      "Space constraints in seating areas"
    ],
    benefits: [
      "VIP J-Curve Cabinets",
      "Social Multiplayer Features",
      "Premium Halo LED Lighting",
      "Boosts F&B Sales via Dwell Time"
    ],
    recommendedProductIds: ["m-reel-2", "m-fish-1", "m-reel-1"],
    techSpecs: [
      { label: "Aesthetics", value: "Premium LED / Chrome" },
      { label: "Screen", value: "43\" 4K Curve" },
      { label: "Seating", value: "Compatible with Stools" },
      { label: "Power", value: "Standard 110V" }
    ],
    roiComparison: [
      { feature: "Look & Feel", competitor: "Cheap/Plastic", us: "Luxury/Metal" },
      { feature: "Clientele", competitor: "Low End", us: "VIP/High Roller" },
      { feature: "Bar Tabs", competitor: "No Impact", us: "Increases Dwell" }
    ],
    buyersGuide: [
      "Select the 'Curved Elite' cabinet to match high-end decor.",
      "Ensure the machines have volume control to blend with background music.",
      "Position them near the bar to encourage drink orders while playing."
    ],
    caseStudy: {
      title: "VIP Lounge Success",
      metrics: "+25% Bar Sales",
      summary: "A high-end hookah lounge installed 4 curved cabinets. The engaging gameplay kept groups staying an average of 30 minutes longer."
    },
    testimonial: {
      name: "Darius",
      role: "Lounge Owner",
      quote: "They look amazing. It's not just a game, it's a piece of modern furniture that pays me."
    },
    faqs: [
      { question: "Do they look cheap?", answer: "No, we use metal cabinets with powder coating and 4K screens." },
      { question: "Can I turn off the lights?", answer: "Yes, lighting is fully adjustable to match your mood." }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    date: "Oct 12, 2023",
    title: "Distributor Guide: Identifying Legal 'Skill' vs. Gambling Machines",
    excerpt: "Avoid seizure risks. A deep dive into the legal distinctions of Nudge, Swap, and Fish mechanics required for compliance in key US markets like PA, GA, and TX.",
    category: "Compliance",
    imageUrl: "https://picsum.photos/600/400?random=30"
  },
  {
    id: "b2",
    date: "Sep 28, 2023",
    title: "Laundromat Passive Income Models: Case Study",
    excerpt: "Real data: How a 20-washer laundromat owner increased monthly net profit by 15% by installing just two vertical skill game cabinets in the waiting area.",
    category: "Case Study",
    imageUrl: "https://picsum.photos/600/400?random=31"
  },
  {
    id: "b3",
    date: "Sep 15, 2023",
    title: "Sourcing Direct: Why Distributors Should Bypass Local Wholesalers",
    excerpt: "The economics of buying factory-direct. We analyze the margin difference between buying local re-sellers vs. importing directly from the manufacturer.",
    category: "Sourcing",
    imageUrl: "https://picsum.photos/600/400?random=32"
  }
];

export const FACTORY_STATS = [
  { label: "Years Experience", value: "25+", icon: Award },
  { label: "R&D Engineers", value: "50+", icon: Users },
  { label: "Countries Served", value: "40+", icon: Globe },
  { label: "Monthly Capacity", value: "2000+", icon: Factory },
];