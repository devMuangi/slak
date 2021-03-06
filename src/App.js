import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch ] = useStateValue();

  return (
    <div className="app">
    {/* Header component */}
    <Router>
      {!user ? (
        <Login />
      ): 
      (
        <>
        <Header/>
        <div className="app__body">
            {/* sidebar */}
            <Sidebar/> 
            <Switch>
              <Route path="/room/:roomId">
                <Chat/> 
              </Route>
              <Route path="/">
                <h1>Home welcome</h1>
              </Route>
    
            </Switch>
        {/* react-router for chat screen */}
        </div>
        </>
      )}
    </Router>
    </div>
  );
}

export default App;
