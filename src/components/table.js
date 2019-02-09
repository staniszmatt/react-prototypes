import React from 'react';

function Table(props){
  
   let tableRows = props.data.map((item, index)=>{
      let {student, course, grade} = item;
      return (
         <tr key={index}>  
            <td>{student}</td>
            <td>{course}</td>
            <td>{grade}</td>
         </tr>
      ); 
   })
   
   return (
      <table className="table">
         <thead className="thead-inverse">
            <tr>
               <th>Name</th>
               <th>Course</th>
               <th>Grade</th>
            </tr>
         </thead>
         <tbody>
         {tableRows}
         </tbody>
      </table>
   )
}

export default Table;