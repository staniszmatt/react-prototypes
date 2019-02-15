import React from 'react';
import {Link} from 'react-router-dom';
/**
 * 
 *@param props - an empty object but needed for router to work. 
 */
export default (props) => {
   return (
      <ul className="nav nav-tabs mt-3">
         <li className="nav-item">
            <Link to="/" className="nav-link" >Welcome!</Link>
         </li>
         <li className="nav-item">
            <Link to="/our_macarons" className="nav-link" >Macarons!</Link>
         </li>
         <li className="nav-item">
            <Link to="/contact" className="nav-link" >Contact Me!</Link>
         </li>

         <li className="nav-item">
            <Link to="/gifts_parties" className="nav-link" >Gift and Parties!</Link>
         </li>

      </ul>
   )
}