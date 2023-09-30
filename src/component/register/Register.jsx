import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';
import { authContext } from "../../provider/authContext";

const Register = () => {
    const [showPassword,setShowPassword]=useState(false)
    const {createUser}=useContext(authContext)
  

    const handleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password,name)
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col ">
<div className="text-center">
 <h1 className="text-5xl font-bold">Registration now!</h1>

</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
 <div className="card-body">
   <form onSubmit={handleRegister}>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Name</span>
     </label>
     <input type="text" name="name" required placeholder="Your Name" className="input input-bordered" />
   </div>
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
    
   </div>
   <div className="form-control mt-6">
     <button className="btn btn-primary">Register</button>
   </div>
   </form>
   <p>Already have an account? please <Link className="text-blue-700" to="/login">Login</Link></p>
 </div>
</div>
</div>
</div>
   </div>
    );
};

export default Register;