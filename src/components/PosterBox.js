import React, {Component} from 'react';
// import { render } from '@testing-library/react';

class PosterBox extends Component {
  constructor()
  {
    super();
    this.state = {
      data: [
        {
          "title": "one",
          "date" : 1
        },
        {
          "title": "two",
          "date" : 2
        }
      ]    
    }
  }
  render()
  {
    return(
      <div>
        {
          this.state.data.map((newData)=> 
              <h2>{newData.title}</h2>
            )
        }
      </div>
    )
  }
}

export default PosterBox;