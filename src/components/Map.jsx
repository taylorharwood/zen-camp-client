import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);

    this.markers = [];
  }

  clearMarkers() {
    this.markers.forEach(marker => {
      marker.setMap(null);
    });

    this.markers = [];
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: new google.maps.LatLng(41.850033, -87.6500523),
      mapTypeId: 'terrain'
    });
  }

  componentWillUpdate(nextProps) {
    const { campgrounds, latitude, longitude } = nextProps;

    this.map.setCenter(new google.maps.LatLng(latitude, longitude));
    this.map.setZoom(8);

    // clear any and all previous markers:
    this.clearMarkers();

    // create new markers for each campground:
    campgrounds.forEach(campground => {
      const marker = new google.maps.Marker({
        position: {
          lat: parseFloat(campground.latitude),
          lng: parseFloat(campground.longitude),
          title: campground.facilityName
        },
        map: this.map
      });

      const infowindow = new google.maps.InfoWindow({
        content: `<div id="tooltip">${campground.facilityName}</div>`
      });

      marker.addListener('click', () => {
        this.props.selectCampground(campground.facilityID);
      });

      marker.addListener('mouseover', () => {
        infowindow.open(map, marker);
      });

      marker.addListener('mouseout', () => {
        infowindow.close(map, marker);
      });

      this.markers.push(marker);
    });
  }

  render() {
    return <div id="map" className="map"></div>;
  }
}

export default Map;