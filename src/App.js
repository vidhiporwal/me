
import "./App.css";
import Sidebar from "./components/Sidebar";
import Twittes from "./components/Twittes";
import Trends from "./components/Trends";
import React, { useState } from 'react';
import SignIn from './components/SignIn';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignIn = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ?  <div><Sidebar /> <Twittes /><Trends /></div> : <SignIn onSignIn={handleSignIn} />}
    </div>
  );
};

export default App;
