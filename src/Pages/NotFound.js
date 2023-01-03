import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
       <div>
        <br />
            <div className=" mt-36 rounded-2xl p-6 md:p-6 text-center h-64">
            <h5 className="text-6xl mt-6">404</h5>
            <h5 className="text-4xl mt-6">Page Not Found</h5><br />
           <Link to="/" className="text-2xl text-blue-800 underline">Click here to go back</Link>
            </div>
            <footer>
                   <h4 className="text-center md:text-xl mt-48">  &copy; Martha <span className='text-blue-600'>Ochuko</span> Osika || Altschool <span className='text-blue-600'>React + Tailwindcss</span> Examination (Holiday Challenge Modifications)</h4>
                </footer>
            </div>
     );
}
 
export default NotFound;