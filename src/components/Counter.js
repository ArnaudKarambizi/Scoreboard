import React  from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Counter= ({index,score,changeScore}) => {
  
 
     
//    incrementScore=() =>{ this.setState(prevState => ({
//    score:prevState.score +1}));}
   
//    decrementScore=() =>{ this.setState(prevState =>({
//    score: prevState.score -1} ));}
   

   return(
   
    <div className="counter">

    <button className="counter-action decrement" onClick={() =>{changeScore(index,-1)}} >-</button>

    <span className="counter-score"> {score}</span>

    <button className="counter-action increment on" onClick={() =>{changeScore(index,+1)}} >+</button>
    
     </div>
   
   );
   
   }

   Counter.propTypes={
    index:PropTypes.number,
    score:PropTypes.number,
    changeScore:PropTypes.func
  } 
 

export default Counter ;