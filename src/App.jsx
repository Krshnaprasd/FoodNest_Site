import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './HomePage.jsx'
import Product from './Product.jsx'
import Menu from './Menu.jsx'
import Book from './Book.jsx'
import Review from './Review.jsx'
import Blog from './Blog.jsx'
import Contact from './Contact.jsx'
import Productlist from './Productlist.jsx';

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/list' element={<Productlist/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
