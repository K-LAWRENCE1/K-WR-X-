// ===== KAWREX product list =====
// One product = one card + its own page at product.html?id=...
//
// id        - short name for the address, lowercase, no spaces
// name      - what the buyer sees
// price     - naira, numbers only
// category  - "iphone" | "android" | "software" | "gaming" | "accessories" | "playstation"
// series    - only for iphone: "13" "14" "15" "16" "17" "18"
// condition - "Brand new" | "Open box" | "UK used" | "US used" and so on
// specs     - one short line: storage, sim type, battery health
// image     - photo file name. Leave "" and the card shows the phone name instead
// badge     - small corner tag, can be ""

const PRODUCTS = [

  // ---------- iPhone 13 ----------
  {
    id: "iphone-13-pro-max-128",
    name: "iPhone 13 Pro Max",
    price: 350000,
    category: "iphone",
    series: "13",
    condition: "US used",
    specs: "128GB · Mint · 88% battery",
    image: "",
    badge: "Grade A++",
    about: "Mint condition, genuine part, IDM checked. 88% battery health. This is the cheapest way into a Pro Max."
  },
  {
    id: "iphone-13-pro-128",
    name: "iPhone 13 Pro",
    price: 470000,
    category: "iphone",
    series: "13",
    condition: "US used",
    specs: "128GB · 120Hz screen",
    image: "iphone-13-pro.jpg",
    badge: "",
    about: "The Pro with the smooth 120Hz screen. Clean unit, tested before it leaves the shop."
  },
  {
    id: "iphone-13-pro-256",
    name: "iPhone 13 Pro",
    price: 500000,
    category: "iphone",
    series: "13",
    condition: "US used",
    specs: "256GB · 120Hz screen",
    image: "iphone-13-pro.jpg",
    badge: "",
    about: "Same Pro phone, double the storage. Good for people who shoot plenty video."
  },
  {
    id: "iphone-13-128",
    name: "iPhone 13",
    price: 345000,
    category: "iphone",
    series: "13",
    condition: "US used",
    specs: "128GB · Mixed colours",
    image: "",
    badge: "Clean",
    about: "Super clean unit. Fast, reliable, and the battery still holds well. Ask for the colour you want."
  },
  {
    id: "iphone-13-256",
    name: "iPhone 13",
    price: 370000,
    category: "iphone",
    series: "13",
    condition: "US used",
    specs: "256GB · Mixed colours",
    image: "",
    badge: "",
    about: "The 13 with more storage. Same clean condition."
  },

  // ---------- iPhone 14 ----------
  {
    id: "iphone-14-pro-max-256",
    name: "iPhone 14 Pro Max",
    price: 770000,
    category: "iphone",
    series: "14",
    condition: "Europe used",
    specs: "256GB · Physical SIM + eSIM",
    image: "",
    badge: "",
    about: "Europe unit with the physical SIM tray, so it works with any Nigerian network without stress."
  },

  // ---------- iPhone 15 ----------
  {
    id: "iphone-15-128",
    name: "iPhone 15",
    price: 535000,
    category: "iphone",
    series: "15",
    condition: "US used",
    specs: "128GB · eSIM only",
    image: "",
    badge: "",
    about: "eSIM only. No SIM tray, so it is set up with eSIM. We can help you activate it."
  },
  {
    id: "iphone-15-256",
    name: "iPhone 15",
    price: 590000,
    category: "iphone",
    series: "15",
    condition: "US used",
    specs: "256GB · eSIM only",
    image: "",
    badge: "",
    about: "More storage, still eSIM only. USB-C charging like the Pro models."
  },
  {
    id: "iphone-15-512",
    name: "iPhone 15",
    price: 600000,
    category: "iphone",
    series: "15",
    condition: "US used",
    specs: "512GB · eSIM only",
    image: "",
    badge: "Big storage",
    about: "512GB for only a little more than the 256GB. Best value on this shelf."
  },
  {
    id: "iphone-15-pro-max-256",
    name: "iPhone 15 Pro Max",
    price: 920000,
    category: "iphone",
    series: "15",
    condition: "US used",
    specs: "256GB · Physical SIM + eSIM · Mixed colours",
    image: "",
    badge: "Pro Max",
    about: "Physical SIM and eSIM both work. Titanium body, big screen, strong camera."
  },

  // ---------- iPhone 16 ----------
  {
    id: "iphone-16-pro-128",
    name: "iPhone 16 Pro",
    price: 860000,
    category: "iphone",
    series: "16",
    condition: "US used",
    specs: "128GB · eSIM unlock",
    image: "",
    badge: "",
    about: "eSIM unlock, ready for any network. Camera control button and the A18 Pro chip."
  },
  {
    id: "iphone-16-pro-256",
    name: "iPhone 16 Pro",
    price: 975000,
    category: "iphone",
    series: "16",
    condition: "US used",
    specs: "256GB · eSIM unlock",
    image: "iphone-16-pro.jpg",
    badge: "Popular",
    about: "The size most people buy. 256GB is plenty for games, photos and video."
  },
  {
    id: "iphone-16-pro-512",
    name: "iPhone 16 Pro",
    price: 1050000,
    category: "iphone",
    series: "16",
    condition: "US used",
    specs: "512GB · eSIM unlock",
    image: "",
    badge: "",
    about: "Half a terabyte. Good if you record gameplay or shoot plenty 4K."
  },
  {
    id: "iphone-16-pro-1tb",
    name: "iPhone 16 Pro",
    price: 1080000,
    category: "iphone",
    series: "16",
    condition: "US used",
    specs: "1TB · eSIM unlock",
    image: "",
    badge: "1TB",
    about: "Full 1TB. Only ₦30k above the 512GB, so this is the smart pick if you want maximum space."
  },
  {
    id: "iphone-16-pro-max-256-openbox",
    name: "iPhone 16 Pro Max",
    price: 950000,
    category: "iphone",
    series: "16",
    condition: "Open box",
    specs: "256GB · Physical SIM + eSIM · 81% battery",
    image: "",
    badge: "Open box",
    about: "Open box unit, never really used. Battery at 81%, charge cycles 784. Physical SIM and eSIM."
  },
  {
    id: "iphone-16-128",
    name: "iPhone 16",
    price: 790000,
    category: "iphone",
    series: "16",
    condition: "UK used",
    specs: "128GB · Mixed colours · Physical SIM + eSIM",
    image: "iphone-16-pair.jpg",
    badge: "UK used",
    about: "Direct UK used. Battery health around 87 to 90 percent. Physical SIM and eSIM both work. Ask for the colour you want."
  },

  // ---------- iPhone 17 ----------
  {
    id: "iphone-17-pro-256-used",
    name: "iPhone 17 Pro",
    price: 1130000,
    category: "iphone",
    series: "17",
    condition: "US used",
    specs: "256GB · eSIM unlock · 100% battery",
    image: "",
    badge: "100% battery",
    about: "Used but battery still at 100 percent. eSIM unlock, clean unit."
  },
  {
    id: "iphone-17-pro-256-silver",
    name: "iPhone 17 Pro",
    price: 1640000,
    category: "iphone",
    series: "17",
    condition: "Brand new",
    specs: "256GB · Silver",
    image: "",
    badge: "Brand new",
    about: "Sealed, brand new. Silver finish."
  },
  {
    id: "iphone-17-pro-256-orange",
    name: "iPhone 17 Pro",
    price: 1590000,
    category: "iphone",
    series: "17",
    condition: "Brand new",
    specs: "256GB · Orange",
    image: "",
    badge: "Brand new",
    about: "Sealed, brand new. Orange finish, the one everybody asks for."
  },
  {
    id: "iphone-17-pro-max-256-silver",
    name: "iPhone 17 Pro Max",
    price: 1820000,
    category: "iphone",
    series: "17",
    condition: "Brand new",
    specs: "256GB · Silver",
    image: "",
    badge: "Brand new",
    about: "Sealed, brand new. Biggest screen in the 17 line."
  },
  {
    id: "iphone-17-pro-max-256-orange",
    name: "iPhone 17 Pro Max",
    price: 1720000,
    category: "iphone",
    series: "17",
    condition: "Brand new",
    specs: "256GB · Orange",
    image: "",
    badge: "Brand new",
    about: "Sealed, brand new. Orange Pro Max."
  },
  {
    id: "iphone-17-air-256",
    name: "iPhone 17 Air",
    price: 1020000,
    category: "iphone",
    series: "17",
    condition: "Brand new",
    specs: "256GB",
    image: "",
    badge: "Air",
    about: "The thin one. Brand new, sealed."
  },
  {
    id: "iphone-17-air-512",
    name: "iPhone 17 Air",
    price: 1170000,
    category: "iphone",
    series: "17",
    condition: "Brand new",
    specs: "512GB",
    image: "",
    badge: "Air",
    about: "The thin one with double storage. Sealed."
  },

  // ---------- iPhone 18 ----------
  {
    id: "iphone-18-pro-256-burgundy",
    name: "iPhone 18 Pro",
    price: 1950000,
    category: "iphone",
    series: "18",
    condition: "Brand new",
    specs: "256GB · Burgundy",
    image: "",
    badge: "Just landed",
    about: "Just landed, sealed. Burgundy finish."
  },
  {
    id: "iphone-18-pro-256-glacier",
    name: "iPhone 18 Pro",
    price: 1895000,
    category: "iphone",
    series: "18",
    condition: "Brand new",
    specs: "256GB · Glacier",
    image: "",
    badge: "Just landed",
    about: "Just landed, sealed. Glacier finish."
  },
  {
    id: "iphone-18-pro-512-glacier",
    name: "iPhone 18 Pro",
    price: 2205000,
    category: "iphone",
    series: "18",
    condition: "Brand new",
    specs: "512GB · Glacier",
    image: "",
    badge: "Just landed",
    about: "Sealed, 512GB, Glacier."
  },
  {
    id: "iphone-18-pro-512-burgundy",
    name: "iPhone 18 Pro",
    price: 2290000,
    category: "iphone",
    series: "18",
    condition: "Brand new",
    specs: "512GB · Burgundy",
    image: "",
    badge: "Just landed",
    about: "Sealed, 512GB, Burgundy."
  },
  {
    id: "iphone-18-pro-max-256-burgundy",
    name: "iPhone 18 Pro Max",
    price: 2160000,
    category: "iphone",
    series: "18",
    condition: "Brand new",
    specs: "256GB · Burgundy",
    image: "",
    badge: "Just landed",
    about: "Sealed. Biggest screen, Burgundy."
  },
  {
    id: "iphone-18-pro-max-256-glacier",
    name: "iPhone 18 Pro Max",
    price: 2080000,
    category: "iphone",
    series: "18",
    condition: "Brand new",
    specs: "256GB · Glacier",
    image: "",
    badge: "Just landed",
    about: "Sealed. Biggest screen, Glacier."
  },
  {
    id: "iphone-18-pro-max-512-glacier",
    name: "iPhone 18 Pro Max",
    price: 2460000,
    category: "iphone",
    series: "18",
    condition: "Brand new",
    specs: "512GB · Glacier",
    image: "",
    badge: "Just landed",
    about: "Sealed, 512GB, Glacier. Top of the shelf."
  },
  {
    id: "iphone-18-pro-max-512-burgundy",
    name: "iPhone 18 Pro Max",
    price: 2510000,
    category: "iphone",
    series: "18",
    condition: "Brand new",
    specs: "512GB · Burgundy",
    image: "",
    badge: "Just landed",
    about: "Sealed, 512GB, Burgundy."
  },

  // ---------- Android ----------

  // ---------- Software ----------

  // ---------- Gaming tablets and phones ----------
  {
    id: "ipad-pro-m4",
    name: "iPad Pro (M4)",
    price: 1250000,
    category: "gaming",
    specs: "13 inches · 256GB",
    image: "ipad-pro-m4.jpg",
    badge: "Premium",
    about: "The strongest tablet we carry. Runs heavy games at high settings without slowing down, and the screen makes everything look expensive."
  },
  {
    id: "ipad-air-m2",
    name: "iPad Air (M2)",
    price: 880000,
    category: "gaming",
    specs: "64GB / 256GB",
    image: "ipad-air-m2.jpg",
    badge: "Best value",
    about: "Almost the same speed as the Pro for a lot less money. This is the one most people should buy."
  },
  {
    id: "lenovo-legion-y700",
    name: "Lenovo Legion Y700",
    price: 580000,
    category: "gaming",
    specs: "144Hz display",
    image: "lenovo-legion-y700.jpg",
    badge: "Gaming tablet",
    about: "Built for games first. The 144Hz screen makes fast games feel smooth, and the size fits your hands better than a big iPad."
  },
  {
    id: "asus-rog-phone-8-pro",
    name: "ASUS ROG Phone 8 Pro",
    price: 440000,
    category: "gaming",
    specs: "165Hz AMOLED",
    image: "asus-rog-phone-8-pro.jpg",
    badge: "Gaming phone",
    about: "A phone made for gaming. 165Hz AMOLED screen, cooling built in, and shoulder triggers you can actually feel."
  },
  {
    id: "ipad-10th-gen-64",
    name: "iPad 10th Gen",
    price: 410000,
    category: "gaming",
    specs: "64GB · WiFi + Cellular",
    image: "",
    badge: "",
    about: "US unit with cellular, so it works with a SIM. Good everyday tablet for streaming, school and light games."
  },

  // ---------- Accessories ----------
  {
    id: "gaming-headset",
    name: "Gaming Headset",
    price: 55000,
    category: "accessories",
    specs: "USB wired headset",
    image: "gaming-headset.jpg",
    badge: "",
    about: "Clear sound and a microphone that your teammates can actually hear. Plugs straight in with USB."
  },
  {
    id: "thumb-sleeves",
    name: "Thumb Sleeves",
    price: 3000,
    category: "accessories",
    specs: "Sweat-resistant touch sleeves",
    image: "thumb-sleeves.jpg",
    badge: "Small but mighty",
    about: "Stops your thumb slipping when your hands get sweaty mid-game. Cheap fix for missed shots."
  }
];
