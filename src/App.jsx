import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';


import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';


function App() {
  return (
    <Router>
      <div className='app-wrapper'>
        <Navbar/>

        <Routes>
          <Route path="/beautiful-nightmares" element={<Home/>} />
          <Route path="/About" element={<About/>} />
        </Routes>

        <Footer/>
      </div>
    </Router>

  );
}

export default App;
