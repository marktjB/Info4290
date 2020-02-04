import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Section where the user can check or vote, 
// I have commented code for readability

import Thank_You from './Thank_You'; //To call Thank_You.js

class Main_Vote extends Component {
  // const Thank_You = () => {
  render() {
    return (
      <div id="content">
        <p>&nbsp;</p>
        Who would you like to vote for:
        
        <form //onSubmit={(event) => {
        //   event.preventDefault()
        //   const name = this.productName.value
        //   const price = window.web3.utils.toWei(this.gender.value.toString(), 'Ether')
        //   this.props.createProduct(name, price)
        // }}>
        >
          {/* <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              // ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Product Name"
              // required />
              />
          </div> */}
          <div className="form-group mr-sm-2">
            <input type="radio" id="gender" ref={(input) => { this.gender = input }} name="gender" value="10" /> Male <br />
            <input type="radio" id="gender" ref={(input) => { this.gender = input }} name="gender" value="11" /> Female <br />
            <input type="radio" id="gender" ref={(input) => { this.gender = input }} name="gender" value="13" /> Other  <br />
          </div>
          <Router>
          <Link to="/Thank_You">
          <button type="submit" className="btn btn-primary">Submit Vote</button>
          </Link>
          <Switch>
          <Route path="/Thank_You">
            <Thank_You />  {/* This calls to import at top and then that calls the vote.js file*/}
          </Route>
        </Switch>
          </Router>
        </form>

      </div>
    );
  }
}

export default Main_Vote;
