import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Search from './Search';
import Admin from './Admin';
import Profile from './Profile';
import Devs from './Devs';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar /><br/>
    </div>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/search' element={<Search/>}></Route>
      <Route exact path='/admin' element={<Admin/>}></Route>
      <Route exact path='/devs' element={<Devs/>}></Route>
      <Route exact path='/profile' element={<Profile/>}></Route>
    </Routes>
    </Router>
    
  );
}

export default App;
