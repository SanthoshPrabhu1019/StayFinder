function initMap(listing) {
    if (!listing || !listing.geometry) return;

    const [lng, lat] = listing.geometry.coordinates;

    const map = L.map('map').setView([lat, lng], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(`<b>${listing.title}</b><br>${listing.location}, ${listing.country}`)
      .openPopup();
}
