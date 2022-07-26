import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Devcard from './Devcard';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Search from './Search';
import Admin from './Admin';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar /> <br/>
        <Devcard />
    </div>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/search' element={<Search/>}></Route>
      <Route exact path='/admin' element={<Admin/>}></Route>
    </Routes>
    </Router>
    
  );
}

export default App;
