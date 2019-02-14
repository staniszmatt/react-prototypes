import React, {Component} from 'react';
import Movies from '../components/movies';
import axios from 'axios';

class MovieContainer extends Component {
  // /**
  //  * Creates an instance of MovieContainer.
  //  * @param  {any} props - Through Super, This is needed regardless if you use it. This way it is setup is a new way that can be used now. 
  //  * @memberof MovieContainer
  //  */
  // constructor(props){
  //   super(props);
    state = {
      movies: []
    }
  //   console.log(props);
  // }

  componentDidMount  (){
    const url = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json";
    axios.get(url).then((resp)=>{
      this.setState({
        movies: resp.data.feed.entry
      })
    });
  }
  
  render(){ 
    // console.log(props)
    const movieList = this.state.movies.map((movieInfo, index)=>{
      return <Movies info={movieInfo} key={index} />
    });
    return (
      <div>
        {movieList}
      </div>
    )
  }
}
export default MovieContainer;