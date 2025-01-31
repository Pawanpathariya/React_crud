import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
const Edit=()=>{
const [mydata, setMydata]=useState({});
const {id} =useParams();
const loadData=()=>{
    let api=`http://localhost:3000/cars/${id}`;
    axios.get(api).then((res)=>{
        setMydata(res.data);
        console.log(res.data);
    })
}
const navigate=useNavigate();
useEffect(()=>{
    if(!localStorage.getItem("name")){
        navigate("/login");
    } 
},[])
useEffect(()=>{
    loadData();
}, []);

const handleInput=(e)=>
{ 
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values, [name]:value}))
      console.log(mydata);
}


const handleSubmit=()=>{
    let api=`http://localhost:3000/cars/${id}`;
    axios.put(api, mydata).then((res)=>{
        message.success("Data succesflly updated!!!");
    })
}

   

    return(
        <>

        <div id="insert">
        Enter Car Maker <input type="text" name="make" value={mydata.make} onChange={handleInput} placeholder="Enter car Maker"/> <br />
        Enter Car Model <input type="text" name="model" value={mydata.model} onChange={handleInput} placeholder="Enter car Model" /> <br />
        Enter Manufacture year <input type="text"  name="year" value={mydata.year} onChange={handleInput} placeholder="Enter Car Manufacturing Year"/> <br />
        Enter Manufacture year <input type="text"  name="price" value={mydata.price} onChange={handleInput} placeholder="Enter Car Price"/> <br />
        <button onClick={handleSubmit}>Update</button>
        </div>
        </>
    )
}

export default Edit;