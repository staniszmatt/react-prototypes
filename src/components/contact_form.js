import React, {Component} from 'react';

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
            lastName: ""
         }
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
    * @param {Object} event - The object submitted from the form fields when the submit button is activated
    */
   handleSubmit(event){
      event.preventDefault();
      console.log("Submit Event ", event)
      console.log(this.state.form);
   }
   render(){
      const {firstName, lastName} = this.state.form;

      return (
      <form onSubmit={this.handleSubmit} action="">
         <div className="form-group">
            <div>
               <label>First Name</label>
               <input onChange={this.handleInputChange} value={firstName} name="firstName" type="text" className="form-control"/>
            </div>
            <div>
               <label>Last Name</label>
               <input onChange={this.handleInputChange} value={lastName} name="lastName" type="text" className="form-control"/>
            </div>
         </div>
         <button>Add Contact</button>
      </form>

      )
   }
}

export default ContactForm;