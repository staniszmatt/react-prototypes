import React, {Component} from 'react';
import ContactList from '../components/contact_list';
import ContactForm from '../components/contact_form';
import contactData from '../data/contacts';

/**
 * 
 * @class App
 * @extends Component ()
 */
class App extends Component {
   /**
    * Creates an instance of App.
    * @param  {Object} props - TODO: Find out where this comes form!
    * @memberof App
    */
   constructor(props){
      super(props);
      this.state = {
         contacts: contactData
      }
      this.addContact = this.addContact.bind(this)
   }

   /**
    * 
    * @param  {Object} contact - TODO: figure out where this is coming from
    * @return {void}@memberof App
    */
   addContact(contact){
      console.log("app addContact argument,", contact);
      this.setState({
         contacts: [...this.state.contacts, contact]
      })
   }

   /**
    * 
    * @param  {Object} props TODO: Find out where this comes from!
    * @return 
    * @memberof App
    */
   render(props){
      return (
         <div className="container">
            <h1 className="text-center">
               Address Book
            </h1>
            <div className="row">
            <div className="col-4">
               <ContactForm add={this.addContact} />
            </div>
               <ContactList contacts={this.state.contacts} />
            </div>
         </div>
      );
   }
}
   

export default App;


