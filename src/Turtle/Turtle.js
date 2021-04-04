//not needed anymore 
import React from 'react';


const turtle = (props) => {
    return (
        <div className="turtle" style={{backgroundColor: props.color}}>
            <label onClick={props.click}>{props.children} : </label>
            <h1>{props.name}</h1>
            <p>Power: {props.power}</p>   
      </div> 
    );
}

export default turtle;
