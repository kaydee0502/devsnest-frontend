import {Component} from 'react'
// import ChessBoard from "./chessBoard/ChessBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MemeCard from "./memeCard/memeCard";
// import Day17 from "./components/day17";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/day16">
          <MemeCard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;