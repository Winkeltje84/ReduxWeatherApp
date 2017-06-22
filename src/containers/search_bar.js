import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this)
    // above binds this to the onInputChange function since the function
    // originally doesn't know about 'this'
  }
  // this constructor sets the search state to an empty string at first
  // and defines it as 'term'

  onInputChange(event) {
    this.setState( { term: event.target.value })
    // because 'this' has been binded to the onInputChange function in th
    // constructor, we can now use setState to set the new state of 'term'
  }

  onFormSubmit(event) {
    event.preventDefault();
    // above function makes sure the standard FORM response of submit is not
    // done. Otherwise the form will create a post request and we do not want to
    // be send to a new page. When clicking Submit now (or pressing enter) the
    // 'term' will stay as we typed it.
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
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
}


export default SearchBar
