import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WeatherGraph from '../components/weatherGraph.js'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = cityData.list.map(weather => weather.main.temp);
    // iterates over each list-item in the city data and picks out the temp
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <WeatherGraph data={temperatures} color="red" units="K"/>
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
            <th>Tempature (K)</th>
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
