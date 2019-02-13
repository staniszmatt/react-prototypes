import React, {Component} from 'react';
import Field from '../components/field';

class ContactForm extends Component {
   /**
    * 
    * @param {Object} props TODO: TBD
    */

   constructor(props){
      super(props);
      this.state = {
         form: {
            firstName: "",
            lastName: "",
            phone: "",
            email: ""
         }
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.reset = this.reset.bind(this);
   }
   /**
    * @param {Object} event - Event from typing into the input fields for first and last name
    */

   handleInputChange(event){
      const {value, name} = event.target; //Deconstruct value and name to grab what input and text is typed
      const {form} = this.state;          //Grabbing a copy of the form object from state
      form[name] = value;                 //Collecting the information dynamically and saving it to the form var
      this.setState({                        //Use change state to save the changes to the form fields. 
         form: {...form}                  //{...from} saves the entire copy of the form object into the state change
      });
     

   }
   
   /**
    * @param {Object} event - The event for each change done to each form field
    */
   handleSubmit(event){
      event.preventDefault();
      this.props.add(this.state.form)
      this.reset();
   }
   reset(){
      this.setState({
         form: {
            firstName: "",
            lastName: "",
            phone: "",
            email: ""
         }
      })
   }
   render(){
      const {firstName, lastName, phone, email} = this.state.form;
     
      return (
      <form onSubmit={this.handleSubmit}>
         <Field onChange={this.handleInputChange} name="firstName" label="First Name" type="text" value={firstName}/>
         <Field onChange={this.handleInputChange} name="lastName" label="Last Name" type="text" value={lastName}/>
         <Field onChange={this.handleInputChange} name="phone" label="Phone" type="text" value={phone}/>
         <Field onChange={this.handleInputChange} name="email" label="Email" type="text" value={email}/>
         <button>Add Contact</button>
         <button type="button" onClick={this.reset} >Clear Form</button>
      </form>

      )
   }
}

export default ContactForm;