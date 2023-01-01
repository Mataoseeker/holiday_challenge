import React from 'react';
import { useUserContext } from "../Context/UserContext";
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const { user, logOut } = useUserContext();
    return ( 
        <div>
            <>
            <div className="">
            <nav className="nav-link">
                <Link to="/" className="md:text-2xl m-3 mt-8 float-left">Altsch Academy</Link> 
                {!user.isGuestUser && (<button className='md:text-lg float-right m-3 mt-6 border border-blue-800 rounded-lg p-2' onClick={logOut}>Logout</button> )} 
                <Link to="/account" className="md:text-xl float-right m-3 mt-8">My Account</Link>  
                <Link to="/" className="md:text-xl float-right m-3 mt-8">Home</Link> 
                <Link to="/login" className='md:text-xl float-right m-3 mt-8'>Welcome, <span className='text-blue-500 text-lg uppercase'>{user.name}</span></Link>   
                  
            </nav>
           
            </div>
            </>

        <div className=''>
        <div className="">
            <br />
            <div className="ml-36 md:ml-64">
                <img src={require("./avatar5.jpg")} alt="avatar" className='rounded-full w-20 md:w-28 mt-20 md:ml-96'/>
            </div>
        <div className="mt-18 text-center text-xl md:text-4xl">
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