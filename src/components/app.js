import React from 'react';
import Table from '../components/table';

const students = [
   {
      student: "Matt",
      course: "JS",
      grade: 80
   },
   {
      student: "Naomi",
      course: "Law",
      grade: 90
   },
   {
      student: "Izzy",
      course: "Elm",
      grade: 95
   }
]
function App(){
   return(
      <div className="container">
         <h1>Student Grade Table</h1>
         <Table data={students} />
      </div>
   );
}

export default App;