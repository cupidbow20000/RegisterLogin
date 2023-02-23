import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './pages/Layout';

import Login from './Users/Login';
import Register from './Users/Register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
       <Routes>
          <Route path="/" element={<Login/>} >
            <Route path="home" element={<Home name="japan" />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
