let spsmb = {
    x: 50.4159698,
    y: 14.9021371
};
let fei = {
    x: 49.8318105,
    y: 18.1593779
}

document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map', { detectRetina: true }).setView([spsmb.x, spsmb.y], 13);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 20
    }).addTo(map);

    L.marker([spsmb.x, spsmb.y]).addTo(map).bindPopup('SPSMB').openPopup();

    L.marker([fei.x, fei.y]).addTo(map).bindPopup('FEI VSB-TU Ostrava');

    map.panBy([0, -15]);
});