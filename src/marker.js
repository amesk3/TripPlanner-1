
const mapboxgl = require("mapbox-gl")

const iconURLs = {
    hotels: "url(http://i.imgur.com/D9574Cu.png)",
    restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
    activities: "url(http://i.imgur.com/WbMOfMl.png)"
};

const buildMarker = (type, coords) =>{
    let marker = document.createElement('div')
    marker.style.width = "32px"
    marker.style.height = "39px"

    if (type === "activity"){
        marker.style.background = iconURLs.activities

    }else if(type === "hotel"){
        marker.style.background = iconURLs.hotels
        
    }else{ //restaurants
        marker.style.background = iconURLs.restaurants
    }
    const final = new mapboxgl.Marker(marker).setLngLat(coords)
    console.log(final)
    return final
}

module.exports = buildMarker