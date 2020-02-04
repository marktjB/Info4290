import React, { Component, View, Text, styles } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Thank_You from './Thank_You'; //To call Thank_You.js
import Main_Vote from './vote';  

class Main extends Component {

  render() {
    return (
      <div id="content">
        <h1>Enter your Voter's Identification Number</h1>
        
        <form //onSubmit={(event) => {
          // event.preventDefault()
          // const name = this.productName.value
          // this.props.createProduct(name)
        //}}>
        >
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              // ref={(input) => { this.prod  uctName = input }}
              className="form-control"
              placeholder="Voter Identification Number"
              // required />
              />
          </div>
          <Router>
          <Link to="/vote">
          <button type="submit" className="btn btn-primary">Validate your number</button>
          </Link>

          <Switch>
          <Route path="/vote">
            <Main_Vote />  {/* This calls to import at top and then that calls the vote.js file*/}
          </Route>

        </Switch>
          </Router>
          {/* Will need to check if number matches some entry in a database */}
        </form>
        <hr />
      </div>
      
    );
  }
}

export default Main;
