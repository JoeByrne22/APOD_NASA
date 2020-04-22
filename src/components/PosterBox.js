import React, {Component} from 'react';
// import { render } from '@testing-library/react';
// import { Link } from 'react-router-dom';

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
      <div className="indexContainer">
        
        {
          this.state.data.map((newData, i)=> 
          <div className="container"  key={i}>
              <a href={newData.title}>
                <h2>Title: {newData.title}</h2>
                <h2>Date: {newData.date}</h2>
              </a>

          </div>
          )
        }
      </div>
    )
  }
}

export default PosterBox;