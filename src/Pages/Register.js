    import { useForm } from "react-hook-form";
    import { useNavigate } from "react-router-dom";
    import { Link } from "react-router-dom";
    import { useUserContext } from "../Context/UserContext";
    import { useState } from "react";

    const Register = () => {
        const [navbar, setNavbar] = useState(false);
    const { user } = useUserContext();
        let navigate = useNavigate();
    const {
        register,
        formState: { errors },
        watch,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
    navigate('/login')
    alert("You have successfully registered, Click Ok to login to your account");
        console.log(data);
    };
    return (
        <div className="">
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
        </div><br />
        <div className="">
        <div className="">
        <div className="flex justify-center items-center mt-20 p-6 w-screen">

            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 mt-4 md:ml-10 rounded-2xl p-6 md:p-8">
                <h3 className="text-4xl text-center font-serif">Register</h3>
            <div className="mt-10 block">
            <input placeholder="Enter your Full Name" className="border-2 w-full p-2 rounded-lg mb-6 "
                {...register("fullname", { required: true })}
                aria-invalid={errors.fullname ? "true" : "false"}
            />
            {errors.fullname?.type === "required" && (
                <p>Full Name is required</p>
            )}
            <input placeholder="Enter your Username" className="border-2 w-full p-2 mb-6 rounded-lg "
                {...register("username", { required: true })}
                aria-invalid={errors.username ? "true" : "false"}
            />
            {errors.username?.type === "required" && (
                <p>Username is required</p>
            )}
            <input
                type="password" placeholder="Enter your Password" className="border-2 w-full p-2 mb-6 rounded-lg "
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password?.type === "required" && (
                <p>Password is required</p>
            )}
            <input type="password" placeholder="Confirm your Password" className="border-2 mb-6 w-full p-2 rounded-lg "
                {...register("confirmPassword", {
                required: true,
                validate: (value) => {
                    if (watch("password") !== value) {
                    return "Password do not match" 
                    }
                },
                })}
            />
            {errors.confirmPassword?.type === "password" && (
                <p>Password do not match</p>
            )}
            </div>
            <button type="submit" className="bg-blue-800 w-full rounded-lg p-2 text-white">Register</button>
            <p className='mt-6 text-center'>Already have an account?  
                <Link to="/login" className='ml-3 underline text-blue-600 hover:no-underline'>Login</Link></p>
            </form>
            </div>
        </div>
        </div>
        <footer>
                    <h4 className="text-center md:text-xl mt-20">  &copy; Martha <span className='text-blue-600'>Ochuko</span> Osika || Altschool <span className='text-blue-600'>React + Tailwindcss</span> Examination (Holiday Challenge Modifications)</h4>
        </footer>
        </div>
    );
    };

    export default Register;
