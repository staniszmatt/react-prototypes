import React from 'react';
import {NavLink} from 'react-router-dom';
/**
 * 
 *@param props - an empty object but needed for router to work. 
 */
export default (props) => {
   return (
      <ul className="nav nav-tabs mt-3">
         <li className="nav-item">
            <NavLink exact to="/" className="nav-link" >Welcome!</NavLink>
         </li>
         <li className="nav-item">
            <NavLink to="/our_macarons" className="nav-link" >Macarons!</NavLink>
         </li>
         <li className="nav-item">
            <NavLink to="/contact" className="nav-link" >Contact Me!</NavLink>
         </li>

         <li className="nav-item">
            <NavLink to="/gifts_parties" className="nav-link" >Gift and Parties!</NavLink>
         </li>

      </ul>
   )
}