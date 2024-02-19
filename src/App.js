
import './App.css';
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";

import Menu from './menu/menu';
import Aboutpage from './Aboutpage/Aboutpage';
import Hero from './hero/hero';
import HomePage from './Homepage/Homepage';
import Footer from './footer/footer';
import LoginPage from './loginpage/LoginPage';

function App() {
  return (
    <Router>
      <Menu />
      <Hero />
      <div className='mainContainer'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>

  );

}

export default App;