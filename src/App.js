//import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './404';


function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
     
      <div className="content">
        {/* Routes are like Switch from v5 react */}
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/create" element={<Create />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          <Route path="*" element={<NotFound/>}>
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
