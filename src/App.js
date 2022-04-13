import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Projects from './Pages/Home/Projects/Projects';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Projects' element={<Projects></Projects>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
