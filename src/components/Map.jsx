import React, { Component } from 'react';

class Map extends Component {
  // todo refactor
  componentDidMount() {
    const { latitude, longitude, campgrounds } = this.props;

    const latLng = {
      lat: latitude || 90,
      lng: longitude || 90
    };

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: latLng,
      mapTypeId: 'terrain'
    });

    // customize so this looks like "home"
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
    });

    campgrounds.forEach(campground => {
      const marker = new google.maps.Marker({
        position: {
          lat: parseFloat(campground.latitude),
          lng: parseFloat(campground.longitude),
          title: campground.facilityName
        },
        map: map
      });

      const infowindow = new google.maps.InfoWindow({
        content: `<div id="tooltip">${campground.facilityName}</div>`
      });

      marker.addListener('click', () => {
        this.props.selectCampground(campground.facilityID);
        infowindow.open(map, marker);
      });
    })
  }

  render() {
    return <div id="map" className="map"></div>;
  }
}

export default Map;