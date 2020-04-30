import React from "react";
import PosterIndex from './PosterIndex'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

// This example show how you could create a custom
// <Link> that renders something special when the URL
// is the same as the one the <Link> points to.

export default function CustomLinkExample() {
  return (
    <Router>
      <div>
        <MenuLink
          activeOnlyWhenExact={true}
          to="/"
          label="Home"
        />
        <MenuLink 
          to="/about" 
          label="About" />
        <MenuLink 
          to="/index" 
          label="index" />
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/index">
            <Index />
          </Route>
        </Switch>

        <Switch>
          <Route path="/one">
            <One />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function MenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Index() {
  return (
    <div>
      <h1>Index</h1>
      <PosterIndex />
    </div>
    
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


function One() {
  return (
    <div>
      <h2>One</h2>
    </div>
  );
}
