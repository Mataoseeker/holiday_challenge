    import { useForm } from "react-hook-form";
    import { useNavigate } from "react-router-dom";
    import { Link } from "react-router-dom";
    import { useUserContext } from "../Context/UserContext";


    const Register = () => {
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
                    <Link to="/" className="md:text-2xl m-3 mt-8 float-left">Altsch Academy</Link>      
                    <Link to="/login" className='md:text-xl float-right m-3 mt-8'>Welcome, <span>{user.name}</span></Link>       
                    <Link to="/contact" className="md:text-xl float-right m-3 mt-8">Contact</Link>  
                    <Link to="/about" className="md:text-xl float-right m-3 mt-8">About</Link> 
                    <Link to="/" className="md:text-xl float-right m-3 mt-8">Home</Link> 
                
                </nav>
        </div><br />
        <div className="">
        {/* <div className="md:col-span-1 md:flex md:justify-start w-96 mt-10">
            <img src = {require ('./img.jpg')} alt="lady" className="" />
            </div> */}
        <div className="">

        <div className="flex justify-center items-center mt-20  w-screen">

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
