import React from 'react';
import { useUserContext } from "../Context/UserContext";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Account = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useUserContext();
    return ( 
        <div className="account">
            <br />
            <nav className="">
            <Link to="/" className=" md:text-2xl m-3 mt-8 md:mt-16 float-left font-serif font-bold text-gray-700">Altsch Academy</Link>

            <div className='md:hidden float-right mt-6'>  
            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg> 
                                     ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                            </button>
             </div>
             <br />
             <div
                        className={`flex-1 justify-self-center font-bold font-serif bg-white p-2 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                {!user.isGuestUser && (<button className='md:text-lg md:float-right m-3 mt-6 border block border-blue-800 rounded-lg p-2' onClick={logOut}>Logout</button> )}   
                <Link to="/" className="md:text-xl md:float-right text-gray-700 block m-3 mt-8">Home</Link>
                <Link to="/login" className='md:text-xl md:float-right text-gray-700 block m-3 mt-8'>Welcome, <span className='text-blue-500 text-lg'>{user.name}</span></Link>   
                 </div> 
            </nav>

        <div className="text-center mt-20 bg-purple-800 p-12 text-white">
            <h1 className="mt-8 text-4xl font-bold">My Account</h1>
            <h3 className="mt-10 text-xl">Welcome to your Altsch Academy, here's your account dashboard</h3>
        </div>
        
            <div className="ml-36 md:ml-64">
                <img src={require("./avatar5.jpg")} alt="avatar" className='rounded-full w-20 md:w-28 mt-10 md:ml-96'/>
            </div>

            <div className="account-info">
                
                <div className="">
                <h3 className='text-center text-2xl md:text-4xl mt-8'>Courses Available</h3>
                <div className='grid md:grid-cols-2 p-6'>
                    <button className="bg-purple-800  rounded-lg p-4 text-white md:ml-4 mt-3">Technical Writing</button>
                    <button className="bg-blue-800  rounded-lg p-4 text-white md:ml-4 mt-3">Open Source Contribution</button>
                    <button className="bg-blue-800  rounded-lg p-4 text-white md:ml-4 mt-3">Web Development</button>
                    <button className="bg-purple-800   rounded-lg p-4 text-white md:ml-4 mt-3">Data Science</button>
                    <button className="bg-blue-800  rounded-lg p-4 text-white md:ml-4 mt-3">Software Engineering</button>
                    <button className="bg-purple-800  rounded-lg p-4 text-white md:ml-4 mt-3">Mobile Development</button>
                    <button className="bg-purple-800  rounded-lg p-4 text-white md:ml-4 mt-3">UI/UX Design</button>
                    <button className="bg-blue-800 rounded-lg p-4 text-white md:ml-4 mt-3">Digital Marketing</button>
                    </div>
                </div>
            </div>
            <footer>
                    <h4 className="text-center md:text-xl mt-20">  &copy; Martha <span className='text-blue-600'>Ochuko</span> Osika || Altschool <span className='text-blue-600'>React + Tailwindcss</span> Examination (Holiday Challenge Modifications)</h4>
        </footer>
        </div>
     );
}
 
export default Account;