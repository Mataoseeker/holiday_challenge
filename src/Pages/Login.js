import React from 'react';
import { useForm } from "react-hook-form";
import { useUserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [navbar, setNavbar] = useState(false); 
    const {register, formState: { errors }, handleSubmit} = useForm()
    const { user } = useUserContext();
    const { logIn } = useUserContext(); 
    
   const onSubmit = (data) => {
     console.log("Form data",data)
     logIn(data.username);
   };
   console.log(errors);

    
    
    return ( 
        <div className=""> 
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
                <Link to="/login" className='md:text-xl block md:float-right text-gray-700 m-3 mt-8'>Welcome, <span>{user.name}</span></Link>  
                <Link to="/contact" className=" md:text-xl block md:float-right text-gray-700 m-3 mt-8">Contact</Link>  
                <Link to="/about" className=" md:text-xl block md:float-right text-gray-700 m-3 mt-8">About</Link>     
                <Link to="/" className="md:text-xl md:float-right text-gray-700 block m-3 mt-8">Home</Link>
                </div>
            </nav>
            </div>
                
        </div>   
            <br />
            <div className="flex justify-center items-center mt-20 p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 mt-4 md:ml-10 rounded-2xl p-6 md:p-8">
                <h4 className='text-4xl text-center font-serif'>Login</h4>
                <input placeholder="Enter your Username" className='border-2 w-full mt-6 p-2 rounded-lg mb-6'
                {...register("username", {required: true})} 
                aria-invalid={errors.username? "true":"false"} />
                {errors.username?.type==="required" && <p>Username is required</p>}

                <input type="password" placeholder="Enter your Password" className='border-2 w-full p-2 rounded-lg mb-6'
                 {...register("password", {required: true})}
                aria-invalid={errors.password? "true":"false"} />
                {errors.password?.type==="required" && <p >Password is required</p>}
                <button className="bg-blue-800 w-full rounded-lg p-2 text-white" type="submit">Login</button>

                <p className='mt-6 text-center'>Don't have an account? 
                <Link to="/register" className='ml-3 underline text-blue-600 hover:no-underline'>Sign Up</Link>
                </p>
            
            </form>
            </div>
            <footer>
                   <h4 className="text-center md:text-xl mt-20">  &copy; Martha <span className='text-blue-600'>Ochuko</span> Osika || Altschool <span className='text-blue-600'>React + Tailwindcss</span> Examination (Holiday Challenge Modifications)</h4>
      </footer>
        </div>
     );
}
 
export default Login;