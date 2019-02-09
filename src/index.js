import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

let user = {
   name: "Matt",
   luckyNumber: luckyNumber()
}
ReactDOM.render(
   <App/>, 
   document.getElementById('root')
);

function luckyNumber() {
	return Math.floor(Math.random() * (1000 - 1)) + 1;
}

function greeting(displayInfo) {
   return (
      <div className="container">
         <h1 className="user">Welcome {displayInfo.name}.</h1>
         <h2 className="text-muted">Your lucky number is {displayInfo.luckyNumber}</h2>
      </div>
   )
}

