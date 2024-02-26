import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './Pages/Home';
import Project from './Pages/Project';
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='project' element={<Project />}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='shop' element={<Shop />}/>
          <Route path='contact' element={<Contact />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
