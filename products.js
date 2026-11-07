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
    image: "iphone-13-starlight.jpg",
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
    image: "iphone-13-starlight.jpg",
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
    image: "iphone-14promax-purple.jpg", gallery: [{ label: "Deep purple", image: "iphone-14promax-purple.jpg" }, { label: "Gold", image: "iphone-14promax-gold.jpg" }, { label: "Space black", image: "iphone-14promax-black.jpg" }],
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
    image: "iphone-15-colours.jpg",
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
    image: "iphone-15-colours.jpg",
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
    image: "iphone-15-colours.jpg",
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
    image: "iphone-15promax-blue.jpg", gallery: [{ label: "Blue titanium", image: "iphone-15promax-blue.jpg" }, { label: "White titanium", image: "iphone-15promax-white.jpg" }],
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
    image: "iphone-16pro-desert.jpg", gallery: [{ label: "Desert titanium", image: "iphone-16pro-desert.jpg" }, { label: "Natural titanium", image: "iphone-16pro-natural.jpg" }],
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
    image: "iphone-16pro-natural.jpg",
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
    image: "iphone-16pro-natural.jpg",
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
    image: "iphone-16promax-desert.jpg",
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
    image: "iphone-17pro-pair.jpg",
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
    image: "iphone-17pro-pair.jpg",
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
    image: "iphone-17pro-pair.jpg",
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
    image: "iphone-17pro-pair.jpg",
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
    image: "iphone-17pro-pair.jpg",
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

  // ---------- Earlier iPhones (X to 12) ----------
  {
    id: "iphone-xr-64",
    name: "iPhone XR",
    price: 185000,
    category: "iphone",
    series: "old",
    condition: "US used",
    specs: "64GB · Red",
    image: "iphone-xr-red.jpg",
    badge: "Budget pick",
    about: "Clean XR in red. Single camera but it still takes solid photos, and the battery lasts a full day. Price is my estimate, tell me if yours is different."
  },
  {
    id: "iphone-xr-128",
    name: "iPhone XR",
    price: 205000,
    category: "iphone",
    series: "old",
    condition: "US used",
    specs: "128GB · Red",
    image: "iphone-xr-red.jpg",
    badge: "",
    about: "Same red XR with more storage. Good first iPhone if you want something affordable that still gets updates."
  },
  {
    id: "iphone-xs-64",
    name: "iPhone XS",
    price: 200000,
    category: "iphone",
    series: "old",
    condition: "US used",
    specs: "64GB · Silver",
    image: "iphone-xs-silver.jpg",
    badge: "",
    about: "Silver XS with the double camera and the sharp OLED screen. Small and light in the hand."
  },
  {
    id: "iphone-xs-256",
    name: "iPhone XS",
    price: 225000,
    category: "iphone",
    series: "old",
    condition: "US used",
    specs: "256GB · Silver",
    image: "iphone-xs-silver.jpg",
    badge: "",
    about: "The XS with 256GB. Plenty space for photos and apps at a low price."
  },
  {
    id: "iphone-xs-max-64",
    name: "iPhone XS Max",
    price: 230000,
    category: "iphone",
    series: "old",
    condition: "US used",
    specs: "64GB · Gold",
    image: "iphone-xsmax-gold.jpg",
    badge: "",
    about: "The big XS. Gold finish, large OLED screen, still a lovely phone for videos and browsing."
  },
  {
    id: "iphone-11-64",
    name: "iPhone 11",
    price: 255000,
    category: "iphone",
    series: "old",
    condition: "US used",
    specs: "64GB · White",
    image: "iphone-11-white.jpg",
    badge: "",
    about: "White iPhone 11. Two cameras, strong battery, and one of the most reliable older iPhones around."
  },
  {
    id: "iphone-11-pro-max-64",
    name: "iPhone 11 Pro Max",
    price: 300000,
    category: "iphone",
    series: "old",
    condition: "US used",
    specs: "64GB · Midnight green",
    image: "iphone-11promax-green.jpg",
    badge: "",
    about: "Midnight green 11 Pro Max. Triple camera, big battery, and that green finish people still ask for."
  },
  {
    id: "iphone-12-pro-128",
    name: "iPhone 12 Pro",
    price: 400000,
    category: "iphone",
    series: "old",
    condition: "US used",
    specs: "128GB · Gold",
    image: "iphone-12pro-gold.jpg",
    badge: "",
    about: "Gold 12 Pro with the flat steel frame and triple camera. Clean unit, tested before it leaves the shop."
  },
  {
    id: "iphone-12-pro-max-128",
    name: "iPhone 12 Pro Max",
    price: 450000,
    category: "iphone",
    series: "old",
    condition: "US used",
    specs: "128GB · Pacific blue",
    image: "iphone-12promax-blue.jpg",
    badge: "",
    about: "Pacific blue 12 Pro Max. Biggest screen of the 12 line and the best camera of that year."
  },
  {
    id: "iphone-14-128",
    name: "iPhone 14",
    price: 600000,
    category: "iphone",
    series: "14",
    condition: "US used",
    specs: "128GB · Blue",
    image: "iphone-14-blue.jpg",
    badge: "",
    about: "Light blue iPhone 14. Two cameras, good battery, and it will keep getting updates for years."
  },
  {
    id: "iphone-14-pro-128",
    name: "iPhone 14 Pro",
    price: 760000,
    category: "iphone",
    series: "14",
    condition: "US used",
    specs: "128GB · Blue · Dynamic Island",
    image: "iphone-14pro-blue.jpg",
    badge: "",
    about: "The 14 Pro with the Dynamic Island and the always on screen. Triple camera, very strong for photos."
  },

  // ---------- Samsung ----------
  {
    id: "samsung-a05-128",
    name: "Samsung Galaxy A05",
    price: 150000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · Navy",
    image: "samsung-a05.jpg",
    badge: "",
    about: "The cheap Samsung that still feels solid. Big screen, long battery, fine for WhatsApp, videos and light games."
  },
  {
    id: "samsung-a16-128",
    name: "Samsung Galaxy A16",
    price: 210000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · Navy",
    image: "samsung-a16.jpg",
    badge: "Best seller",
    about: "Big screen, clean Samsung software and a battery that lasts the day. The one most people should buy first."
  },
  {
    id: "samsung-a16-5g-128",
    name: "Samsung Galaxy A16 5G",
    price: 230000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · Navy · 5G",
    image: "samsung-a16-5g.jpg",
    badge: "",
    about: "Same A16 with 5G, so it stays fast where the network is good."
  },
  {
    id: "samsung-a26-5g-128",
    name: "Samsung Galaxy A26 5G",
    price: 260000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · Black · 5G",
    image: "samsung-a26.jpg",
    badge: "",
    about: "50MP camera with OIS, IP67 water resistance, and expandable storage up to 2TB."
  },
  {
    id: "samsung-a36-5g-128",
    name: "Samsung Galaxy A36 5G",
    price: 320000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · Black · 5G",
    image: "samsung-a36.jpg",
    badge: "",
    about: "Brighter screen, faster charging and a stronger chip than the A26. Good middle ground."
  },
  {
    id: "samsung-a56-5g-256",
    name: "Samsung Galaxy A56 5G",
    price: 420000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · Graphite · 5G",
    image: "samsung-a56.jpg",
    badge: "",
    about: "Premium feel without Ultra money. Metal frame, 120Hz screen, and long software support."
  },
  {
    id: "samsung-f04-64",
    name: "Samsung Galaxy F04",
    price: 105000,
    category: "android",
    condition: "Brand new",
    specs: "64GB · Gold / White / Navy",
    image: "samsung-f04.jpg",
    badge: "Cheapest",
    about: "The cheapest way into a Samsung. Three colours available. Fine for calls, chat and browsing."
  },
  {
    id: "samsung-s23-fe-128",
    name: "Samsung Galaxy S23 FE",
    price: 550000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · Mint",
    image: "samsung-s23fe.jpg",
    badge: "Fan edition",
    about: "Flagship chip and camera for less. If you want S-series feel on a budget, this is it."
  },
  {
    id: "samsung-s24-256",
    name: "Samsung Galaxy S24",
    price: 780000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · Silver",
    image: "samsung-s24-silver.jpg",
    badge: "",
    about: "Compact flagship. Fast, sharp, and the AI features actually work. Silver finish."
  },
  {
    id: "samsung-s24-ultra-256",
    name: "Samsung Galaxy S24 Ultra",
    price: 1100000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 4 colours available",
    image: "samsung-s24u-gray.jpg",
    badge: "Flagship",
    about: "The big one. S Pen inside, 200MP camera, titanium frame. Tap a colour to see it.",
    gallery: [
      { label: "Titanium Gray", image: "samsung-s24u-gray.jpg" },
      { label: "Titanium Black", image: "samsung-s24u-black.jpg" },
      { label: "Titanium Yellow", image: "samsung-s24u-yellow.jpg" },
      { label: "Paris 2024 Edition", image: "samsung-s24u-purple.jpg" }
    ]
  },
  {
    id: "samsung-zflip5-256",
    name: "Samsung Galaxy Z Flip5",
    price: 850000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · Graphite",
    image: "samsung-zflip5.jpg",
    badge: "Foldable",
    about: "Folds small enough for a pocket, and the cover screen shows notifications without opening it."
  },
  {
    id: "samsung-zfold5-256",
    name: "Samsung Galaxy Z Fold5",
    price: 1300000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · Icy Blue",
    image: "samsung-zfold5.jpg",
    badge: "Tablet in your pocket",
    about: "Opens into a tablet. Best for people who read, work or game heavy on the go."
  },
  {
    id: "samsung-zfold6-256",
    name: "Samsung Galaxy Z Fold6",
    price: 1450000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · Silver / Pink / Navy",
    image: "samsung-zfold6.jpg",
    badge: "Latest fold",
    about: "Slimmer and stronger than the Fold5. Three colours available."
  },
  {
    id: "samsung-zflip8-256",
    name: "Samsung Galaxy Z Flip8",
    price: 1900000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · Graphite",
    image: "samsung-zflip8.jpg",
    badge: "New",
    about: "The newest Flip, with Galaxy AI built in. Just landed."
  },

  // ---------- Android ----------

  // ----- Infinix -----
  {
    id: "infinix-smart8-128",
    name: "Infinix Smart 8",
    price: 105000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 4GB RAM · Black / Purple / Green / Blue / Gold",
    image: "infinix-smart8.jpg",
    gallery: [
      { label: "Black", image: "infinix-smart8.jpg" },
      { label: "Front", image: "infinix-smart8-2.jpg" },
      { label: "Colours", image: "infinix-smart8-colours.jpg" }
    ],
    badge: "Best seller",
    about: "The everyday budget phone. Big screen, 50MP camera, 5000mAh battery that lasts the whole day."
  },
  {
    id: "infinix-smart8-64",
    name: "Infinix Smart 8 64GB",
    price: 92000,
    category: "android",
    condition: "Brand new",
    specs: "64GB · 3GB / 4GB RAM · Black / Purple / Green",
    image: "infinix-smart8.jpg",
    badge: "",
    about: "Same Smart 8, smaller storage, cheaper. Good first phone or backup line."
  },
  {
    id: "infinix-zero30-256",
    name: "Infinix Zero 30 5G",
    price: 395000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB / 12GB RAM · Green / Grey / Gold",
    image: "infinix-zero30-green.jpg",
    gallery: [
      { label: "Green", image: "infinix-zero30-green.jpg" },
      { label: "Grey", image: "infinix-zero30-grey.jpg" },
      { label: "Gold", image: "infinix-zero30-gold.jpg" }
    ],
    badge: "5G",
    about: "108MP camera and a 50MP selfie camera. Charges from empty to full in about half an hour."
  },
  {
    id: "infinix-zero40-256",
    name: "Infinix Zero 40 5G",
    price: 620000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 12GB RAM · Pink / Violet",
    image: "infinix-zero40.jpg",
    badge: "New",
    about: "The newest Zero. Curved AMOLED screen, very fast charging, and the camera is built for night shots."
  },
  {
    id: "infinix-note30-128",
    name: "Infinix Note 30",
    price: 170000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 8GB RAM · Gold",
    image: "infinix-note30.jpg",
    badge: "",
    about: "Big 6.78 inch screen with 108MP camera and 45W charging. Strong battery phone."
  },
  {
    id: "infinix-note30-256",
    name: "Infinix Note 30 256GB",
    price: 190000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Gold",
    image: "infinix-note30.jpg",
    badge: "",
    about: "Same Note 30 with double storage. Better pick if you keep plenty of videos and games."
  },
  {
    id: "infinix-zeroultra-256",
    name: "Infinix Zero Ultra",
    price: 405000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Silver",
    image: "infinix-zeroultra.jpg",
    badge: "200MP",
    about: "200MP camera and 180W charging that fills the battery from zero in about 12 minutes."
  },
  {
    id: "infinix-smart8hd-128",
    name: "Infinix Smart 8 HD",
    price: 120000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 3GB RAM · Blue / Gold / Green / Black",
    image: "infinix-smart8hd.jpg",
    badge: "",
    about: "The cheaper Smart 8. Still has the big screen and long battery, made for light use."
  },

  // ----- Tecno -----
  {
    id: "tecno-sparkgo",
    name: "TECNO Spark Go",
    price: 110000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · Blue / Black / Gold / White",
    image: "tecno-sparkgo.jpg",
    badge: "Budget",
    about: "The cheapest way into a Tecno. Fine for calls, WhatsApp, browsing and small games."
  },
  {
    id: "tecno-spark30c-128",
    name: "TECNO Spark 30C",
    price: 160000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 4GB / 6GB RAM · Black",
    image: "tecno-spark30c.jpg",
    badge: "Hot cake",
    about: "6.67 inch 120Hz screen, 50MP camera and 5000mAh battery. Best value Spark right now."
  },
  {
    id: "tecno-spark30-5g",
    name: "TECNO Spark 30 5G",
    price: 255000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 8GB RAM · White",
    image: "tecno-spark30-5g.jpg",
    badge: "5G",
    about: "5G on a budget. The round camera design stands out and it charges fast."
  },
  {
    id: "tecno-spark20-proplus",
    name: "TECNO Spark 20 Pro+",
    price: 320000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Pearl white",
    image: "tecno-spark20-proplus.jpg",
    badge: "",
    about: "Curved AMOLED screen, 108MP camera and 33W charging. One of the nicest Spark builds."
  },
  {
    id: "tecno-camon20-premier",
    name: "TECNO Camon 20 Premier 5G",
    price: 415000,
    category: "android",
    condition: "Brand new",
    specs: "512GB · 8GB RAM · Mint green",
    image: "tecno-camon20-premier.jpg",
    badge: "",
    about: "The camera phone. 50MP sensor with sensor-shift stabilisation, plus a leather-look back."
  },
  {
    id: "tecno-camon30-premier",
    name: "TECNO Camon 30 Premier 5G",
    price: 740000,
    category: "android",
    condition: "Brand new",
    specs: "512GB · 12GB RAM · Camel brown",
    image: "tecno-camon30-premier.jpg",
    badge: "Flagship",
    about: "Tecno's best camera phone. PolarAce imaging, 70W charging, LTPO screen. Built for video people."
  },
  {
    id: "tecno-pova6-256",
    name: "TECNO POVA 6",
    price: 330000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Black / Green",
    image: "tecno-pova6.jpg",
    badge: "6000mAh",
    about: "Made for heavy use. 6000mAh battery and 70W charging, so it runs deep into the night."
  },
  {
    id: "tecno-phantom-vfold2",
    name: "TECNO Phantom V Fold2 5G",
    price: 1700000,
    category: "android",
    condition: "Brand new",
    specs: "512GB · 12GB RAM · Blue / Grey",
    image: "tecno-phantom-vfold2-blue.jpg",
    gallery: [
      { label: "Blue", image: "tecno-phantom-vfold2-blue.jpg" },
      { label: "Grey", image: "tecno-phantom-vfold2-grey.jpg" }
    ],
    badge: "Foldable",
    about: "Folds out into a 7.85 inch tablet. Comes with the V Pen stylus for writing and drawing."
  },
  {
    id: "poco-x5-pro-5g",
    name: "POCO X5 Pro 5G",
    price: 300000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Black",
    image: "poco-x5-pro.jpg",
    badge: "Gaming",
    about: "Snapdragon chip and 120Hz AMOLED. Very strong pick for games at this price."
  },

  // ----- Xiaomi / Redmi / POCO -----
  {
    id: "xiaomi-14-ultra",
    name: "Xiaomi 14 Ultra",
    price: 665000,
    category: "android",
    condition: "UK used",
    specs: "512GB · 16GB RAM · White / Black",
    image: "xiaomi-14-ultra-white.jpg",
    gallery: [
      { label: "White", image: "xiaomi-14-ultra-white.jpg" },
      { label: "Black + White", image: "xiaomi-14-ultra-pair.jpg" }
    ],
    badge: "Leica",
    about: "The Leica camera beast. Variable aperture lens, four cameras, and the best photos any Android takes."
  },
  {
    id: "xiaomi-13-ultra",
    name: "Xiaomi 13 Ultra",
    price: 550000,
    category: "android",
    condition: "UK used",
    specs: "512GB · 12GB RAM · Black",
    image: "xiaomi-13-ultra.jpg",
    badge: "",
    about: "The 13 Ultra still takes photos most new phones cannot match. Leica colour straight out of the camera."
  },
  {
    id: "redmi-14c-128",
    name: "Redmi 14C",
    price: 150000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 6GB RAM · Blue",
    image: "redmi-14c.jpg",
    badge: "Budget king",
    about: "6.88 inch 120Hz screen and a 13MP selfie camera. Best cheap phone for selfies and social media."
  },
  {
    id: "redmi-a3-64",
    name: "Redmi A3",
    price: 105000,
    category: "android",
    condition: "Brand new",
    specs: "64GB · 3GB RAM · Blue",
    image: "redmi-a3.jpg",
    badge: "",
    about: "Simple, cheap and durable. Fine for calls, WhatsApp and light browsing."
  },
  {
    id: "redmi-13-128",
    name: "Redmi 13",
    price: 210000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 8GB RAM · Black",
    image: "redmi-13.jpg",
    badge: "108MP",
    about: "108MP camera, 90Hz screen and 33W charging. Solid middle phone that does not break the bank."
  },
  {
    id: "redmi-13c-128",
    name: "Redmi 13C",
    price: 150000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 4GB RAM · Black / Pink / Gold / Blue",
    image: "redmi-13c-colours.jpg",
    gallery: [
      { label: "Colours", image: "redmi-13c-colours.jpg" },
      { label: "Gold", image: "redmi-13c-gold.jpg" }
    ],
    badge: "",
    about: "The phone plenty people carry. 50MP camera, 5000mAh battery, tough enough for everyday use."
  },
  {
    id: "redmi-note14-256",
    name: "Redmi Note 14",
    price: 285000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Sky blue",
    image: "redmi-note14.jpg",
    badge: "AMOLED",
    about: "AMOLED screen with high refresh rate, 108MP camera and fast charging. Very balanced phone."
  },
  {
    id: "redmi-note13-256",
    name: "Redmi Note 13",
    price: 315000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Black / Green / Blue / Gold",
    image: "redmi-note13.jpg",
    gallery: [
      { label: "Colours", image: "redmi-note13.jpg" },
      { label: "Black", image: "redmi-note13-black.jpg" }
    ],
    badge: "Hot cake",
    about: "AMOLED 120Hz screen, 108MP camera, 33W charging. One of the most bought phones in Nigeria."
  },
  {
    id: "poco-x6-pro-512",
    name: "POCO X6 Pro 5G",
    price: 620000,
    category: "android",
    condition: "Brand new",
    specs: "512GB · 12GB RAM · Yellow",
    image: "poco-x6-pro.jpg",
    badge: "Gaming",
    about: "Dimensity 8300 Ultra. This is a proper gaming phone, runs heavy titles at high settings."
  },
  {
    id: "poco-f6-pro",
    name: "POCO F6 Pro",
    price: 560000,
    category: "android",
    condition: "Brand new",
    specs: "512GB · 12GB RAM · White",
    image: "poco-f6-pro.jpg",
    badge: "Flagship chip",
    about: "Snapdragon 8 Gen 2 flagship speed for far less than a Samsung or iPhone flagship."
  },

  // ----- vivo / OPPO / itel -----
  {
    id: "itel-a70-128",
    name: "itel A70",
    price: 85000,
    category: "android",
    condition: "Brand new",
    specs: "128GB (12GB+256GB box spec) · Green",
    image: "itel-a70.jpg",
    badge: "Budget",
    about: "Cheap and steady. Big screen, big battery, good for calls, WhatsApp and light browsing."
  },
  {
    id: "itel-a60s-64",
    name: "itel A60s",
    price: 75000,
    category: "android",
    condition: "Brand new",
    specs: "64GB · 4GB RAM · Blue",
    image: "itel-a60s.jpg",
    badge: "",
    about: "Entry level itel. Fine as a first phone or a spare line that just works."
  },
  {
    id: "vivo-y03-128",
    name: "vivo Y03",
    price: 170000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 4GB RAM · Mint / Black",
    image: "vivo-y03.jpg",
    badge: "",
    about: "Light, slim and cheap to run. Battery easily carries you through the day."
  },
  {
    id: "vivo-y02t-64",
    name: "vivo Y02t",
    price: 110000,
    category: "android",
    condition: "Brand new",
    specs: "64GB · 3GB RAM · Brown",
    image: "vivo-y02t.jpg",
    badge: "",
    about: "Simple vivo for basics. Long battery and clean design at the lowest price."
  },
  {
    id: "vivo-y18-128",
    name: "vivo Y18",
    price: 210000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 6GB RAM · Brown",
    image: "vivo-y18.jpg",
    badge: "",
    about: "5000mAh battery that can stretch two days of light use. Good everyday phone."
  },
  {
    id: "vivo-y36",
    name: "vivo Y36",
    price: 180000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Forest green",
    image: "vivo-y36.jpg",
    badge: "",
    about: "Big storage and a 5000mAh battery. Nice screen for videos and social media."
  },
  {
    id: "vivo-y36-5g",
    name: "vivo Y36 5G",
    price: 220000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Ice blue",
    image: "vivo-y36-5g.jpg",
    badge: "5G",
    about: "Same Y36 body with 5G inside. Faster downloads and smoother streaming."
  },
  {
    id: "vivo-s18e",
    name: "vivo S18e",
    price: 380000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Pearl white",
    image: "vivo-s18e.jpg",
    badge: "Selfie",
    about: "Built for portraits. The front camera and Aura Light make your photos look studio-lit."
  },
  {
    id: "vivo-v40",
    name: "vivo V40 5G",
    price: 748000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 12GB RAM · Purple",
    image: "vivo-v40.jpg",
    badge: "ZEISS",
    about: "ZEISS lenses and a huge battery. One of the best camera phones around this price."
  },
  {
    id: "vivo-x90-pro",
    name: "vivo X90 Pro+",
    price: 900000,
    category: "android",
    condition: "UK used",
    specs: "512GB · 12GB RAM · Cyan",
    image: "vivo-x90-pro.jpg",
    badge: "Flagship",
    about: "One inch camera sensor with ZEISS glass. Photos that beat most phones twice the price."
  },
  {
    id: "vivo-x100-pro",
    name: "vivo X100 Pro",
    price: 850000,
    category: "android",
    condition: "UK used",
    specs: "512GB · 16GB RAM · Black",
    image: "vivo-x100-pro.jpg",
    badge: "ZEISS",
    about: "ZEISS APO telephoto and a very strong night camera. A serious photographer's phone."
  },
  {
    id: "oppo-a18-128",
    name: "OPPO A18",
    price: 210000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 4GB RAM · Black",
    image: "oppo-a18.jpg",
    badge: "",
    about: "Big battery, clean OPPO software. Good value if you want a brand you can trust."
  },
  {
    id: "oppo-a58-128",
    name: "OPPO A58",
    price: 225000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 6GB / 8GB RAM · Black / Purple / Mint",
    image: "oppo-a58.jpg",
    badge: "",
    about: "5000mAh battery and 33W charging. Slim body with a nice finish."
  },
  {
    id: "oppo-a79-5g",
    name: "OPPO A79 5G",
    price: 300000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Black",
    image: "oppo-a79-5g.jpg",
    badge: "5G",
    about: "5G with 67W fast charging. Charges from empty to full in under an hour."
  },
  {
    id: "oppo-reno11f-5g",
    name: "OPPO Reno11 F 5G",
    price: 430000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Purple",
    image: "oppo-reno11f.jpg",
    badge: "",
    about: "Slim and light, with a 64MP camera and 67W charging. Great for content creators."
  },
  {
    id: "oppo-reno11-5g",
    name: "OPPO Reno11 5G",
    price: 590000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 12GB RAM · Silver / Pink / Black",
    image: "oppo-reno11.jpg",
    badge: "Portrait",
    about: "The portrait camera phone. Telephoto lens for clean close-ups and natural skin tones."
  },

  // ----- Google Pixel -----
  {
    id: "pixel-7-pro-128",
    name: "Google Pixel 7 Pro",
    price: 478000,
    category: "android",
    condition: "UK used",
    specs: "128GB · 12GB RAM · Hazel / Snow / Black / Blue",
    image: "pixel7pro-hazel.jpg",
    gallery: [
      { label: "Hazel", image: "pixel7pro-hazel.jpg" },
      { label: "Snow", image: "pixel7pro-snow.jpg" },
      { label: "Obsidian", image: "pixel7pro-obsidian.jpg" },
      { label: "Blue", image: "pixel7pro-blue.jpg" }
    ],
    badge: "Best camera",
    about: "The camera phone people talk about. 5x zoom that stays sharp, and photos that look good straight from the camera."
  },
  {
    id: "pixel-7-128",
    name: "Google Pixel 7",
    price: 378000,
    category: "android",
    condition: "UK used",
    specs: "128GB · 8GB RAM · Obsidian / Lemongrass",
    image: "pixel7-obsidian.jpg",
    gallery: [
      { label: "Obsidian", image: "pixel7-obsidian.jpg" },
      { label: "Lemongrass", image: "pixel7-lemongrass.jpg" }
    ],
    badge: "",
    about: "Small, fast and takes clean photos. The cheapest way into a proper Pixel camera."
  },
  {
    id: "pixel-6-128",
    name: "Google Pixel 6",
    price: 380000,
    category: "android",
    condition: "UK used",
    specs: "128GB · 8GB RAM · Sorta Sunny",
    image: "pixel6-sunny.jpg",
    badge: "",
    about: "Still a very good camera for the money. Clean Android, no bloat, smooth for years."
  },
  {
    id: "pixel-8-128",
    name: "Google Pixel 8",
    price: 520000,
    category: "android",
    condition: "UK used",
    specs: "128GB · 8GB RAM · Rose",
    image: "pixel8-rose.jpg",
    badge: "7 yrs updates",
    about: "Seven years of updates from Google. Best AI photo tools on any phone at this price."
  },
  {
    id: "pixel-8-pro-128",
    name: "Google Pixel 8 Pro",
    price: 580000,
    category: "android",
    condition: "UK used",
    specs: "128GB · 12GB RAM · Bay / Obsidian",
    image: "pixel8pro-bay.jpg",
    gallery: [
      { label: "Bay", image: "pixel8pro-bay.jpg" },
      { label: "Obsidian", image: "pixel8pro-obsidian.jpg" }
    ],
    badge: "Flagship",
    about: "The full Pixel experience. Big bright screen, 5x zoom and the best video stabilisation Google makes."
  },

  // ----- OnePlus -----
  {
    id: "oneplus-nord-ce3-lite",
    name: "OnePlus Nord CE 3 Lite 5G",
    price: 375000,
    category: "android",
    condition: "Brand new",
    specs: "128GB · 8GB RAM · Pastel Lime / Blue / Silver",
    image: "oneplus-nordce3-lime.jpg",
    gallery: [
      { label: "Lime", image: "oneplus-nordce3-lime.jpg" },
      { label: "Blue", image: "oneplus-nordce3-blue.jpg" },
      { label: "Silver", image: "oneplus-nordce3-silver.jpg" }
    ],
    badge: "5G",
    about: "108MP camera and 67W charging that fills the battery in about 40 minutes. Very smooth software."
  },
  {
    id: "oneplus-nord-ce4-lite",
    name: "OnePlus Nord CE 4 Lite 5G",
    price: 420000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 8GB RAM · Charcoal / Mint",
    image: "oneplus-nordce4.jpg",
    badge: "5G",
    about: "Big 5500mAh battery and a bright 120Hz screen. One of the best mid-range values around."
  },
  {
    id: "oneplus-12-256",
    name: "OnePlus 12",
    price: 800000,
    category: "android",
    condition: "Brand new",
    specs: "256GB · 12GB RAM · White / Black / Green",
    image: "oneplus12-white.jpg",
    gallery: [
      { label: "White", image: "oneplus12-white.jpg" },
      { label: "Black", image: "oneplus12-black.jpg" },
      { label: "Green", image: "oneplus12-green.jpg" },
      { label: "Both", image: "oneplus12-pair.jpg" }
    ],
    badge: "Flagship",
    about: "Snapdragon 8 Gen 3 and 100W charging. Flagship speed that charges full in about half an hour."
  },

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
  // ---------- PlayStation ----------
  {
    id: "ps5-disc",
    name: "PlayStation 5 (Disc)",
    price: 880000,
    category: "playstation",
    condition: "UK used",
    specs: "825GB · Disc drive · 1 DualSense",
    image: "ps5-disc.jpg",
    gallery: [{ label: "Front", image: "ps5-disc.jpg" }, { label: "Angle", image: "ps5-disc-2.jpg" }],
    badge: "Hot",
    about: "The full PS5 with the disc drive, so you can play both disc and digital games. Comes with one DualSense controller. Price is my estimate, tell me if yours is different."
  },
  {
    id: "ps5-digital",
    name: "PlayStation 5 Digital",
    price: 950000,
    category: "playstation",
    condition: "Brand new",
    specs: "825GB · Digital only · 1 DualSense",
    image: "ps5-digital.jpg",
    badge: "Sealed",
    about: "Sealed digital PS5. No disc drive, so you buy games from the store. Brand new with one DualSense."
  },
  {
    id: "ps4-pro",
    name: "PlayStation 4 Pro",
    price: 450000,
    category: "playstation",
    condition: "UK used",
    specs: "1TB · 4K output · 1 DualShock 4",
    image: "ps4pro.jpg",
    gallery: [{ label: "Front", image: "ps4pro.jpg" }, { label: "Angle", image: "ps4pro-2.jpg" }],
    badge: "",
    about: "The stronger PS4. Runs games at higher resolution and smoother frame rates than the normal PS4. Tested and working."
  },
  {
    id: "ps4-slim-sealed",
    name: "PlayStation 4 Slim",
    price: 400000,
    category: "playstation",
    condition: "Brand new",
    specs: "500GB · Jet black · 1 DualShock 4",
    image: "ps4slim-sealed.jpg",
    badge: "Sealed",
    about: "Sealed PS4 Slim in jet black. Brand new, one controller inside the box."
  },
  {
    id: "ps4-slim",
    name: "PlayStation 4 Slim",
    price: 320000,
    category: "playstation",
    condition: "UK used",
    specs: "500GB · Jet black · 1 DualShock 4",
    image: "ps4slim.jpg",
    badge: "",
    about: "Clean used PS4 Slim. Small, quiet, and cheap enough to enjoy the whole PS4 library."
  },
  {
    id: "ps3",
    name: "PlayStation 3",
    price: 220000,
    category: "playstation",
    condition: "UK used",
    specs: "500GB · 2 controllers",
    image: "ps3.jpg",
    gallery: [{ label: "Front", image: "ps3.jpg" }, { label: "With pads", image: "ps3-2.jpg" }],
    badge: "",
    about: "PS3 with two controllers. Great for FIFA nights, GTA V and all the classics, at a very fair price."
  },
  {
    id: "ps2-fat",
    name: "PlayStation 2",
    price: 150000,
    category: "playstation",
    condition: "UK used",
    specs: "Original fat model · 2 controllers · Box",
    image: "ps2-fat.jpg",
    badge: "Retro",
    about: "The original fat PS2 with two controllers and its box. Still the king of old school gaming nights."
  },
  {
    id: "ps2-slim",
    name: "PlayStation 2 Slim",
    price: 130000,
    category: "playstation",
    condition: "UK used",
    specs: "Slim · 2 controllers · 8MB memory card",
    image: "ps2slim.jpg",
    gallery: [{ label: "Front", image: "ps2slim.jpg" }, { label: "Angle", image: "ps2slim-2.jpg" }],
    badge: "",
    about: "Slim PS2 with two controllers and a memory card. Compact, reliable, and it still plays every PS2 disc."
  },
  {
    id: "psvita-black",
    name: "PS Vita",
    price: 180000,
    category: "playstation",
    condition: "UK used",
    specs: "Black · OLED screen · Console only",
    image: "psvita-black.jpg",
    gallery: [{ label: "Front", image: "psvita-black.jpg" }, { label: "Silver trim", image: "psvita-black-2.jpg" }, { label: "With PSP", image: "psvita-black-3.jpg" }],
    badge: "",
    about: "Black PS Vita, screen still bright and clean. Perfect for playing on the go. Charger sold separately."
  },
  {
    id: "psvita-white",
    name: "PS Vita White",
    price: 190000,
    category: "playstation",
    condition: "UK used",
    specs: "White with lime green back · Console only",
    image: "psvita-white.jpg",
    badge: "",
    about: "The white Vita with the lime green back. Rare colour and it looks lovely in person."
  },
  {
    id: "psp-black",
    name: "PSP",
    price: 120000,
    category: "playstation",
    condition: "UK used",
    specs: "Black · Console only",
    image: "psp-black.jpg",
    badge: "",
    about: "Clean black PSP. Still one of the best ways to play old games on a long trip."
  },
  {
    id: "psp-red",
    name: "PSP Red",
    price: 130000,
    category: "playstation",
    condition: "UK used",
    specs: "Red · Charger included",
    image: "psp-red.jpg",
    badge: "",
    about: "Red PSP that powers on fine. Comes with a charger."
  },
  {
    id: "psp-go",
    name: "PSP Go",
    price: 150000,
    category: "playstation",
    condition: "UK used",
    specs: "Black · Slide screen · Console only",
    image: "pspgo.jpg",
    badge: "Rare",
    about: "The slide open PSP Go. Small, pocketable, and hard to find in this condition."
  },
  {
    id: "xbox-series-x",
    name: "Xbox Series X",
    price: 750000,
    category: "playstation",
    condition: "Brand new",
    specs: "1TB · 4K 120fps · 1 controller",
    image: "xbox-seriesx.jpg",
    badge: "Sealed",
    about: "Sealed Series X with one controller. The most powerful Xbox, and Game Pass makes it very good value."
  },
  {
    id: "xbox-series-s",
    name: "Xbox Series S",
    price: 550000,
    category: "playstation",
    condition: "Brand new",
    specs: "512GB · Digital only · 1 controller",
    image: "xbox-seriess.jpg",
    badge: "",
    about: "Small digital Xbox with a controller. Cheap way into current gen games and Game Pass."
  },
  {
    id: "xbox-one",
    name: "Xbox One",
    price: 230000,
    category: "playstation",
    condition: "UK used",
    specs: "500GB · White · 1 controller",
    image: "xbox-one.jpg",
    badge: "",
    about: "White Xbox One with a controller. Still plays a huge library, and it doubles as a media box."
  },
  {
    id: "rog-ally-white",
    name: "ASUS ROG Ally",
    price: 700000,
    category: "playstation",
    condition: "UK used",
    specs: "White · Windows handheld · Console only",
    image: "rog-ally-white.jpg",
    badge: "Handheld PC",
    about: "Proper Windows gaming handheld. Runs PC games, Game Pass and even your Steam library, in your hands."
  },

  // ---------- Gaming gear ----------
  {
    id: "gear-desk-setup",
    name: "Gaming Desk and Chair Set",
    price: 250000,
    category: "gaming",
    condition: "UK used",
    specs: "Desk + chair · Black and red",
    image: "gear-desk-setup.jpg",
    badge: "Full setup",
    about: "Complete desk and chair setup for a small room. Everything you need to sit down and play. Price is my estimate."
  },
  {
    id: "gear-chair-redwhite",
    name: "Gaming Chair",
    price: 180000,
    category: "gaming",
    condition: "Brand new",
    specs: "Black, red and white · Reclining",
    image: "gear-chair-redwhite.jpg",
    badge: "",
    about: "Brand new racing style gaming chair. High back, reclines, good support for long sessions."
  },
  {
    id: "gear-chair-red",
    name: "Gaming Chair",
    price: 150000,
    category: "gaming",
    condition: "UK used",
    specs: "Black and red",
    image: "gear-chair-red.jpg",
    badge: "",
    about: "Clean black and red chair. Comfortable for gaming or for your desk work."
  },
  {
    id: "gear-chair-teal",
    name: "Gaming Chair",
    price: 150000,
    category: "gaming",
    condition: "UK used",
    specs: "Black with turquoise trim",
    image: "gear-chair-teal.jpg",
    badge: "",
    about: "Black chair with turquoise trim. A bit different from the usual red, and in good shape."
  },
  {
    id: "gear-chair-black",
    name: "Gaming Chair",
    price: 130000,
    category: "gaming",
    condition: "UK used",
    specs: "All black",
    image: "gear-chair-black.jpg",
    badge: "",
    about: "Plain black gaming chair. Clean, sturdy, no loud colours."
  },
  {
    id: "gear-chair-black2",
    name: "Gaming Chair",
    price: 120000,
    category: "gaming",
    condition: "UK used",
    specs: "All black · Used",
    image: "gear-chair-black2.jpg",
    badge: "",
    about: "Another black chair, honest used condition, priced to move."
  },
  {
    id: "gear-headset-red",
    name: "Gaming Headset",
    price: 25000,
    category: "gaming",
    condition: "Brand new",
    specs: "Wired · Mic · Black and red",
    image: "gear-headset-red.jpg",
    badge: "",
    about: "Wired headset with a boom mic. Clear chat and loud sound, plug and play."
  },
  {
    id: "gear-headset-purple",
    name: "Gaming Headset",
    price: 28000,
    category: "gaming",
    condition: "Brand new",
    specs: "Wired · Mic · Black with purple lights",
    image: "gear-headset-purple.jpg",
    badge: "",
    about: "Black headset with purple and blue lights. Good for squads and for movies on the PC."
  },
  {
    id: "gear-gamesir",
    name: "GameSir Mobile Controller",
    price: 45000,
    category: "gaming",
    condition: "Brand new",
    specs: "Telescopic · Phone clips in the middle",
    image: "gear-gamesir.jpg",
    badge: "For mobile",
    about: "Turns your phone into a proper handheld. Grips on both sides, real sticks and triggers, perfect for PUBG and CODM."
  },
  {
    id: "gear-mobile-pads",
    name: "Mobile Gaming Controller",
    price: 35000,
    category: "gaming",
    condition: "UK used",
    specs: "Assorted colours · Tested",
    image: "gear-mobile-pads.jpg",
    badge: "",
    about: "Phone controllers in different colours. Ask me which one you want and I will show you what is left."
  },
  {
    id: "gear-mobile-pad-black",
    name: "Mobile Gaming Controller",
    price: 30000,
    category: "gaming",
    condition: "UK used",
    specs: "Black · Tested",
    image: "gear-mobile-pad-black.jpg",
    badge: "",
    about: "Black phone controller, tested and working. Cheaper way into mobile gaming with real buttons."
  },
  {
    id: "gear-cooler-dualfan",
    name: "Phone Cooler (Dual Fan)",
    price: 18000,
    category: "gaming",
    condition: "Brand new",
    specs: "Dual fan · RGB lights · Clip on",
    image: "gear-cooler-dualfan.jpg",
    badge: "",
    about: "Two fans that clip to the back of your phone. Keeps it cool so the game stops lagging in long sessions."
  },
  {
    id: "gear-cooler-mag",
    name: "Magnetic Phone Cooler",
    price: 15000,
    category: "gaming",
    condition: "Brand new",
    specs: "Magnetic · LED",
    image: "gear-cooler-mag.jpg",
    badge: "",
    about: "Magnetic cooler that snaps to the back of the phone. No clips, nothing blocking the screen."
  },
  {
    id: "gear-cooler-fan",
    name: "Phone Cooling Fan",
    price: 12000,
    category: "gaming",
    condition: "Brand new",
    specs: "Clip on · Blue light",
    image: "gear-cooler-fan.jpg",
    badge: "",
    about: "Simple clip on fan for your phone. Small money, big difference when the phone starts heating."
  },
  {
    id: "gear-combo5in1",
    name: "5 in 1 Mobile Gaming Pack",
    price: 40000,
    category: "gaming",
    condition: "Brand new",
    specs: "Controller, cooler, triggers and more",
    image: "gear-combo5in1.jpg",
    badge: "Bundle",
    about: "Everything in one pack, so you do not have to buy the pieces one by one."
  },
  {
    id: "gear-mouse-silver",
    name: "Gaming Mouse",
    price: 15000,
    category: "gaming",
    condition: "Brand new",
    specs: "Black and silver · Wired",
    image: "gear-mouse-silver.jpg",
    badge: "",
    about: "Wired gaming mouse with a comfortable shape and adjustable speed."
  },
  {
    id: "gear-keyboard-mouse",
    name: "RGB Keyboard and Mouse Set",
    price: 45000,
    category: "gaming",
    condition: "Brand new",
    specs: "White · RGB lights · Wired",
    image: "gear-keyboard-mouse.jpg",
    badge: "Set",
    about: "White keyboard and mouse set with RGB lights. Looks clean on a desk and works straight out of the box."
  },

];
