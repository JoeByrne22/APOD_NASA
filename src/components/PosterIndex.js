import React, {Component} from 'react';
import PosterBox from './PosterBox';
// import { render } from '@testing-library/react';
// import { Link } from 'react-router-dom';

class PosterIndex extends Component {
  constructor()
  {
    super();
    this.state = {
      data: []    
    }
  }
  render()
  {
    return(
      <div className="indexContainer">
        <PosterBox />
      </div>
    )
  }
}

export default PosterIndex;