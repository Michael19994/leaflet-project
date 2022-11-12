import footballClubs from "./footballclubdata.js";

// Map install
const map = L.map('map').setView([-33.2653, -62.4935], 8);

// osm layer
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

// world imagery
const worldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
worldImagery.addTo(map);

// google street
const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
  maxZoom: 20,
  subdomains:['mt0', 'mt1', 'mt2', 'mt3']
});
googleStreets.addTo(map);

//dark mode map
const dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.opensreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto/.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20
});


const baseMaps = {
  "OSM": osm,
  "World imagery map": worldImagery,
  "Dark": dark,
  "Google Street": googleStreets,
};


L.control.layers(baseMaps).addTo(map);


footballClubs.map((club) => {

  const popupTemplate = `
  <div class="popup">
    <h2>${club.clubName}</h2>
    <img class="img__popup" src=${club.badgeImageUrl}>
    <p>Location: ${club.location} </p>
    <p>Formed In: ${club.formedIn}</p>
    <p>Stadium Name: ${club.stadiumName}</p>
    <p>Capacity: ${club.stadiumCapacity}</p>
    <p>${club.history}</p>
  </div>
  `;

  let iconObj = { iconUrl: club.badgeImageUrl, iconSize: [50, 50] };

  const myIcon = L.icon(iconObj);
  const marker = L.marker(club.coordinates, { icon: myIcon });
  var popup = marker.bindPopup(popupTemplate).openPopup();
  popup.addTo(map);
});
