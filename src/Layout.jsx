import Sidebar from "./Component/Sidebar";
import Topbar from "./Component/Topbar";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Display from "./Pages/Display";
import Insert from "./Pages/Insert";    
import Search from "./Pages/Search";    
import Update from "./Pages/Update";

const Layout=()=>{
    return(
        <>
       <Topbar/>
       <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Sidebar/>}>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="display" element={<Display/>}/>    
                    <Route path="insert" element={<Insert/>}/>    
                    <Route path="search" element={<Search/>}/>    
                    <Route path="update" element={<Update/>}/>    
                    </Route>
                </Routes>
            </BrowserRouter>   
        </>
    )
}
export default Layout;