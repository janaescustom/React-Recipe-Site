import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar/Navbar';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Meal from './pages/Meal/Meal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    
     <Navbar />
     <Routes>

     <Route path="/" exact element={<Home />} />
     <Route path="/categories/:category" element={<Categories />} />
     <Route path="/results" element={<Results />} />
     <Route path="/results/:listedIngredient" element={<Results />} />
     <Route path="/recipe/:id" element={<Meal />} />
     </Routes>

     <Footer />
      
    
    </Router>
  );
}

export default App;
