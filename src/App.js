import React from 'react'
import './App.css'
import Headers from './components/Headers'
import Post from './components/Post'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import TinderCards from './components/TinderCards'
import SwipeButton from './components/SwipeButton'

const App = () => {
  return (
    <div>
      
      
      <Router>
      <Headers />
        <Switch>
          <Route path="/post"><Post /></Route>
          <Route path='/'><TinderCards/></Route>
        </Switch>
        <SwipeButton/>

      </Router>
      
      
    </div>
  )
}

export default App
