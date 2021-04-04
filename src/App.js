
import Turtle from './Turtle/Turtle.js';
import { useState } from 'react';
import './App.css';


function App() {
  const [turtlesState, setTurtles] = useState(
    {
      turtles: [
        {id:1, name: "Leonardo",color: "blue" ,power:90, desc: "The leader"},
        {id:2, name: "raphael",color: "red" ,power:120, desc: "Hot head"}
      ]
    }
  );

  const [displayState, setDisplay] = useState(true);

  const toggelDisplayHandler = () => {
    setDisplay(!displayState);
  }


  const changeNameHandler = (event, turtleId) => {
        const turtleIndex = turtlesState.turtles.findIndex(t => t.id === turtleId);
        // spread operator object
        const turtle = {...turtlesState.turtles[turtleIndex]};
    
        // update the name
        turtle.name = event.target.value;
    
        const turtles = [...turtlesState.turtles];
        turtles[turtleIndex] = turtle;

        setTurtles({
          turtles: turtles
        });
  }
      

  const buttonStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor: 'pointer'
  }


  let turtles = null;

  if (displayState) {
      turtles = (
        <div>
          {
            turtlesState.turtles.map((turtle) => {
              return <Turtle 
                name= {turtle.name} 
                color={turtle.color}
                power={turtle.power}
                key={turtle.id}
                change={event => changeNameHandler(event, turtle.id)}
              >
                {turtle.desc}
                </Turtle>
            })
          }
      </div>
    );
  }

    return (
      <div className="App">
        <h1>TMNT</h1>
        <button style={buttonStyle} onClick={toggelDisplayHandler}>Switch Name</button>
        {turtles}
      </div>
  );
}


export default App;


