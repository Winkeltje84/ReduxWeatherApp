import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = cityData.list.map(weather => weather.main.temp);
    // iterates over each list-item in the city data and picks out the temp

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines data={temperatures}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td></td>
        <td></td>
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
            <th>Tempature</th>
            <th>Pressur</th>
            <th>Humidity</th>
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
