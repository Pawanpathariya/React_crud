import { Link,Outlet} from "react-router-dom";
const Sidebar=()=>{
    return(
        <>
        <div id="wrapper">
        <div id ="sidebar" >
        <Link to="/home">Home</Link>
        <Link to="/display">Display</Link>
        <Link to="/insert">Insert</Link>
        <Link to="/search">Search</Link>
        <Link to="/update">Update</Link>
        </div>
        <Outlet></Outlet>
        </div>
        </>
    )
}
export default Sidebar;