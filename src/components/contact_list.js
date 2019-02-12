"use strict"
import React, {Component} from 'react';
import ContactCard from '../components/contact_card';
import contactData from '../data/contacts';

class ContactList extends Component {

   /**
    * 
    * @param {Object} props - 
    * @function App 
    */
   
   constructor(props){
      super(props);
      this.state = {contacts: contactData}; //TODO: Dummy data instead of props
   }
   render(){
      const list = this.state.contacts.map( (item, index) => {
         return  <ContactCard key={index} contact={item}/>
      });
      return (
         <div className="col-8" >
         <div className="row">{list}</div> 
         </div>
      )
   }
}
export default ContactList;