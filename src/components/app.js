"use strict"
import React from 'react';
import ContactList from '../components/contact_list';
import ContactForm from '../components/contact_form';

function App (){
   return (
      <div className="container">
         <h1 className="text-center">
            Address Book
         </h1>
         <div className="row">
         <div className="col-4">
            <ContactForm/>
         </div>
            <ContactList/>
         </div>
      </div>
   );
}

export default App;


