import React, {Component} from 'react';
import Movies from '../components/movies';

class MovieContainer extends Component {
   render(){

      return (
         <div>
            <h2>Movie Container</h2>
            <Movies/>
         </div>
      )
   }
}

export default MovieContainer;