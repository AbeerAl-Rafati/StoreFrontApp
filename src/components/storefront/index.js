import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Stor() {
  return (
    <div>
      <Router>
        <switch>
          <Route exact from='/' render={props => <Index/>} />
          <Route exact from='/cart' render={props=><Cart/>}/>
        </switch>
      </Router>
    </div>
  );
}

export default Stor;
