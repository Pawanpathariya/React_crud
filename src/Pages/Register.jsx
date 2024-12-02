import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register=()=>{
    const [input,setinput]=useState({});
    const navigate=useNavigate();

    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        
        setinput(values=>({...values,[name]:value}));
        }


    const handlesubmit=()=>{
    let api="http://localhost:3000/user";
    axios.post(api,input).then((res)=>{
        message.success("data inserted");
        navigate("/login")
    })
    }
    return(
   <>
    <div id="box">
   <div id="register">

<h1>Register</h1>
Enter Name <input type="text" placeholder="Enter Name" name="name" value={input.name} onChange={handleinput} /> <br />
Enter Email <input type="text" placeholder="Enter Email" name="email" value={input.email} onChange={handleinput} /> <br />
Enter Password <input type="text" placeholder="Enter Password" name="password" value={input.password} onChange={handleinput} /> <br />
<button onClick={handlesubmit}>Register</button>
   </div>
   </div>
   </>
    )
}
export default Register