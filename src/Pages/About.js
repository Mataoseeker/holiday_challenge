import { Link } from "react-router-dom";
import { useState } from "react";

const About = () => {
    const [navbar, setNavbar] = useState(false); 
    return ( 
        <div>
 <div className="">
 <nav className="">
            <Link to="/home" className=" md:text-2xl m-3 mt-8 md:mt-16 float-left font-serif font-bold text-gray-700">Altsch Academy</Link>
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
        
               
            </div><br />
            <div className="about-container">
            <div>
            
                <h5 className="mt-20 md:text-xl text- md:text-center p-6 ">
                    <b className="text-4xl">About Us</b><br />
                    <div className=" md:flex md:justify-start md:w-96 mt-10">
            <img src = {require ('./laptop.jpg')} alt="lady" className=" md:ml-96 ml:10" />
            </div>
            <div className="" >
                <i className="">"Education is the most powerful weapon which you can use to change the world."</i><br />  
                We discovered when running a program that some of the software engineers <br />
                 who had passed through our screening process had a very poor comprehension of <br />
                 the fundamentals of software engineering.<br />

                Many of them had learned things on their own, and while they had developed good<br /> 
                technical abilities, some fundamental understanding was still lacking.<br />



                Therefore, we made the decision to simplify matters by building a school that is<br />
                 just partially a school. an option to going to school. In less than a year, you may <br />
                 learn and become certified in a wide range of subjects here, giving you a solid foundation<br />
                  and the jumpstart you need to pursue your ideal IT job.<br />
                  Our goal is to support you as you begin the profession you desire.<br />
                   We will provide you with the knowledge and abilities to achieve <br />
                   the success you want, whether you are just out of high school, <br />
                   looking for more education, or want to switch to a profession in technology.
                   </div>
                </h5>
                </div>
                <footer>
                    <h4 className="text-center md:text-xl mt-20">  &copy; Martha <span className='text-blue-600'>Ochuko</span> Osika || Altschool <span className='text-blue-600'>React + Tailwindcss</span> Examination (Holiday Challenge Modifications)</h4>
        </footer>
        </div>
        </div>
        );
}
 
export default About;