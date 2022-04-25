import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (

        // <nav className="bg-gray-800">

        //     <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        //         <div className="relative flex items-center justify-between h-16">

        //             <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        //                 <div className="flex-shrink-0 flex items-center">
        //                     
        //                 </div>

        //             </div>

        //         </div>
        //     </div>




        // </nav>

        <nav className='px-4  py-2 bg-gray-800 mb-3 flex items-center justify-between '>
            <Link to="/" className='flex items-center' >
                <img className="hidden lg:block h-8 w-auto" src="https://seeklogo.com/images/I/imdb-internet-movie-database-logo-025D34570E-seeklogo.com.png" alt="Workflow" />
                <span className='text-white mx-4 text-3xl font-semibold'>Movies List</span>
            </Link>
            <Link to="/login" className=" font-medium 
       text-blue-500 
        text-xl hover:text-blue-400" >Login</Link>
        </nav>
    )
}

export default Navbar