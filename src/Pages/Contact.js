import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
const Contact = () => {
  
  
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
            <nav className="nav-link">
                <Link to="/" className="md:text-2xl m-3 mt-8 float-left">Altsch Academy</Link>
                <Link to="/login" className="md:text-xl float-right m-3 mt-8">Login</Link>  
                <Link to="/register" className="md:text-xl float-right m-3 mt-8">Register</Link>  
                <Link to="/about" className="md:text-xl float-right m-3 mt-8">About</Link>
                <Link to="/" className="md:text-xl float-right m-3 mt-8">Home</Link>         
            </nav>
            </div> <br />
            <div className="flex justify-center items-center mt-16  w-screen">
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