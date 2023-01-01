import { Link } from 'react-router-dom';
const Home = () => {

    

    return ( 
        <div>
            <div>      
            <nav className="" id="menu">
            <Link to="/home" className=" md:text-2xl m-3 mt-8 float-left">Altsch Academy</Link> 
            <Link to="/login" className=" md:text-xl float-right m-3 mt-8">Login</Link>
            <Link to="/register" className=" md:text-xl float-right m-3 mt-8">Register</Link>
            <Link to="/contact" className=" md:text-xl float-right m-3 mt-8">Contact</Link>  
            <Link to="/about" className=" md:text-xl float-right m-3 mt-8">About</Link>          
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