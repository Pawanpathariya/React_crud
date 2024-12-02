import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'

const Topbar=()=>{
    return(
        <>
       <Navbar className="bg-body-tertiary" data-bs-theme="dark" style={{height:"70px"}} >
      <Container fluid style={{display:"flex",marginLeft:"115px"}}>
        <Navbar.Brand to="" ><i class="fa-solid fa-car" style={{color:"white", paddingRight:"10px" ,fontSize:"30px"}}/> Car Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a to="/">Pawan Pathariya</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Topbar;