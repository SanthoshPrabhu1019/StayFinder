const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?...",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
    category: ["Beach", "Trending"]
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?...",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
    category: ["Apartment", "Rooms"]
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?...",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
    category: ["Mountains", "Cabins"]
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?...",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
    category: ["Vineyard", "Historical Homes"]
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?...",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
    category: ["Woodlands", "Camping"]
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?...",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
    category: ["Beach", "Amazing Pools"]
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?...",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
    category: ["Lake", "Cabins"]
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?...",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
    category: ["Apartment", "Trending"]
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?...",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2265, 46.0965] },
    category: ["Ski-in/out", "Mountains"]
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?...",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] },
    category: ["Campsite", "Countryside"]
  },
  {
    title: "Desert Oasis Camp",
    description:
      "Sleep under the stars in a desert camp. A unique adventure amidst the sand dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524492449090-1a065f59e3e5?...",
    },
    price: 1100,
    location: "Merzouga",
    country: "Morocco",
    geometry: { type: "Point", coordinates: [-4.0127, 31.1007] },
    category: ["Camping", "Countryside"]
  },
  {
    title: "Charming Parisian Apartment",
    description:
      "Fall in love with Paris from this cozy apartment. Walk to cafes, museums, and iconic landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?...",
    },
    price: 2200,
    location: "Paris",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
    category: ["Apartment", "Historical Homes"]
  },
  {
    title: "Tropical Bungalow",
    description:
      "Relax in a hammock by your private bungalow in this tropical paradise island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?...",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
    category: ["Beach", "Trending"]
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Escape to the countryside in this charming farmhouse. Perfect for a peaceful family vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691723518-36a1c4a9936d?...",
    },
    price: 950,
    location: "Nashville",
    country: "United States",
    geometry: { type: "Point", coordinates: [-86.7816, 36.1627] },
    category: ["Farm", "Countryside"]
  },
  {
    title: "Igloo Adventure",
    description:
      "Stay in a real igloo and watch the northern lights dance above you.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?...",
    },
    price: 2700,
    location: "Lapland",
    country: "Finland",
    geometry: { type: "Point", coordinates: [27.6835, 67.9222] },
    category: ["Arctic", "Camping"]
  },
  {
    title: "Traditional Ryokan",
    description:
      "Immerse yourself in Japanese culture at this traditional ryokan with hot springs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?...",
    },
    price: 2000,
    location: "Kyoto",
    country: "Japan",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] },
    category: ["Bed & Breakfasts", "Historical Homes"]
  },
  {
    title: "Overwater Bungalow",
    description:
      "Enjoy luxury and privacy in an overwater bungalow with crystal-clear waters below.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?...",
    },
    price: 4500,
    location: "Bora Bora",
    country: "French Polynesia",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] },
    category: ["Beach", "Amazing Pools"]
  },
  {
    title: "Cave House",
    description:
      "Stay in a unique cave house carved into the rocks, blending history with comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?...",
    },
    price: 1600,
    location: "Cappadocia",
    country: "Turkey",
    geometry: { type: "Point", coordinates: [34.8496, 38.6431] },
    category: ["Historical Homes", "Countryside"]
  },
  {
    title: "Cliffside Villa",
    description:
      "Marvel at breathtaking views from this villa perched on a cliff above the sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?...",
    },
    price: 5000,
    location: "Santorini",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] },
    category: ["Mansions", "Trending"]
  },
  {
    title: "Rainforest Lodge",
    description:
      "Immerse yourself in the lush greenery of the rainforest from this eco-friendly lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519822473142-6a666dbd2537?...",
    },
    price: 1900,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.0739, 9.7489] },
    category: ["Woodlands", "Camping"]
  },
  {
    title: "Castle Stay",
    description:
      "Live like royalty for a few days in this historic castle surrounded by beautiful gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?...",
    },
    price: 3200,
    location: "Edinburgh",
    country: "Scotland",
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] },
    category: ["Castles", "Historical Homes"]
  },
  {
    title: "Houseboat on the Backwaters",
    description:
      "Cruise through the serene backwaters in a traditional houseboat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519822473142-6a666dbd2537?...",
    },
    price: 1400,
    location: "Kerala",
    country: "India",
    geometry: { type: "Point", coordinates: [76.2711, 10.8505] },
    category: ["Boat", "Lake"]
  },
  {
    title: "Arctic Cabin",
    description:
      "Brave the cold in comfort with this heated cabin in the Arctic Circle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?...",
    },
    price: 2800,
    location: "Svalbard",
    country: "Norway",
    geometry: { type: "Point", coordinates: [15.6333, 78.2232] },
    category: ["Arctic", "Cabins"]
  },
  {
    title: "Vineyard Cottage",
    description:
      "Sip wine surrounded by vineyards in this cozy countryside cottage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691723518-36a1c4a9936d?...",
    },
    price: 1300,
    location: "Napa Valley",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.2869, 38.5025] },
    category: ["Vineyard", "Countryside"]
  },
  {
    title: "Himalayan Homestay",
    description:
      "Wake up to the Himalayas outside your window in this cozy homestay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?...",
    },
    price: 1100,
    location: "Manali",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1892, 32.2396] },
    category: ["Mountains", "Bed & Breakfasts"]
  },
  {
    title: "Jungle Tree Lodge",
    description:
      "Stay high up in the trees with stunning jungle views all around.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?...",
    },
    price: 1700,
    location: "Amazon Rainforest",
    country: "Brazil",
    geometry: { type: "Point", coordinates: [-60.025, -3.4653] },
    category: ["Woodlands", "Camping"]
  },
  {
    title: "Ice Hotel",
    description:
      "Sleep in a room made entirely of ice and snow, with cozy sleeping bags.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?...",
    },
    price: 3600,
    location: "Jukkasjärvi",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [20.6155, 67.8533] },
    category: ["Arctic", "Trending"]
  },
  {
    title: "Safari Tent",
    description:
      "Glamp in the wild with all modern comforts while staying close to nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?...",
    },
    price: 2100,
    location: "Maasai Mara",
    country: "Kenya",
    geometry: { type: "Point", coordinates: [35.1436, -1.4061] },
    category: ["Campsite", "Countryside"]
  },
  {
    title: "Mediterranean Villa",
    description:
      "Relax by your private pool overlooking the Mediterranean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?...",
    },
    price: 3900,
    location: "Nice",
    country: "France",
    geometry: { type: "Point", coordinates: [7.262, 43.7102] },
    category: ["Mansions", "Amazing Pools"]
  },
];

module.exports = { data: sampleListings };
