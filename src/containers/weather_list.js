import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class WeatherList extends Component {
  renderList() {
    console.log(this)
    return this.props.weather.map((data) =>
    <tr key={data.city.name}>
      <td>{data.city.name}</td>
      <td></td>
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
          {this.renderList()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }; //  <-- is ES6 for --> { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)
