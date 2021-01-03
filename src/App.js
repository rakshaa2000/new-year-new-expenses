import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./images/undraw_Payments_re_77x0.svg";
import logo1 from './images/undraw_transfer_money_rywa.svg'

import AddTutorial from "./components/add-tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            NYNE
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Transactions
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Expense
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <div style={{display:"inline-flex", justifyContent:"space-around"}}>
          <img src={logo1} width="200px" height="200px" style={{transform:"translateX(20%) translateY(-15%)"}}/>
          <hr></hr>
          <h2>Family Expenses Application</h2>
          <hr></hr>
          <img src={logo} width="200px" height="200px" style={{transform:"translateX(20%) translateY(-15%)"}}/>
          </div>
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App