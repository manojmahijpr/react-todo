import React from "react";

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Nav from "../components/layout/Nav";

import Todos from './Todos';
import Favorites from './Favorites';
import Settings from './Settings';
import Footer from "../components/layout/Footer";


export default class Layout extends React.Component {
  render() {
    
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <Router>
      <div>
        <Nav location={window.location} />
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              <Switch>
                <Route exact path="/" component={Todos}/>
                <Route path="/favorites" component={Favorites}></Route>
                <Route path="/settings" component={Settings}></Route>
              </Switch>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
      </Router>
    );
  }
}
