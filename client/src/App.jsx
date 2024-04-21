import React from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost, Login, SignUp } from './pages';
import Header from './components/Header';
import Footer from "./components/Footer"
import Aboutus from "./pages/Aboutus"
import Contactus from './pages/Contactus';






const App = () => (




  <BrowserRouter>
    <Header />
    {/* <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-40 object-contain rounded-lg" />
      </Link>
      <div className=" justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#e6ebf4]">
        {
          localStorage.getItem("token") ? (
            <div className=''>
              <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 mr-2 rounded-md">Create</Link>
              <button onClick={handleChange} className="font-inter font-medium bg-[#6469ff] text-white px-3 py-2 rounded-md" >Logout</button>
            </div>



          ) : (
            <Link to="/login" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Login</Link>

          )
        }
        &nbsp; &nbsp;
      </div>
    </header> */}

    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] bg-sky-200 min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />




      </Routes>
    </main>
    <Footer />

  </BrowserRouter>
);

export default App;
