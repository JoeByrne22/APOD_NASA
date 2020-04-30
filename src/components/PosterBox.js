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
          "id": "one",
          "title": "Andromeda Island Universe",
          "date" : "30th April 2020",
          "credit": "Yuzhe Xiao"
        },
        {
          "id": "two",
          "title": "The Ion Tail of New Comet SWAN",
          "date" : "29th April 2020",
          "credit": "Gerald Rhemann"
        },
        {
          "id": "three",
          "title": "The Kepler-90 Planetary System",
          "date" : "28th April 2020",
          "credit": "Wendy Stenzel"
        },
        {
          "id": "four",
          "title": "Fresh Tiger Stripes on Saturn's Enceladus",
          "date" : "27th April 2020",
          "credit": "NASA"
        },
        {
          "id": "five",
          "title": "Edwin Hubble Discovers the Universe",
          "date" : "26th April 2020",
          "credit": "Carnegie Institution for Science"
        },
        {
          "id": "six",
          "title": "Hubble's Cosmic Reef",
          "date" : "25th April 2020",
          "credit": "NASA"
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
              <a href={newData.id}>
                <h2>Title: {newData.title}</h2>
                <h2>Date: {newData.date}</h2>
                <h3>Credit to: {newData.credit}</h3>
              </a>

          </div>
          )
        }
      </div>
    )
  }
}

export default PosterBox;