import { message } from "antd";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Insert=()=>{
    const [input,setinput]=useState({});
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("name")){
            navigate("/login");
        } 
    },[])
const handle=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setinput(values=>({
        ...values,[name]:value
    }));
    console.log(input);
}
const submit=(e)=>{
  let api="http://localhost:3000/cars";
  axios.post(api,input).then((res)=>{
      message.success("data inserted")
  })

  input.value="";
}
    return(
        <>
        <div id="insert">
           Enter Car Maker <input type="text" name="make" onChange={handle} placeholder="Enter car Maker"/> <br />
           Enter Car Model <input type="text" name="model" onChange={handle} placeholder="Enter car Model" /> <br />
           Enter Manufacture year <input type="text"  name="year" onChange={handle} placeholder="Enter Car Manufacturing Year"/> <br />
           Enter Car Price <input type="text"  name="price" onChange={handle} placeholder="Enter Car Price"/> <br />
           <button onClick={submit}>Insert</button>
        </div>
        </>
    )
}
export default Insert;