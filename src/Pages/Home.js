import { Link } from 'react-router-dom';
import { useState } from "react";
const Home = () => {

    const [navbar, setNavbar] = useState(false); 

    return ( 
        <div>
            <div>      
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
             
            <Link to="/login" className=" md:text-xl text-gray-700 md:float-right m-3 mt-8 justify-end block">Login</Link>
            <Link to="/register" className=" md:text-xl md:float-right block text-gray-700 m-3 mt-8">Register</Link>
            <Link to="/contact" className=" md:text-xl block md:float-right text-gray-700 m-3 mt-8">Contact</Link>  
            <Link to="/about" className=" md:text-xl block md:float-right text-gray-700 m-3 mt-8">About</Link>   
            </div>       
            </nav>
            </div>
            <div>
                <br />
                <div className='bg-blue-500 p-2 mt-20 text-white text-center'>
        <p>Application to the School of Engineering and School of data is now open! &nbsp;
        <Link to="/register" className='underline'>here</Link>
        </p>
                </div>
               
                <div className='md:text-6xl text-4xl text-center mt-16 font-sans'>
                 
                    <h1>Start a career in <span className='text-blue-600'>Software Engineering</span> today</h1>
                </div>
                <div className='text-center md:text-4xl mt-14'>
                    <p>Learn the in-demand skills required to take you from beginner <br />
                    to industry ready in 12 months. No degree <br />or prior tech experience required.</p>
                </div>
                <div >
                <button className='md:ml-96 ml-8 text-center bg-gray-700 text-white md:text-xl border rounded-full mt-10 p-3' >Learn in-demand tech skills for just N999 a day</button>
                </div>
                <footer>
                   <h4 className="text-center md:text-xl mt-20">  &copy; Martha <span className='text-blue-600'>Ochuko</span> Osika || Altschool <span className='text-blue-600'>React + Tailwindcss</span> Examination (Holiday Challenge Modifications)</h4>
                </footer>

            </div>
        </div>
     );
}
 
export default Home;