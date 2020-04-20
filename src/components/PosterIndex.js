import React from 'react';
// import axios from 'axios';
import PosterBox from './PosterBox';


class PosterIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  getPosters() {
    // axios.get('/api/places')
    //   .then(res => this.setState({ places: res.data, filteredPlaces: res.data }));
    console.log('testting the request')
  }

  componentDidMount() {
  }

  // handleSearch(event) {
  //   event.preventDefault();
  //   this.setState({ query: event.target.value });
  //   console.log('search');
  //   const query  = this.state.query;
  //   let filteredPlaces = this.state.filteredPlaces;
  //   const places =this.state.places;
  //   filteredPlaces = places.filter(places =>
  //     places.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   this.setState({ filteredPlaces: filteredPlaces });
  // }


  render() {
    return (
      <section className="section">
        <PosterBox />
        
      </section>
    );
  }
}

export default PosterIndex;