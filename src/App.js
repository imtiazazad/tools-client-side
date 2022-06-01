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
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyPurchase from './Pages/Dashboard/MyPurchase';
import MyReview from './Pages/Dashboard/MyReview';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/Shared/NotFound';


function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="portfolio" element={<MyPortfolio/>} />
        <Route path="products" element={<Products />} />
        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        } />
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        } > 
        <Route index element={<MyPurchase/>}></Route>
        <Route path='review' element={<MyReview/>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
