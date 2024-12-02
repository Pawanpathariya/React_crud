import { Link,Outlet} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Sidebar=()=>{
    return(
        <>
        <div id="wrapper">
        <div id ="sidebar" >
        <Link to="/home"> <FontAwesomeIcon icon={faHouse} style={{paddingRight:"20px"}} /> Home</Link>
        <Link to="/display"><FontAwesomeIcon icon={faList} style={{paddingRight:"20px"}}/> Display</Link>
        <Link to="/insert"><FontAwesomeIcon icon={faPen} style={{paddingRight:"20px"}}/> Insert</Link>
        <Link to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} style={{paddingRight:"20px"}}/> Search</Link>
        <Link to="/update"><FontAwesomeIcon icon={faPenToSquare} style={{paddingRight:"20px"}}/> Update</Link>
        </div>
        <Outlet></Outlet>
        </div>
        </>
    )
}
export default Sidebar;