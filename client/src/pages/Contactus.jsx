import React, { useEffect, useState } from "react";
import contactus from "./../assets/contactus2.png"
import emailjs from "@emailjs/browser"

const Contactus = () => {
    const [form, setform] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [loading, setloading] = useState(false);

    // service id service_jd60kdx
    // template id template_hprf0ha
    // public key RtsZ20G7XcWp9-nh8

    const handlesubmit = (e) => {
        e.preventDefault();
        // console.log(form);
        setloading(true);

        emailjs.send("service_jd60kdx", "template_hprf0ha",
            {
                from_name: form.name,
                to_name: "Harshvardhan",
                from_email: form.email,
                to_email: "harshitharsha778@gmail.com",
                message: form.message

            }
            ,
            "RtsZ20G7XcWp9-nh8"

        ).then(() => {
            setloading(false)
            alert("Thank you. We will get back to you as soon as possible.")

            setform({
                name: "",
                email: "",
                message: ""
            })
        },

            (error) => {
                setloading(false);
                console.log(error);

                alert("something Went wrong");
            })

    }



    const handlechange = (e) => {
        const { id, value } = e.target;
        setform({ ...form, [id]: value })

    }

    return (
        <>
            <div className="container  px-4 py-8 flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-4">
                    <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                    <form className=" max-w-lg" onSubmit={handlesubmit}>
                        <div className=" mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                First Name
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Abhay" value={form.name} onChange={handlechange} />
                        </div>

                        <div className="mb-4">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Email
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Abhay@example.com" value={form.email} onChange={handlechange} />
                        </div>
                        <div className="mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Message
                            </label>
                            <textarea className="appearance-none block w-full  text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Your message here..." value={form.message} onChange={handlechange}></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Send
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full md:w-1/2">
                    <img className="object-cover w-full h-auto" src={contactus} alt="Contact Us" />
                </div>

            </div>

        </>
    )
}


export default Contactus;