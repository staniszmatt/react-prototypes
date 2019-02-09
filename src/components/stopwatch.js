import React, {Component} from 'react'

class Stopwatch extends Component{
   constructor(props){
      super(props);
      this.state = {
         status: "stopped",
         start: null,
         elapsed: 0
      }
      this.start = this.start.bind(this);
      this.stop = this.stop.bind(this);
   }
   start(){
      this.setState({
         status: "running",
         start: new Date().getTime()
      });
   }
   stop(){
      this.setState({
         status: "stopped",
      });
   }

   render(){
      const {status, elapsed} = this.state;

      return(
         <div>
            <h1>
               {elapsed}
               <p>{status}</p>
               <button onClick={this.start}>Start</button>
               <button onClick={this.stop}>Stop</button>
            </h1>
         </div>
      );
   }  
}

export default Stopwatch;