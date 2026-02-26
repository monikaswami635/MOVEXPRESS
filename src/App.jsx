import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
// import Navbar from './components/Navbar';
import Aboutpage from './pages/Aboutpage';
import Blogpage from './pages/Blogpage';
import Contactpage from './pages/Contactpage';
import Servicedetailpage from './pages/Servicedetailpage';
import Servicespage from './pages/Servicespage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutpage />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/servicedetails" element={<Servicedetailpage />} />
        <Route path="/blogs" element={<Blogpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
