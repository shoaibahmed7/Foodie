import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/signup.css'

const SignUp = () => {
    let[username,setUsername]=useState('')
let[phoneNumber,setPhoneNumber]=useState('')
let[email,setEmail]=useState('')
let[password,setPassword]=useState('')
let[confirmpassword,setConfirmpassword]=useState('')
let navigate=useNavigate()
let handleSubmit=(e)=>{
e.preventDefault()
let data={username,phoneNumber,email,password,confirmpassword}
if(username && phoneNumber && email && (password==confirmpassword))
{
    axios.post('http://localhost:4001/signup',data)
    .then((res)=>{
       alert(res.data.message)
       navigate('/')
       console.log(data);
    })
}
else{
alert('invalid credentials')
}
}
  return (
   <div className="signup">
    <div className="signblk">
    <div className="signup1 text-light text-center text-light w-50 container">
    
    <div className="signUp_form w-50 mx-auto" style={{height:"500px"}}>
    <h1 style={{fontFamily:"sans-serif"}}>signup</h1>
      <form action="" className="" onSubmit={handleSubmit}>
        <div className="Name">
        <input
            type="text"
            placeholder="username"
            className="form-control mt-2"
            name="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div className="mobile_number">
        <input
            type="tel"
            placeholder="phone number"
            className="form-control mt-2"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="email"><input
            type="email"
            placeholder="email address"
            className="form-control mt-2"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          /></div>
        <div className="password">
        <input
            type="password"
            placeholder="password"
            className="form-control mt-2"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="confirm_password">
        <input
            type="password"
            placeholder="confirm password"
            className="form-control mt-2"
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e)=>setConfirmpassword(e.target.value)}
          />
        </div>
        <div className="signUp_button">
          <button className="btn btn-light mt-5" type="submit">Sign up</button>
        </div>
        <div className="login_button">
          <p>Already a user?</p>
          <Link to='/' className="btn btn-outline-light mt-5">Login</Link>
        </div>
      </form>
    </div>
  </div>
    </div>
   </div>
  );
};

export default SignUp;
