import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WeatherGraph from '../components/weatherGraph.js'
import GoogleMap from '../components/google_map.js'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = cityData.list.map(weather => weather.main.temp).map(kelvin => kelvin - 273.15);
    // iterates over each list-item in the city data and picks out the temp
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon
    const lat = cityData.city.coord.lat

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat}/>
        </td>
        <td>
          <WeatherGraph data={temperatures} color="red" units="°C"/>
        </td>
        <td>
          <WeatherGraph data={pressures} color="green" units="hPa"/>
        </td>
        <td>
          <WeatherGraph data={humidities} color="orange" units="%"/>
        </td>
      </tr>
    )

  }

  render() {
    console.log(this)
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }; //  <-- is ES6 for --> { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)
