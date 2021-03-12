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
      <Router>
          <Switch>
              <Route exact path="/" component = {Tetris}></Route>
              <Route exact path="/scores" component = {ScoresBoard}></Route>
              <Route path="/" render={() => <div>404 NOT FOUND :)</div>} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
