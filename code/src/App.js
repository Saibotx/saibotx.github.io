//Import Packages
import React from "react";
// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Router, Link, Route, Switch } from "react-static";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { withRouter } from "react-static";

//Import Pages
import Home from "./pages/Home";
import WorkPortfolio from "./pages/Work";
import PageNotFound from "./pages/PageNotFound";

//Import Components
import FadeIn from "./components/FadeIn.js";
import SplitSection from "./components/SplitSection";

//Import CSS
import "./styles/transitions.css";
import "./styles/styles.css";

//Define helper functions
const Transition = props => {
  return (
    <ReactCSSTransitionGroup
      transitionEnterTimeout={1200}
      transitionLeaveTimeout={1200}
      transitionName={"undefined"}
    >
      {props.children}
    </ReactCSSTransitionGroup>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.setState({
      client: true
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (this.props.location && this.props.location.pathname === "/") {
        if (this.state.client) {
          window.scrollTo(0, document.body.scrollHeight);
        }
      }
    }
  }
  render() {
    var side;
    var pathname = this.props.location.pathname;
    // var Router = (p)=><BrowserRouter>{p.children}</BrowserRouter>;

    //Set Router
    // var Router = (p)=><BrowserRouter>{p.children}</BrowserRouter>;
    //Deal with pathname and sides
    // pathname = window.location.pathname;

    switch (pathname) {
      case "/engineer":
        side = "left";
        break;
      case "/photographer":
        side = "right";
        break;
      default:
        side = null;
    }

    return (
      <div style={{ position: "relative" }}>
        {/* hacky way of dismounting home section with animation. acutal animation happens
          within the Home component.  */}
        <Transition>
          {pathname == "/" && <Home client={this.state.client} />}
        </Transition>
        {/* sub pages */}
        <Switch>
          <Route path="/engineer" component={FadeIn(WorkPortfolio)} />
          <Route path="/photographer" component={FadeIn(WorkPortfolio)} />
        </Switch>
        {/* background render depending on side */}
        <SplitSection side={side} />
      </div>
    );
  }
}

export default withRouter(App);
