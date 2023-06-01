import Login from './components/Login'
import './App.css';
import React from 'react';
import Navigation from './components/Navigation';

import { useSelector } from 'react-redux';

function App() {

  const auth = useSelector(state => state.isAuthenticated)

  return (
    <main>
      <Navigation />
      {!auth &&
        <div >
          <Login />
        </div>
      }
    </main>
  );
}

export default App;
