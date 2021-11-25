import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome';
import Whiteboard from './components/Whiteboard';

function App() {
  return (
    <Router>
      <div className='flex items-center justify-center w-screen h-screen'>
        <div className='w-5/6 h-5/6'>
          <Switch>

            <Route exact path ='/'>
              <Welcome />
            </Route>

            <Route path ='/whiteboard'>
              <Whiteboard />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
