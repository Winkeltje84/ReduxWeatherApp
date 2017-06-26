import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class WeatherList extends Component {
  render() {
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
      </table>
    )
  }
}
