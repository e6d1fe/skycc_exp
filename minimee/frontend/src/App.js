// import RestAPI from "./RestAPI.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Routes/Home";
import CalendarPage from "./Routes/CalendarPage.js";
import Diary from "./Routes/Diary.js";
import ToDo from "./Routes/ToDo.js";
import QnA from "./Routes/QnA.js";

// <RestAPI />

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/diary">
          <Diary />
        </Route>
        <Route path="/calendar">
          <CalendarPage />
        </Route>
        <Route path="/todo">
          <ToDo />
        </Route>
        <Route path="/qna">
          <QnA />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
