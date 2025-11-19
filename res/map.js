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

    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_dark/{z}/{x}/{y}{r}.png', {
        maxZoom: 25,
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([spsmb.x, spsmb.y]).addTo(map).bindPopup('SPSMB').openPopup();

    L.marker([fei.x, fei.y]).addTo(map).bindPopup('FEI VSB-TU Ostrava');

    map.panBy([0, -15]);
});