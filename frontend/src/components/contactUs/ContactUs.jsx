
// const handleSubmit = (e) =>{
//     e.preventDefault();

import { useState } from "react";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Nav";
import axios from "axios";
import Swal from "sweetalert2";

// }
export default function ContactUs() {

    const [formdata , setFormdata] = useState({
        name: "",
        email: "" , 
        message: ""
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/api/student/contactUs' , formdata)
        .then((res) => {
            console.log(res)
            Swal.fire({
                title: "Success",
                text: "Thanks For Contacting",
                icon: "success"
              });
        })
        .catch((err) => {
            console.log(err)
            Swal.fire({
                title: "Failed",
                text: "Something went wrong",
                icon: "error"
              });
        })
    }

  return (
    <>
    <Nav/>
         <section className="min-h-screen bg-gradient-to-r from-[#bbb7b7] via-[#000000] to-[#c19447] dark:from-[#272727] dark:via-[#4b4b4b] dark:to-[#6d6761] ">
    <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl text-[#DC8733]">Get a quote</h1>

                <p className="max-w-xl mt-6">Ask us everything and we would love to hear from you</p>

                <div className="mt-6 space-y-8 md:mt-8">
                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <span className="mx-2 text-white truncate w-72">
                        P.O, Vazhichal, Kudappanamoodu, Kerala 695505
                        </span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>

                        <span className="mx-2 text-white truncate w-72">(0471) 224 8416</span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>

                        <span className="mx-2 text-white truncate w-72">departmentofcs@emc.com</span>
                    </p>
                </div>

                
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-[#222222] lg:max-w-xl">
                    <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>

                    <form className="mt-4">
                        <div className="flex-1">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                            <input 
                            onChange={(e) => {setFormdata({...formdata , name: e.target.value})}}
                            type="text" placeholder="Devloper" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#222222] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

        
              <div className="flex-1 mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input
                            onChange={(e) => {setFormdata({...formdata , email: e.target.value})}}
                            type="email" placeholder="Devloper@dev.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#222222] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="w-full mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea 
                            onChange={(e) => {setFormdata({...formdata , message: e.target.value})}}
                            className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-[#222222] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
        
             </div>

                        <button
                        onClick={handleSubmit}
                        className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#DC8733] rounded-md hover:bg-[#dc8833c0] ">
                            get in touch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
    <Footer/>
    </>
  )
}