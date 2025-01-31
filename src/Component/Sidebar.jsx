import { Link, Outlet } from "react-router-dom";
import Topbar from "./Topbar";

const Sidebar = () => {
    return (
        <>
        <Topbar/>
            <div id="wrapper">
                <div id="sidebar">
                    <Link to="/home"><i class="fa-solid fa-house" style={{ paddingRight: "20px", fontSize: "25px",color:"white" }}/>Home</Link>
                    <Link to="/display"><i class="fa-solid fa-car" style={{ paddingRight: "20px", fontSize: "25px",color:"white" }}/>Display</Link>
                    <Link to="/insert"><i class="fa-solid fa-pen" style={{ paddingRight: "20px", fontSize: "25px",color:"white" }}/> Insert</Link>
                    <Link to="/search"><i class="fa-solid fa-magnifying-glass" style={{ paddingRight: "20px", fontSize: "25px",color:"white" }}/>Search</Link>
                    <Link to="/update"><i class="fa-regular fa-pen-to-square" style={{ paddingRight: "20px", fontSize: "25px",color:"white" }}/>Update</Link>
                    <Link to="/login" onClick={()=>{
                        localStorage.clear();
                    }}><i class="fa-solid fa-right-from-bracket" style={{ paddingRight: "20px", fontSize: "25px",color:"white" }}/>Log out</Link>
                </div>
                <Outlet></Outlet>
            </div>
        </>
    )
}
export default Sidebar;
