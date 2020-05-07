import React from 'react';
// import PosterIndex from './components/PosterIndex';
import Narbar from './components/Navbar'
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Particles               
      params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: false,
            					color: "#3CA9D1",
            					blur: 1
            				}
            			}
            		}
            	}}
              style={{
                height: '100%',
                position: 'absolute',
                width: '100%',
                zIndex: '-1'
              }}/>
              
      <Narbar />
    </div>
  );
}

export default App;
