import { Link } from "react-router-dom";
const About = () => {
    return ( 
        <div>
 <div className="about-navbar">
            <nav className="nav-link">
                <Link to="/" className="nav-heading">Altsch Academy</Link>
                <Link to="/login" className="nav-links">Login</Link>  
                <Link to="/register" className="nav-links">Register</Link>  
                <Link to="/contact" className="nav-links">Contact</Link>  
                <Link to="/" className="nav-links">Home</Link>           
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