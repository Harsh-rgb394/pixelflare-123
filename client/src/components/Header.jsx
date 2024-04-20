import React, { useEffect, useState } from "react";
import { logo } from "../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    const location = useLocation();

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("token"));
    }, [location])



    const handleChange = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        // navigate("/");
    }



    return (
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
            <Link to="/">
                <img src={logo} alt="logo" className="w-40 object-contain rounded-lg" />
            </Link>
            <div className=" justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#e6ebf4]">
                {
                    isLoggedIn ? (
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
        </header>

    )
}

export default Header;