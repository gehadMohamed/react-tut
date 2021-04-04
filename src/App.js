
import Turtle from './Turtle/Turtle.js';
import { useState } from 'react';
import './App.css';


function App() {
  const [turtlesState, setTurtles] = useState(
    {
      turtles: [
        {name: "Leonardo",color: "blue" ,power:90, desc: "The leader"},
        {name: "raphael",color: "red" ,power:120, desc: "Hot head"}
      ],
      title: "TMNT"
    }
  );

  const switchNameHandler = () => {
    // DON'T DO THAT (this.state.persons[0].name = "Nuha")    
    //  notice warning in console, you need to use setState
        
        setTurtles({
            turtles: [
              {name: "LEO!!",color: "blue" ,power:90, desc: "The leader"},
              {name: "raphael",color: "red" ,power:120, desc: "Hot head"}
            ]            
        });
      }

    return (
      <div className="App">
        <h1>{turtlesState.title}</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Turtle name= {turtlesState.turtles[0].name} color="blue" power="90">The leader</Turtle>
        <Turtle name="raphael" color="red" power="120">Hot head</Turtle>
      </div>
  );
}


export default App;


