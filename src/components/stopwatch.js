import React, {Component} from 'react';
import FormatTime from '../components/format_time';
class Stopwatch extends Component{
   constructor(props){
      super(props);
      this.state = {
         status: "stopped",
         start: null,
         elapsed: 0
      };
      this.start = this.start.bind(this);
      this.stop = this.stop.bind(this);
      this.update = this.update.bind(this);
      this.reset = this.reset.bind(this);
   }
   update(){
      let {status, start} = this.state;
      if (status === "running"){
         this.setState({
            elapsed: new Date().getTime() - start
         });
         setTimeout(this.update, 10);
      }
   }
   start(){
      this.setState({
         status: "running",
         start: new Date().getTime()
      });
      setTimeout(this.update, 10);
   }
   stop(){
      this.setState({
         status: "stopped"
      });
   }
   reset(){
      this.setState({
         status: "stopped",
         start: null,
         elapsed: 0
      })
   }

   render(){
      
      const {status, elapsed} = this.state;

      return(
         <div>
            <h1>
               <FormatTime elapsed={elapsed} />
               <p>{status}</p>
               <button onClick={this.start}>Start</button>
               <button onClick={this.stop}>Stop</button>
               <button onClick={this.reset}>Reset</button>
            </h1>
         </div>
      );
   }  
}

export default Stopwatch;