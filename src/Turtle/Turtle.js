//not needed anymore 
import React from 'react';
import './Turtle.css';


const turtle = (props) => {
    return (
        <div className="Turtle" style={{backgroundColor: props.color}}>
            <label onClick={props.click}>{props.children} : </label>
            <h1>{props.name}</h1>
            <p>Power: {props.power}</p>   
            <input type="text" onChange={props.change} value={props.name} />
      </div> 
    );
}

export default turtle;
