function initMap() {
    var options = {center : new L.LatLng(-18.9248577, -48.2523924), zoom : 15 };
    
    var osmUrl = 'http://{s}.tile.openstreetmap.org/mapnik_tiles/{z}/{x}/{y}.png',
                osmAttribution = 'Map data &copy; 2012 OpenStreetMap contributors',
                osm = new L.TileLayer(osmUrl, {maxZoom: 18, attribution: osmAttribution});
    
    var mapLayer = new L.TileLayer(osmUrl);
    
    this.map = new L.Map('map', options).addLayer(mapLayer);
}

function locateUser() {
    this.map.locate({setView : true});
}

var map = null;

initMap();

$('#actions').find('a').on('click', function() {
   locateUser();
});


