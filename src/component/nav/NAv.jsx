import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { authContext } from "../../provider/authContext";

const NAv = () => {
  const {user,logOut}=useContext(authContext);

  const handleLogOut=()=>{
    logOut()
    .then(()=>console.log('user log out successfully'))
    .catch(error=>{
      console.log(error)
    })
  }

    const NavLinks=<div className="flex gap-6">
<NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }>Home</NavLink>

<NavLink to="/login" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }>LogIn</NavLink>
          

<NavLink to="/register" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }>Register</NavLink>

<NavLink to="/orders" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }>Orders</NavLink>

  {
    user&& 
    <>
        <NavLink to="/profile" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }>Profile</NavLink>

<NavLink to="/dashboard" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
  }>dashboard</NavLink>
    </>
  }
          
           
           
    </div>
    return (
        <div>
           <div className="navbar bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            NavLinks
        }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">auth contexrt mixed</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
        NavLinks
    }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?
      <>
       <span>{user.email}</span>
       <button onClick={handleLogOut} className="btn btn-sm">Sign Out</button>
      
      </>:
       <Link to='/login'>
        <button className="btn btn-sm">Login</button>
       </Link>
     
    }
   
  </div>
</div>
        </div>
    );
};

export default NAv;