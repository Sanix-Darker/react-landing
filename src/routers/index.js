import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import Theme1 from "../themes/theme1";
import Theme2 from "../themes/theme2";
import Theme3 from "../themes/theme3";
import Theme4 from "../themes/theme4";
import Theme5 from "../themes/theme5";
import Theme6 from "../themes/theme6";
// import Theme7 from "../themes/theme7";
// import Theme8 from "../themes/theme8";
// import AboutUs from '../themes/about-us';
// import Services from '../themes/services';
// import Pricing from '../themes/pricing';
// import contact from '../themes/contact';

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Theme1} />
            <Route exact path="/theme1" component={Theme1} />
            <Route exact path="/theme2" component={Theme2} />
            <Route exact path="/theme3" component={Theme3} />
            <Route exact path="/theme4" component={Theme4} />
            <Route exact path="/theme5" component={Theme5} />
            <Route exact path="/theme6" component={Theme6} />
            {/* 
             />
            <Route exact path="/theme7" component={Theme7} />
            <Route exact path="/theme8" component={Theme8} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/contact" component={contact} /> */}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
