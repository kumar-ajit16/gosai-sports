// Product Inventory Data for Gosai Sports Outlet

export const CATEGORIES = {
  SPORTS_EQUIPMENT: {
    id: "sports-equipment",
    name: "Sports Equipment",
    icon: "Trophy",
    subcategories: {
      CRICKET_GEAR: { id: "cricket-gear", name: "Cricket Gear" },
      BADMINTON: { id: "badminton", name: "Badminton" }
    }
  },
  FITNESS_GYM: {
    id: "fitness-gym",
    name: "Fitness & Gym Equipment",
    icon: "Dumbbell",
    subcategories: {
      WORKOUT: { id: "workout", name: "Workout Gear" },
      SAFETY_GRIP: { id: "safety-grip", name: "Safety & Grip" }
    }
  }
};

export const products = [
  // --- SPORTS EQUIPMENT: CRICKET GEAR ---
  {
    id: "pvc-cricket-bat",
    name: "Gosai Premium PVC Cricket Bat",
    category: "sports-equipment",
    subcategory: "cricket-gear",
    price: "₹215",
    rating: 4.8,
    reviews: 124,
    description: "Engineered with high-impact heavy-duty PVC, the Gosai Cricket Bat offers unmatched durability and a sweet spot designed for powerful shots. Perfect for gully cricket, indoor nets, and training drills.",
    details: [
      "Material: Premium High-Density PVC",
      "Weight: Super lightweight (Approx. 750-800g) for quick swing speed",
      "Grip: Dynamic chevron pattern non-slip rubber grip",
      "Age Group: Suitable for teens and adults",
      "Usage: Best with tennis balls and wind balls"
    ],
    image: "/images/pvc-cricket-bat.jpg",
    meeshoLink: "https://www.meesho.com/gosai-plastic-cricket-bat-full-size-8pvc-plastic-cricket-bat-800-850-g-age-group-15/p/aw8r8q",
    amazonLink: "https://www.amazon.in"
  },
  {
    id: "cricket-ball",
    name: "Gosai Pro-Bounce Cricket Ball (6-Pack)",
    category: "sports-equipment",
    subcategory: "cricket-gear",
    price: "₹299",
    rating: 4.6,
    reviews: 88,
    description: "Highly durable wind-resistant cricket balls that simulate real leather ball bounce and seam movement without the risk of injury. Perfect for daily practice and tournaments.",
    details: [
      "Material: Heavy-duty synthetic compound",
      "Weight: Standard practice weight (Approx. 90-100g)",
      "Colors: Vibrant high-visibility orange/red",
      "Pack details: Pack of 6 training balls"
    ],
    image: "/images/cricket-ball.jpg",
    meeshoLink: "https://www.meesho.com/dyweq?ms=2",
    amazonLink: "https://www.amazon.in"
  },
  {
    id: "wicket-set",
    name: "Gosai Heavy-Duty Wicket Set",
    category: "sports-equipment",
    subcategory: "cricket-gear",
    price: "₹699",
    rating: 4.7,
    reviews: 56,
    description: "Complete all-weather PVC wicket set. Designed with a heavy stable base suitable for both outdoor lawns and indoor cement grounds. Extremely quick to assemble.",
    details: [
      "Components: 3 Stumps, 2 Bails, 1 Sturdy Base Stand",
      "Material: Premium unbreakable polymers",
      "Height: Standard match size (28 inches)",
      "Portability: Light and easy to carry inside bags"
    ],
    image: "/images/wicket-set.jpg",
    meeshoLink: "https://www.meesho.com/cricket-plastic-wicket-set-black-durable-lightweight-stump-bails-for-15age-group-practice-recreational-play-1-set-wicket-set-black/p/giwf22",
    amazonLink: "https://www.amazon.in"
  },

  // --- SPORTS EQUIPMENT: BADMINTON ---
  {
    id: "pro-rackets",
    name: "Gosai Carbon-Drive Pro Rackets (Pair)",
    category: "sports-equipment",
    subcategory: "badminton",
    price: "₹899",
    rating: 4.9,
    reviews: 142,
    description: "Engineered with an isometric head shape and an ultra-lightweight carbon fiber shaft, these rackets provide a larger sweet spot and superior smash control. Perfect for intermediate and advanced players.",
    details: [
      "Material: Carbon Fiber composite frames",
      "Weight: 82g (Ultra-Lightweight 4U size)",
      "Tension: 24-26 lbs pre-strung for maximum power",
      "Includes: 2 Rackets and 1 premium full-cover carry bag"
    ],
    image: "/images/pro-rackets.jpg",
    meeshoLink: "https://www.meesho.com/dyweq?ms=2",
    amazonLink: "https://www.amazon.in"
  },
  {
    id: "shuttlecock",
    name: "Gosai Aero-Flight Shuttlecocks (12-Pack)",
    category: "sports-equipment",
    subcategory: "badminton",
    price: "₹349",
    rating: 4.5,
    reviews: 95,
    description: "Aerodynamically tuned nylon shuttlecocks designed to mimic the trajectory of natural feathers while offering 5x the durability. Features a premium cork base for crisp smashes.",
    details: [
      "Skirt Material: Precision synthetic nylon",
      "Base: 100% natural cork wood head",
      "Speed: Medium speed, perfect for regular climate play",
      "Quantity: 12 Pieces per tube"
    ],
    image: "/images/shuttlecock.jpg",
    meeshoLink: "https://www.meesho.com/dyweq?ms=2",
    amazonLink: "https://www.amazon.in"
  },

  // --- FITNESS & GYM EQUIPMENT: WORKOUT ---
  {
    id: "skipping-rope",
    name: "Gosai Speed-Flow Skipping Rope",
    category: "fitness-gym",
    subcategory: "workout",
    price: "₹199",
    rating: 4.7,
    reviews: 210,
    description: "High-speed cardio jump rope fitted with 360-degree steel ball bearings for tangle-free, smooth rotations. Ideal for fat burn, boxing training, and general fitness conditioning.",
    details: [
      "Material: Coated steel cable rope + Memory foam handles",
      "Bearings: 360° high-speed steel ball bearings",
      "Length: 9.8 feet (Fully adjustable for any height)",
      "Handles: Ergonomic sweat-wicking foam handle grips"
    ],
    image: "/images/skipping-rope.jpg",
    meeshoLink: "https://www.meesho.com/dyweq?ms=2",
    amazonLink: "https://www.amazon.in"
  },
  {
    id: "pvc-dumbbells",
    name: "Gosai Hex-Force PVC Dumbbells (Pair)",
    category: "fitness-gym",
    subcategory: "workout",
    price: "₹599",
    rating: 4.8,
    reviews: 180,
    description: "Premium hexagonal PVC dumbbells filled with iron sand/concrete mix. The hexagonal design prevents dumbbells from rolling, and the thick vinyl coating protects floors from scratches.",
    details: [
      "Material: Vinyl-coated outer shell with high-density iron sand filler",
      "Weight Options: Available in 2kg, 3kg, and 5kg pairs",
      "Design: Hexagonal anti-roll design for push-up support",
      "Comfort: Non-slip textured comfort grip"
    ],
    image: "/images/pvc-dumbbells.jpg",
    meeshoLink: "https://www.meesho.com/dyweq?ms=2",
    amazonLink: "https://www.amazon.in"
  },

  // --- FITNESS & GYM EQUIPMENT: SAFETY & GRIP ---
  {
    id: "hand-gripper",
    name: "Gosai Flex-Grip Adjustable Hand Gripper",
    category: "fitness-gym",
    subcategory: "safety-grip",
    price: "₹149",
    rating: 4.7,
    reviews: 312,
    description: "Develop explosive forearm, wrist, and finger strength. Features a durable dial that easily adjusts resistance from 10kg to 60kg, accommodating beginners to seasoned athletes.",
    details: [
      "Resistance range: 10kg to 60kg (Adjustable dial)",
      "Material: High-strength stainless steel spring + Ergonomic TPR handle",
      "Utility: Non-slip comfortable grip fitting all hand sizes",
      "Portability: Compact size to workout anywhere, anytime"
    ],
    image: "/images/hand-gripper.jpg",
    meeshoLink: "https://www.meesho.com/dyweq?ms=2",
    amazonLink: "https://www.amazon.in"
  },
  {
    id: "skating-kit",
    name: "Gosai Armor-Shield Skate Safety Kit",
    category: "fitness-gym",
    subcategory: "safety-grip",
    price: "₹449",
    rating: 4.6,
    reviews: 74,
    description: "Professional multi-sport protective gear kit. Provides maximum impact absorption and joint protection for roller skating, skateboarding, cycling, and scooter riding.",
    details: [
      "Components: 2 Knee Pads, 2 Elbow Pads, 2 Wrist Guards",
      "Material: Shock-absorbing EVA foam + Impact-resistant PP shell",
      "Fit: Elastic straps with secure Velcro fasteners for custom sizing",
      "Ventilation: Breathable mesh fabric backing"
    ],
    image: "/images/skating-kit.jpg",
    meeshoLink: "https://www.meesho.com/dyweq?ms=2",
    amazonLink: "https://www.amazon.in"
  }
];
