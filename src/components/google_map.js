import React, { Component } from 'react'

class GoogleMap extends Component {

  // a 'lifecycle' method that gets called after the component is rendered to
  // the screen.
  componentDidMount() {
    // google.maps.Map creates an embedded map
    // this.refs.map --> as a first argument you give this, then Googlemaps knows
    //  that you want this maps to embedded in a div with a ref of 'map'
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    return <div ref="map" />; // we give this a "ref" of "map" so we can tell
    // google maps it needs to embed it into the div with this reference.
  }
}

export default GoogleMap
