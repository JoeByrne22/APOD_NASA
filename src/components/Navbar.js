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
      <div className="wrapper">
          <div className="navBar">
            <span>
              <MenuLink
              activeOnlyWhenExact={true}
              to="/"
              label="Home" />
            </span>
            <span>
              <MenuLink 
              to="/about" 
              label="About" />
            </span>
            <span>
              <MenuLink 
              to="/index" 
              label="index" />
            </span>
          </div>
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
          <Route path="/two">
            <Two />
          </Route>
          <Route path="/three">
            <Three />
          </Route>
          <Route path="/four">
            <Four />
          </Route>
          <Route path="/five">
            <Five />
          </Route>
          <Route path="/six">
            <Six />
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
    <div className="show_container">
          <img className="img img1" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>Andromeda Island Universe</h2>
          <h2>30th April 2020</h2>
          <h2>taken by Yuzhe Xiao</h2>
        </div>

      </div>

    </div>
  );
}

function Two() {
  return (
    <div className="show_container">
          <img className="img img2" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>The Ion Tail of New Comet SWAN</h2>
          <h2>29th April 2020</h2>
          <h2>taken by Gerald Rhemann</h2>
        </div>

      </div>

    </div>
  );
}

function Three() {
  return (
    <div className="show_container">
          <img className="img img3" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>The Kepler-90 Planetary System</h2>
          <h2>28th April 2020</h2>
          <h2>taken by Wendy Stenzel</h2>
        </div>

      </div>

    </div>
  );
}


function Four() {
  return (
    <div className="show_container">
          <img className="img img4" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>Fresh Tiger Stripes on Saturn's Enceladus</h2>
          <h2>27th April 2020</h2>
          <h2>taken by NASA</h2>
        </div>

      </div>

    </div>
  );
}


function Five() {
  return (
    <div className="show_container">
          <img className="img img5" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>Edwin Hubble Discovers the Universe</h2>
          <h2>26th April 2020</h2>
          <h2>Carnegie Institution for Science</h2>
        </div>

      </div>

    </div>
  );
}


function Six() {
  return (
    <div className="show_container">
          <img className="img img6" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>Hubble's Cosmic Reef</h2>
          <h2>25th April 2020</h2>
          <h2>taken by NASA</h2>
        </div>

      </div>

    </div>
  );
}
