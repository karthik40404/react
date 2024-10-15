import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
