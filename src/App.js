
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
      title: ""
    }
  );

  const switchNameHandler = (name) => {
    // DON'T DO THAT (this.state.persons[0].name = "Nuha")    
    //  notice warning in console, you need to use setState
        const leoNickName = typeof name == 'string'? name : "LEO!!";    

        setTurtles({
            turtles: [
              {name: leoNickName ,color: "blue" ,power:90, desc: "The leader"},
              {name: "raphael",color: "red" ,power:120, desc: "Hot head"}
            ]            
        });
      }

    return (
      <div className="App">
        <h1>TMNT</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Turtle name= {turtlesState.turtles[0].name} color="blue" power="90" click={switchNameHandler.bind(this,'LeoN')}>The leader</Turtle>
        <Turtle name="raphael" color="red" power="120">Hot head</Turtle>
      </div>
  );
}


export default App;


