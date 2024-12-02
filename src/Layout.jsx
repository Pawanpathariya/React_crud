import Sidebar from "./Component/Sidebar";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Display from "./Pages/Display";
import Insert from "./Pages/Insert";    
import Search from "./Pages/Search";    
import Update from "./Pages/Update";
import Edit from "./Pages/Edit";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
const Layout=()=>{
    return(
        <>
       
       <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login/>}></Route>
                    <Route path="register" element={<Register/>}></Route>
                    <Route path="/" element={<Sidebar/>}>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="display" element={<Display/>}/>    
                    <Route path="insert" element={<Insert/>}/>    
                    <Route path="search" element={<Search/>}/>    
                    <Route path="update" element={<Update/>}/>    
                    <Route path="edit/:id" element={<Edit/>}/>    
                    </Route>
                </Routes>
            </BrowserRouter>   
        </>
    )
}
export default Layout;