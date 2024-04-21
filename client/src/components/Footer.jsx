import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {


    return (
        <>
            <footer class="bg-gray-950 text-white py-4">
                <div class="container mx-auto flex justify-center">
                    <Link to="/aboutus" class="mr-4 hover:bg-gray-700 px-4 py-2 rounded transition duration-300">About Us</Link>
                    <Link to="/contactus" class="hover:bg-gray-700 px-4 py-2 rounded transition duration-300">Contact Us</Link>
                </div>
            </footer>

        </>
    )
}


export default Footer;