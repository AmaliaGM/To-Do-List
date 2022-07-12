import _ from 'lodash';
import './style.css';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

   return element;
 }
 
 let listElement = document.getElementsByTagName('li');
 for(let i = 0; i < listElement.length; i++) {
    const 
 }

 document.body.appendChild(component());
