import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logoi from '../../assets/icon/icons8-portal-64-removebg-preview.png'


const Navbar = () => {
    const { user,hndleLogOut } = useContext(AuthContext);

    const handleSignOUt = () => {
        hndleLogOut()
        .then(() => {
            console.log('SuccessFully SignOut')
            alert('SuccessFully SignOut')
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const navbar = <>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-[#3C65F5]' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/'}>Home</NavLink></li>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-[#3C65F5]' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/1'}>Find a Job</NavLink></li>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-[#3C65F5]' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/2'}>Recruiters</NavLink></li>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-[#3C65F5]' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/3'}>Candidates</NavLink></li>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-[#3C65F5]' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/4'}>Pages</NavLink></li>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-[#3C65F5]' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/5'}>Blog</NavLink></li>
        <li className=''><NavLink className={({ isActive }) =>
            `py-3 text-lg rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-[#3C65F5]' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/6'}>Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navbar}
                    </ul>
                </div>
                <div className="flex gap-3 items-center">
                    <img src={logoi} alt="logo" />
                    <h1 className="text-3xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Job Portal</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={handleSignOUt} className="btn">Log Out</button>
                    </> : <>
                        <Link className="btn" to={'/signup'}>SignUp</Link>
                        <Link className="btn" to={'/login'}>Login</Link></>
                }

            </div>
        </div>
    );
};

export default Navbar;