import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import Purchase from './Pages/Products/Purchase';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="products" element={<Products/>} />
        <Route path='purchase' element={<Purchase/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
        
      </Routes>
    </div>
  );
}

export default App;
