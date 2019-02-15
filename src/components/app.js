import React from 'react';
import Welcome from '../components/welcome';
import {Route} from 'react-router-dom';
   

export default () => {
   return (
   <div className="container">
      <h1>This is ROUTING!</h1>
      <Route path="/" component={Welcome}/>
   </div>
   )
}
