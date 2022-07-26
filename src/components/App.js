import { BrowserRouter as Router } from 'react-router-dom'
import Devcard from './Devcard';
import Navbar from './Navbar';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar /> <br/>
        <Devcard />
    </div>
    </Router>
    
  );
}

export default App;
