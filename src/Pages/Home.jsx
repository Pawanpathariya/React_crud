import img from "../Component/th1.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("name")){
            navigate("/login");
        } 
    },[])
    return(
        <>
    <img src={img} alt="" width="80%" height="730px" style={{overflow:"hidden"}} />
        </>
    )
}
export default Home;