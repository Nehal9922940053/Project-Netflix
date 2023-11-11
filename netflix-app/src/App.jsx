import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Netflix from './pages/Netflix'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import UserLikes from './pages/UserLikes'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route exact path='/signup' element={<Signup/>}/>
   <Route exact path='/login' element={<Login/>}/>
   <Route exact path='/player' element={<Player/>}/>
    <Route exact path='/movies' element={<Movies/>}/>
    <Route exact path='/tv' element={<TVShows/>}/>
    <Route exact path='/mylist' element={<UserLikes/>}/>
    <Route exact path='/' element={<Netflix/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App