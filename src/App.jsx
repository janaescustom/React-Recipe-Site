import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar/Navbar';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    
     <Navbar />
     <Routes>

     <Route path="/" element={<Home />} />
     <Route path='/categories' element={<Categories />} />
     <Route path="/results" element={<Results />} />
     </Routes>

     <Footer />
      
    
    </Router>
  );
}

export default App;
