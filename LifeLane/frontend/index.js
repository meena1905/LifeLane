let map;

async function initMap() {
  const position = { lat: 12.9718, lng: 77.59 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "bangalore",
  });
}
initMap();
