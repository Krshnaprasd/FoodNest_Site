import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './HomePage.jsx'
import Product from './Product.jsx'
import Menu from './Menu.jsx'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
