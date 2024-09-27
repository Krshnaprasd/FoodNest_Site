import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './HomePage.jsx'
import Product from './Product.jsx'
import Menu from './Menu.jsx'
import Review from './Review.jsx'
import Contact from './Contact.jsx'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
