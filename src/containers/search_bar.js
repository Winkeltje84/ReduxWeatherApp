import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { findWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this)
    // above binds this to the onInputChange function since the function
    // originally doesn't know about 'this'
    this.onFormSubmit = this.onFormSubmit.bind(this)
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
    this.props.findWeather(this.state.term)
    this.setState({term : ''})
    // clears out imput as soon as onFormSubmit is clicked
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

//  anything returned from this function will end up as props on the
// SportList container (via de CONNECT function) so
// this.props.selectSport(sport) can be used
function mapDispatchToProps(dispatch) {
  // when selectSport is called, the result should be passed (dispatched) to all reducers
  return bindActionCreators({ findWeather: findWeather }, dispatch)
}


export default connect(null, mapDispatchToProps)(SearchBar)
// we added NULL here since mapDispatchToProps is only entered as a second argument
// so it tells the SearchBar no state is required here
