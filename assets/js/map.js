var map = L.map('map').setView([30.320493, 56.002808], 9);
var marker = L.marker([51.5, -0.09]).addTo(map);
var L = window.L;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.on("click", function (event) {
    console.log("Coordinates: " + event.latlng.toString());
    L.marker(event.latlng).addTo(map);
});
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("شما کلیک کردید روی مختصات  " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);