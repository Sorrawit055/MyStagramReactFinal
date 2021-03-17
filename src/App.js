
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPhoto from "./pages/SearchPhoto";
import ProfileUser from "./pages/ProfileUser";

function App() {
  return (
    <div className="App">
     
 <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={SearchPhoto}/>
            <Route path="/ProfileUser/:username" component={ProfileUser}/> 
          </Switch>
        </Router>
        </div>
    </div>//ลิงค์หน้าจาก username
  );
}
export default App;