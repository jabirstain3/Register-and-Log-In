import { useState } from "react";
import { NavLink } from "react-router-dom";
// import AuthContextProvider from "../../contexts/AuthContextProvider";

const Navbar = () => {
    
    const [ logedin, setLogedin ] = useState( "null" );
    const [ profile, setProfile ] = useState( false );

    return (
        <div className="border flex static justify-between items-center p-4"> 
            <div className="border"><img src="" alt="logo" /></div>
            <div className="border flex justify-between items-center gap-4">
                <div className="">
                    <NavLink to="/mycart" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>cart</NavLink>
                </div>
                <div className="">
                    { logedin ?
                        <div className="flex justify-end ">
                            <div className="" onClick={ () => setProfile(!profile) }>
                                <p className="">Profile</p>
                            </div>
                            {
                                profile && 
                                <ul className="w-fit my-6 text-center absolute  bg-cyan-800 flex flex-col flex-wrap basis-full text-lg font-semibold gap-2 py-2 px-4">
                                    <li className=""><NavLink to="/profile" >My Profile</NavLink></li>
                                    <li>Log Out</li>
                                </ul>
                            }
                        </div>
                        :<div>
                            <NavLink to="/login" className={({ isActive}) => {return (isActive ? "text-red-600" : "")}} onClick={() => setLogedin("in")}>Sing In</NavLink>
                        </div> 
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;






// import { NavLink } from "react-router-dom";

// const links = <>
//                 <li className=""><NavLink to="/" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Home</NavLink></li>
//                 <li className=""><NavLink to="/registration" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Registration</NavLink></li>
//                 <li className=""><NavLink to="/login" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Log In</NavLink></li>
//                 <li className=""><NavLink to="/" className={({ isActive}) => {return (isActive ? "text-red-600" : "");}}>Profile</NavLink></li>
//             </>




// const Navbar = () => {
//     return (
//         <div className="border w-full flex item-center justify-between mx-auto" >
//             <div className="justify-content-between border w-1/2 sm:w-1/3">
//                 <a href="#" className="logo">MILSTONE-51</a>
//             </div>
//             <ul className={`border flex md:gap-5 lg:gap-8 items-center w-1/2 md:w-auto  md:text-md lg:text-xl font-medium `} >
//                 {links}
//             </ul>   
//         </div>
//     );
// };


// export default Navbar;