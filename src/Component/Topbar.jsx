import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Topbar=()=>{
    return(
        <>
       <Navbar className="bg-body-tertiary" data-bs-theme="dark" style={{height:"70px"}} >
      <Container>
        <Navbar.Brand href="#home" >Car Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Pawan Pathariya</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Topbar;