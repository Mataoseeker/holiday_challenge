import React from 'react';
import { useUserContext } from "../Context/UserContext";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const DashBoard = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useUserContext();
    return ( 
        <div>
            <>
            <div className="">
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
                <Link to="/account" className="md:text-xl md:float-right text-gray-700 m-3 mt-8">My Account</Link>  
                <Link to="/" className="md:text-xl md:float-right text-gray-700 block m-3 mt-8">Home</Link>
                <Link to="/login" className='md:text-xl md:float-right text-gray-700 block m-3 mt-8'>Welcome, <span className='text-blue-500 text-lg'>{user.name}</span></Link>   
                 </div> 
            </nav>
           
            </div>
            </>

        <div className=''>
        <div className="">
            <br />
            <div className="ml-36 md:ml-64">
                <img src={require("./avatar5.jpg")} alt="avatar" className='rounded-full w-20 md:w-28 mt-20 md:ml-96'/>
            </div>
        <div className="mt-18 text-center p-6 text-xl md:text-4xl">
            <h1 className='mt-10'>Welcome to <span style={{color:"rgb(94, 94, 245)"}}>Altsch</span> Academy</h1>
            <h3>Discover the in-demand abilities you'll need to go from a beginner <br />
            to industry-ready in just a year. You don't need a degree or previous  <br />
            technical knowledge to begin.</h3>
        </div>
        
            
        </div>     
        </div>
        <footer>
                    <h4 className="text-center md:text-xl mt-48">  &copy; Martha <span className='text-blue-600'>Ochuko</span> Osika || Altschool <span className='text-blue-600'>React + Tailwindcss</span> Examination (Holiday Challenge Modifications)</h4>
        </footer>
        </div>
     );
}
 
export default DashBoard;