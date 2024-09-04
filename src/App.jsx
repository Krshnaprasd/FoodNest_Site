import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './HomePage.jsx'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
