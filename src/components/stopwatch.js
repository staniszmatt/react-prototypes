import React, {Component} from 'react'

class Stopwatch extends Component{
   constructor(props){
      super(props);
      this.state = {
         status: "stopped",
         start: null,
         elapsed: 0
      }
   }

   render(){
      const {status, elapsed} = this.state;
      return(
         <div>
            <h1>
               {elapsed}
               <p>{status}</p>
            </h1>
         </div>
      );
   }  
}

export default Stopwatch;