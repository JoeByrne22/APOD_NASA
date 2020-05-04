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
        },
        {
          "id": "seven",
          "title": "Lyrid Meteor Streak",
          "date" : "23th April 2020",
          "credit": "Zolt Levay"
        },
        {
          "id": "eight",
          "title": "Planet Earth at Twilight",
          "date" : "22th April 2020",
          "credit": "ISS Expedition 2 Crew"
        },
        {
          "id": "nine",
          "title": "Eye on the Milky Way",
          "date" : "21th April 2020",
          "credit": "Miguel Claro "
        },
        {
          "id": "ten",
          "title": "IC 2944: The Running Chicken Nebula",
          "date" : "20th April 2020",
          "credit": "Juan Filas"
        },
        {
          "id": "eleven",
          "title": "The Windmill and the Star Trails",
          "date" : "17th April 2020",
          "credit": "Antonio Gonzalez"
        },
        {
          "id": "twelve",
          "title": "Comet ATLAS Breaks Up",
          "date" : "16th April 2020",
          "credit": "Milen Minev, Velimir Popov and Emil Ivanov"
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
                <h2>{newData.title}</h2>
                <h2>{newData.date}</h2>
                <h3>{newData.credit}</h3>
              </a>

          </div>
          )
        }
      </div>
    )
  }
}

export default PosterBox;