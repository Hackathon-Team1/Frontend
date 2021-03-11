import logo from './logo.svg';
import './App.css';
import Tetris from './components/Tetris'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import ScoresBoard from './components/ScoresBoard/ScoresBoard';


function App() {
  return (
    <div className="App">
      <Tetris/>

      <Router>
          <Switch>
              <Route exact path="/scores" component = {ScoresBoard}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
