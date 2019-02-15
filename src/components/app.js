import React from 'react';
import Welcome from '../components/welcome';
import {Route} from 'react-router-dom';
import Nav from '../components/nav';

   

export default () => {
   return (
   <div className="container">
      <Nav/>
      <Route path="/" component={Welcome}/>
   </div>
   )
}
