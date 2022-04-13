import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Home/Services/Services';
import Experience from './Pages/Home/Experience/Experience';
import EducationSkills from './Pages/Home/EducationSkills/EducationSkills';
import Family from './Pages/Home/Family/Family';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/experience' element={<Experience></Experience>}></Route>
        <Route path='/education-skills' element={<EducationSkills></EducationSkills>}></Route>
        <Route path='/family' element={<Family></Family>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
