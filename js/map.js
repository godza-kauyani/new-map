mapboxgl.accessToken = 'pk.eyJ1IjoiZ29kemEiLCJhIjoiY2pwczhwMGtiMDA2cjQzbzZ6cDU2NG95NCJ9.cds9feybkCrU1v5upFxTDw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
	center:[28.5812,-20.1722],
	zoom:14
});
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
