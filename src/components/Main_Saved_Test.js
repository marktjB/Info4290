import React, { Component, View, Text, styles } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Thank_You from './Thank_You'

class Main extends Component {

  render() {
    return (
      <div id="content">
        <h1>Choose one candidate</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.gender.value.toString(), 'Ether')
          this.props.createProduct(name, price)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Product Name"
              // required />
              />
          </div>
          <div className="form-group mr-sm-2">
            <input type="radio" id="gender" ref={(input) => { this.gender = input }} name="gender" value="10" /> Male <br />
            <input type="radio" id="gender" ref={(input) => { this.gender = input }} name="gender" value="11" /> Female <br />
            <input type="radio" id="gender" ref={(input) => { this.gender = input }} name="gender" value="13" /> Other  <br />
          </div>
          <button type="submit" className="btn btn-primary">Submit Vote</button>
        </form>

        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Thank_You">Thank You</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Thank_You">
            <Thank_You />
          </Route>

        </Switch>
      </div>
      </Router>        

    
        <p>&nbsp;</p>
        {/* Only for showing the blockchain */}
        <h2>Inputted Votes</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Party</th>
              <th scope="col">Vote</th>
              <th scope="col">Voter</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                  <td>{product.owner}</td>
                  <td>
                    { !product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }}
                        >
                          Validate
                        </button>
                      : null
                    }
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* End of the showing inputs */}
      </div>
    );
  }
}

export default Main;
