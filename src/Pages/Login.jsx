import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login=()=>{
 const [input,setinput]=useState({});
 const navigate=useNavigate();
const handleinput=(e)=>{
let name=e.target.name;
let value=e.target.value;

setinput(values=>({...values,[name]:value}));

}

const handlesubmit=()=>{
    let api=`http://localhost:3000/user/?email=${input.email}&password=${input.password}`;
    axios.get(api).then((res)=>{
        if(res.data.length===0){
            message.error("Invalid Email or Password !!!");
        }
        else{
            message.success("Login Successfull");
            localStorage.setItem("name",res.data[0].name);
           navigate("/home")
        }
    })

}

    return(

        <div id="box">
        <div id="login">
        <h1>Login page</h1> <br />
        Enter Email Id <input type="text" name="email" value={input.email} onChange={handleinput} placeholder="Enter Email" /> <br />
        Enter Password <input type="password"  name="password" value={input.password} onChange={handleinput} placeholder="Enter Password"/> <br />
       <div style={{display:"flex"}}> 
        <button onClick={handlesubmit}>Login</button> 
      <button  onClick={()=>navigate("/register")} style={{marginLeft:"20px"}}>register</button> </div>
        </div>
        </div>
    )
}

export default Login;