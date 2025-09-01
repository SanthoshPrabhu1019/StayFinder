const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?..."
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
    category: ["Beach", "Trending"],
    amenities: {
      "Bathroom": ["Hair dryer", "Shampoo", "Body soap", "Hot water"],
      "Bedroom & Laundry": ["Washing machine", "Dryer", "Hangers", "Iron"],
      "Kitchen & Dining": ["Kitchen", "Fridge", "Microwave", "Cooking basics", "Kettle"],
      "Entertainment": ["TV"],
      "Heating & Cooling": ["Air conditioning"],
      "Home Safety": ["Smoke alarm", "First aid kit"],
      "Internet & Office": ["Wifi"],
      "Parking & Facilities": ["Free parking on premises"]
    }
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?..."
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
    category: ["Apartment", "Rooms"],
    amenities: {
      "Bathroom": ["Shampoo", "Body soap", "Hot water"],
      "Bedroom & Laundry": ["Washing machine", "Hangers", "Bed linen", "Iron"],
      "Kitchen & Dining": ["Kitchen", "Fridge", "Microwave", "Cooking basics", "Toaster", "Coffee"],
      "Entertainment": ["TV"],
      "Heating & Cooling": ["Air conditioning"],
      "Home Safety": ["Smoke alarm"],
      "Internet & Office": ["Wifi"]
    }
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?..."
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
    category: ["Mountains", "Cabins"],
    amenities: {
      "Bathroom": ["Hair dryer", "Shampoo", "Conditioner", "Body soap", "Hot water"],
      "Bedroom & Laundry": ["Washing machine", "Dryer", "Hangers", "Iron", "Bed linen"],
      "Kitchen & Dining": ["Kitchen", "Fridge", "Microwave", "Cooking basics", "Kettle", "Coffee"],
      "Entertainment": ["TV", "Books and reading material"],
      "Heating & Cooling": ["Air conditioning", "Ceiling fan"],
      "Home Safety": ["Smoke alarm", "Exterior security cameras", "First aid kit"],
      "Internet & Office": ["Wifi"],
      "Parking & Facilities": ["Free parking on premises"]
    }
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?..."
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
    category: ["Vineyard", "Historical Homes"],
    amenities: {
      "Bathroom": ["Hair dryer", "Shampoo", "Body soap", "Bidet", "Hot water"],
      "Bedroom & Laundry": ["Washing machine", "Dryer", "Hangers", "Bed linen", "Cotton linen"],
      "Kitchen & Dining": ["Kitchen", "Fridge", "Microwave", "Cooking basics", "Toaster", "Coffee"],
      "Entertainment": ["TV", "Books and reading material"],
      "Heating & Cooling": ["Air conditioning", "Ceiling fan"],
      "Home Safety": ["Smoke alarm", "Exterior security cameras", "First aid kit"],
      "Internet & Office": ["Wifi"],
      "Parking & Facilities": ["Free parking on premises", "Lift"]
    }
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?..."
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
    category: ["Woodlands", "Camping"],
    amenities: {
      "Bathroom": ["Shampoo", "Body soap", "Hot water"],
      "Bedroom & Laundry": ["Washing machine", "Dryer", "Hangers", "Bed linen", "Iron"],
      "Kitchen & Dining": ["Kitchen", "Fridge", "Cooking basics", "Kettle", "Coffee"],
      "Entertainment": ["TV", "Books and reading material"],
      "Heating & Cooling": ["Air conditioning"],
      "Home Safety": ["Smoke alarm"],
      "Internet & Office": ["Wifi"],
      "Parking & Facilities": ["Free parking on premises"]
    }
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?..."
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
    category: ["Beach", "Amazing Pools"],
    amenities: {
      "Bathroom": ["Hair dryer", "Shampoo", "Body soap", "Hot water"],
      "Bedroom & Laundry": ["Washing machine", "Hangers", "Bed linen", "Iron"],
      "Kitchen & Dining": ["Kitchen", "Fridge", "Microwave", "Cooking basics", "Toaster", "Coffee"],
      "Entertainment": ["TV"],
      "Heating & Cooling": ["Air conditioning"],
      "Home Safety": ["Smoke alarm"],
      "Internet & Office": ["Wifi"],
      "Parking & Facilities": ["Free parking on premises"]
    }
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?..."
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
    category: ["Lake", "Cabins"],
    amenities: {
      "Bathroom": ["Shampoo", "Body soap", "Hot water"],
      "Bedroom & Laundry": ["Washing machine", "Hangers", "Bed linen", "Iron"],
      "Kitchen & Dining": ["Kitchen", "Fridge", "Cooking basics", "Kettle"],
      "Entertainment": ["TV", "Books and reading material"],
      "Heating & Cooling": ["Air conditioning", "Ceiling fan"],
      "Home Safety": ["Smoke alarm", "First aid kit"],
      "Internet & Office": ["Wifi"],
      "Parking & Facilities": ["Free parking on premises"]
    }
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?..."
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
    category: ["Apartment", "Trending"],
    amenities: {
      "Bathroom": ["Hair dryer", "Shampoo", "Conditioner", "Body soap"],
      "Bedroom & Laundry": ["Washing machine", "Dryer", "Hangers", "Bed linen", "Iron"],
      "Kitchen & Dining": ["Kitchen", "Fridge", "Microwave", "Cooking basics", "Kettle", "Toaster", "Coffee"],
      "Entertainment": ["TV"],
      "Heating & Cooling": ["Air conditioning", "Ceiling fan"],
      "Home Safety": ["Smoke alarm", "Exterior security cameras", "First aid kit"],
      "Internet & Office": ["Wifi"],
      "Parking & Facilities": ["Free parking on premises", "Lift"]
    }
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?..."
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2265, 46.0965] },
    category: ["Ski-in/out", "Mountains"],
    amenities: {
      "Bathroom": ["Shampoo", "Body soap", "Hot water"],
      "Bedroom & Laundry": ["Washing machine", "Hangers", "Bed linen", "Iron"],
      "Kitchen & Dining": ["Kitchen", "Fridge", "Cooking basics", "Kettle", "Coffee"],
      "Entertainment": ["TV"],
      "Heating & Cooling": ["Air conditioning", "Ceiling fan"],
      "Home Safety": ["Smoke alarm", "First aid kit"],
      "Internet & Office": ["Wifi"],
      "Parking & Facilities": ["Free parking on premises"]
    }
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?..."
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] },
    category: ["Campsite", "Countryside"],
    amenities: {
      "Bathroom": ["Shampoo", "Body soap", "Hot water"],
      "Bedroom & Laundry": ["Washing machine", "Hangers", "Bed linen", "Iron"],
      "Kitchen & Dining": ["Kitchen", "Fridge", "Cooking basics", "Kettle", "Coffee"],
      "Entertainment": ["TV"],
      "Heating & Cooling": ["Air conditioning"],
      "Home Safety": ["Smoke alarm", "First aid kit"],
      "Internet & Office": ["Wifi"],
      "Parking & Facilities": ["Free parking on premises"]
    }
  }
];

module.exports = { data: sampleListings };
