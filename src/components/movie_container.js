import React, {Component} from 'react';
import Movies from '../components/movies';
import axios from 'axios';

class MovieContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
    console.log("props ",props);
  }

  componentDidMount  (){
    const url = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json";
    axios.get(url).then((resp)=>{
      this.setState({
        movies: resp.data.feed.entry
      })
    });
  }
  
  render(){ 
    console.log("state ", this.state)
    return (
      <div>
        <h2>Movie Container</h2>
        <Movies/>
      </div>
    )
  }
}
export default MovieContainer;