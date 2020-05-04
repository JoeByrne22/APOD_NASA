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
            <span className="fade-in1">
              <MenuLink
              activeOnlyWhenExact={true}
              to="/"
              label="Home" />
            </span>
            <span className="fade-in2">
              <MenuLink 
              to="/about" 
              label="About" />
            </span>
            <span className="fade-in3">
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
          <Route path="/seven">
            <Seven />
          </Route>
          <Route path="/eight">
            <Eight />
          </Route>
          <Route path="/nine">
            <Nine />
          </Route>
          <Route path="/ten">
            <Ten />
          </Route>
          <Route path="/eleven">
            <Eleven />
          </Route>
          <Route path="/twelve">
            <Twelve />
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
      
      <Link to={to}>{label}</Link>
    </div>
  );
}

function Home() {
  return (
    <div className="home_container">
        <section className="showcase">
        <div className="video-container">
            <video src="https://traversymedia.com/downloads/video.mov" autoPlay muted loop></video>
        </div>
    </section>

    </div>
  );
}

function Index() {
  return (
    <div>
      <PosterIndex />
    </div>
    
  )
}

function About() {
  return (
    <div className="about_container">
      
      <h4>A small collection of the recent APOS (Astronomy Picture of the Day).</h4>
      <h4>Acknowledgement: The Astronomy Picture of the Day (APOD) is based upon work supported by NASA under award No. 80NSSC17M0076. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Aeronautics and Space Administration.</h4>
      <p>made with love</p>
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

function Seven() {
  return (
    <div className="show_container">
          <img className="img img7" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>Lyrid Meteor Streak</h2>
          <h2>23th April 2020</h2>
          <h2>taken by Zolt Levay</h2>
        </div>

      </div>

    </div>
  );
}

function Eight() {
  return (
    <div className="show_container">
          <img className="img img8" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>Planet Earth at Twilight</h2>
          <h2>22th April 2020</h2>
          <h2>taken by ISS Expedition 2 Crew</h2>
        </div>

      </div>

    </div>
  );
}

function Nine() {
  return (
    <div className="show_container">
          <img className="img img9" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>Eye on the Milky Way</h2>
          <h2>21th April 2020</h2>
          <h2>taken by Miguel Claro</h2>
        </div>

      </div>

    </div>
  );
}

function Ten() {
  return (
    <div className="show_container">
          <img className="img img10" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>IC 2944: The Running Chicken Nebula</h2>
          <h2>20th April 2020</h2>
          <h2>taken by Juan Filas</h2>
        </div>

      </div>

    </div>
  );
}

function Eleven() {
  return (
    <div className="show_container">
          <img className="img img11" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>The Windmill and the Star Trails</h2>
          <h2>17th April 2020</h2>
          <h2>taken by Antonio Gonzalez</h2>
        </div>

      </div>

    </div>
  );
}

function Twelve() {
  return (
    <div className="show_container">
          <img className="img img12" alt="universe"/>
      <div className="text_container">
        <div className="text_container_headers">
          <h2>Comet ATLAS Breaks Up</h2>
          <h2>16th April 2020</h2>
          <h2>taken by Milen Minev, Velimir Popov and Emil Ivanov</h2>
        </div>

      </div>

    </div>
  );
}




