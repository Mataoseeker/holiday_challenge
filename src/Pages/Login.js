import React from 'react';
import { useForm } from "react-hook-form";
import { useUserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

const Login = () => {
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
            <nav className="nav-link">
                <Link to="/" className="md:text-2xl m-3 mt-8 float-left">Altsch Academy</Link>
                <Link to="/login" className='md:text-xl float-right m-3 mt-8'>Welcome, <span>{user.name}</span></Link>  
                <Link to="/contact" className="md:text-xl float-right m-3 mt-8">Contact</Link>  
                <Link to="/about" className="md:text-xl float-right m-3 mt-8">About</Link>  
                <Link to="/" className="md:text-xl float-right m-3 mt-8">Home</Link>
            </nav>
            </div>
                
        </div>   
            <br />
            <div className="flex justify-center items-center mt-36 ">
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