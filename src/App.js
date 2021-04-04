import logo from './logo.svg';
import './App.css';
import Turtle from './Turtle/Turtle';

function App() {
  return (
    <div className="App">
      <Turtle name="Leonardo" color="blue" power="90">The leader</Turtle>
      <Turtle name="raphael" color="red" power="120">Hot head</Turtle>
    </div>
  );
}

export default App;
