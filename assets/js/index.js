let map;

function initMap() {

    // fixing centre of our map
    const outr = { lat:20.2758301, lng:85.7766177 };
    const map = new google.maps.Map(document.getElementById("mapCanvas"), {
        // center: { lat:20.2758301, lng:85.7766177 } ,
        center: outr ,
        zoom: 16,
        mapId:'b51898b863329aa9'
    });

}

window.initMap = initMap;

