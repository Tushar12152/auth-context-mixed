import { useContext, useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../provider/authContext";


const Login = () => {
const [showPassword,setShowPassword]=useState(false)
const {signInUser,signInWithGoogle}=useContext(authContext)
const navigate=useNavigate()


const handleLogin=e=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password)
    signInUser(email,password)
    .then(result=>{
        console.log(result.user)
        e.target.reset()
        navigate('/')
    })
    .catch(error=>{
        console.log(error)
    })
}


const handlegoogleSignIn=()=>{
    signInWithGoogle()
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.error(error)
    })
}

    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="relative">
         <input type={showPassword?'text':"password" }name="password" required placeholder="password" className="input input-bordered w-full" />
         <span className="absolute top-4 right-1" onClick={()=>setShowPassword(!showPassword)}>{
                 showPassword?<AiFillEyeInvisible></AiFillEyeInvisible>:<AiFillEye></AiFillEye>
            }</span>
         </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <p>New Here? please <Link className="text-blue-700" to="/register">Register</Link></p>
      </div>
       <button onClick={handlegoogleSignIn} className="btn btn-ghost">LogIn With Google</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;