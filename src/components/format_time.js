import React, {Component} from 'react';

class FormatTime extends Component{
   constructor(props){
      super(props);
      this.timerStyle = {
         display: 'inline-block',
         position: 'relative',
         left: '50%',
         transform: 'translate(-50%)',
         width: '383px'
      };
   }
   millisecondsToTime(){
      const {elapsed} = this.props;
      const sec = elapsed/1000;
      const min = sec/60;
      
      return {
         hour: Math.floor(min/60),
         min: Math.floor(min%60),
         sec: Math.floor(sec%60),
         ms: Math.floor(elapsed%100)
      }
   }
   leadingZero(numberCheck){
      return numberCheck < 10 ? `0${numberCheck}` : numberCheck;
   }
   trailingZeros(numberCheck){
      return numberCheck < 10 ? `${numberCheck}0` : numberCheck;
   }
   render(){
      const timeDisplay = this.millisecondsToTime();
      let {hour, min, sec, ms} = timeDisplay;
      return (
         <div style={this.timerStyle}>{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}:{this.trailingZeros(ms)  }</div>
      )
   }  
}

export default FormatTime;