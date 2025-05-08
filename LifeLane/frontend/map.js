const map = L.map("map").setView([12.9716, 77.5946], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const ambulanceIcon = L.icon({
  iconUrl: "ambulance-svgrepo-com.svg",
  iconSize: [32, 32],
});

const ambulances = [
  { id: "AMB-001", lat: 12.9716, lng: 77.5946 },
  { id: "AMB-002", lat: 12.975, lng: 77.59 },
];

ambulances.forEach((amb) => {
  amb.marker = L.marker([amb.lat, amb.lng], { icon: ambulanceIcon }).addTo(map);
});

setInterval(() => {
  ambulances.forEach((amb) => {
    amb.lat += 0.0001;
    amb.lng += 0.0001;
    amb.marker.setLatLng([amb.lat, amb.lng]);

    fetch("http://localhost:3000/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ambulanceId: amb.id,
        location: { lat: amb.lat, lng: amb.lng },
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Logged:", data))
      .catch((error) => console.error("Logging error:", error));
  });

  map.panTo([ambulances[0].lat, ambulances[0].lng]);
}, 1000);
