import {Component} from 'react'
// import ChessBoard from "./chessBoard/ChessBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MemeCard from "./memeCard/memeCard";
import Header from './CalC/Header';
import CalorieCounter from "./CalC/CalC"
import CalorieCounterAdv from "./CalCAdv/CalC"
import D19 from "./Day19/D19";
// import Day17 from "./components/day17";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/day16">
          <MemeCard />
        </Route>
        <Route exact path="/day17">
          <Header />
          <CalorieCounter />
        </Route>
        <Route exact path="/day18">
          <Header />
          <CalorieCounterAdv />
        </Route>
        <Route exact path="/day19">
          <D19 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;