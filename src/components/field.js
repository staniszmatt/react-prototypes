import React from 'react'

/** 
 * @param {Object} props - Object data from the form fields being submitted by the button - onChange
 * @see ContactForm @function render
*/
export default (props) => {
   return(
      <div className="form-group">
         <label>{props.label}</label>                    {/* Grabs the input label to use */}
         <input {...props} type="text" className="form-control"/> {/* passing in the props key value pairs so the other side still sees it as props:{key value pairs} */}
      </div>
   )
}

