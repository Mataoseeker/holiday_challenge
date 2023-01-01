import React from 'react';
import { useUserContext } from "../Context/UserContext";
import { Link } from 'react-router-dom';
const Account = () => {
    const { user, logOut } = useUserContext();
    return ( 
        <div className="account">
            <br />
            <nav className="nav-link">
                <Link to="/" className="md:text-2xl m-3 mt-4 float-left">Altsch Academy</Link> 
                {!user.isGuestUser && (<button className='md:text-lg float-right m-3 mt-2 border border-blue-800 rounded-lg p-2' onClick={logOut}>Logout</button> )} 
                <Link to="/account" className="md:text-xl float-right m-3 mt-4">My Account</Link>  
                <Link to="/" className="md:text-xl float-right m-3 mt-4">Home</Link> 
                <Link to="/login" className='md:text-xl float-right m-3 mt-4'>Welcome, <span className='text-blue-500 text-lg uppercase'>{user.name}</span></Link>   
                  
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
                <div className='grid md:grid-cols-2'>
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