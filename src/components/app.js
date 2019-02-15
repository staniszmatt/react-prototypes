import React from 'react';
import Welcome from '../components/welcome';
import {Route} from 'react-router-dom';
import Nav from '../components/nav';
import DisplayMacarons from '../components/our_macarons';
import Contact from '../components/contact';
import GiftAndParties from '../components/gifts_parties';

export default () => {
   return (
   <div className="container">
      <Nav/>
      <Route exact path="/" component={Welcome}/>
      <Route path='/our_macarons' component={DisplayMacarons}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/gifts_parties' component={GiftAndParties}/>
   </div>
   )
}
