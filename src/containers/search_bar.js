import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }
  // this constructor sets the search state to an empty string at first
  // and defines it as 'term'

  render() {
      return (
        <form className="input-group">
          <input
            placeholder="Pick a city and see it's 5-day weather forecast!"
            className="form-control"
            value={ this.state.term }
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      )
  }

  onInputChange(event) {
    console.log(event.target.value)
  }
}


export default SearchBar
