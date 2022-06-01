//import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar';
import Home from './Home';

//self closing, so that Navbar thing displays the entire navbar.js file, cool
function App() {

  return (
    <div className="App">
      <Navbar/>
     
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
