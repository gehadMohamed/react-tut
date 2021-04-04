
import Turtle from './Turtle/Turtle.js';
import { Component } from 'react';
import './App.css';

// function App() {

  class App extends Component {
    // state change trigger re-render
    state = {
      turtles: [
        {name: "Leonardo",color: "blue" ,power:90, desc: "The leader"},
        {name: "raphael",color: "red" ,power:120, desc: "Hot head"}
      ],
      title: "TMNT"
    };
  
    switchNameHandler = (newName) => {
  // DON'T DO THAT (this.state.persons[0].name = "Nuha")    
  //  notice warning in console, you need to use setState
      
          this.setState({
            turtles: [
              {name: "LEO!!",color: "blue" ,power:90, desc: "The leader"},
              {name: "raphael",color: "red" ,power:120, desc: "Hot head"}
            ]            
        });
    }
  
    render() {
      return (
        <div className="App">
          <h1>{this.state.title}</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Turtle name={this.state.turtles[0].name} color="blue" power="90">The leader</Turtle>
          <Turtle name="raphael" color="red" power="120">Hot head</Turtle>
        </div>
      );
    }
  }
export default App;


