import React from 'react';
import './App.css';



export function Button(props) {
   
  const itIsOperator = value => { return isNaN(value) && (value != '.') && (value != '='); };
   
  return (
    <div
        className={`container-button ${itIsOperator(props.children) ? 'operator' : ''}`.trimEnd()}
        onClick={() => props.ctrlClick(props.children)} >
        {props.children}
    </div>
  )
};





export const Screen = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);





export const ButtonClear = (props) => (
  <div className='container-button' onClick={props.ctrlClear}>
    { props.children }
  </div>
);







