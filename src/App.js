
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

  const [displayState, setDisplay] = useState(true);

  const toggelDisplayHandler = () => {
    setDisplay(!displayState);
  }


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

    const changeNameHandler = (event) => {
      setTurtles({
        turtles: [
          {name: event.target.value ,color: "blue" ,power:90, desc: "The leader"},
          {name: "raphael",color: "red" ,power:120, desc: "Hot head"}
        ]            
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
            turtlesState.turtles.map((turtle,index) => {
              return <Turtle 
                name= {turtle.name} 
                color={turtle.color}
                power={turtle.power}
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


