import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'
import './App.css'
import Nav from './Nav.jsx'
import HomePage from './HomePage.jsx'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
