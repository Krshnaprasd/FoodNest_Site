import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './HomePage.jsx'
import Product from './Product.jsx'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
