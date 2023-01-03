import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState } from "react";
const Contact = () => {
    const [navbar, setNavbar] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
    return ( 
        <div>
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
             
            <Link to="/login" className=" md:text-xl text-gray-700 md:float-right m-3 mt-8 justify-end block">Login</Link>
            <Link to="/register" className=" md:text-xl md:float-right block text-gray-700 m-3 mt-8">Register</Link>
            <Link to="/contact" className=" md:text-xl block md:float-right text-gray-700 m-3 mt-8">Contact</Link>  
            <Link to="/about" className=" md:text-xl block md:float-right text-gray-700 m-3 mt-8">About</Link>   
            </div>       
            </nav>
            </div> <br />
            <div className="flex justify-center items-center mt-16 p-6 w-screen">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 mt-4 md:ml-10 rounded-2xl p-6 md:p-8">
                    <div className="">
                <h3 className="text-4xl text-center font-serif">Contact Us</h3>
          <input placeholder="Enter your Full Name" className="border-2 w-full p-2 mt-5 rounded-lg mb-6 "
            {...register("fullname", { required: true })}
            aria-invalid={errors.fullname ? "true" : "false"}
          />
          {errors.fullname?.type === "required" && (
            <p>Full Name is required</p>
          )}
                  
          <input type="email"placeholder="Enter your Email Address" className="border-2 w-full p-2 rounded-lg mb-6 "
            {...register("email", { required: true })}
            aria-invalid={errors.fullname ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p>Email Address is required</p>
          )}

                    <textarea placeholder="Enter your Message"  className="border-2 w-full h-40 p-2 rounded-lg mb-6 "
                    {...register("message", { required: true })}
                    aria-invalid={errors.message ? "true" : "false"}
                    />
                    <button type="submit" className="bg-blue-800 w-full rounded-lg p-2 text-white">Send</button>
                    </div>
                </form>
            
            </div>
            <footer>
                   <h4 className="text-center md:text-xl mt-20">  &copy; Martha <span className='text-blue-600'>Ochuko</span> Osika || Altschool <span className='text-blue-600'>React + Tailwindcss</span> Examination (Holiday Challenge Modifications)</h4>
                </footer>

        </div>
     );
}
 
export default Contact;