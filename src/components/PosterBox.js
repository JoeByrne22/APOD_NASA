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
        },
        {
          "title": "three",
          "date" : 3
        },
        {
          "title": "four",
          "date" : 4
        },
        {
          "title": "five",
          "date" : 5
        }
      ]    
    }
  }
  render()
  {
    return(
      <div class="indexContainer">
        {
          this.state.data.map((newData)=> 
          <div className="container">
              <h2>{newData.title}</h2>
          </div>
            )
        }
      </div>
    )
  }
}

export default PosterBox;