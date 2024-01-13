import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import { useContext} from "react";
import AuthContext from "../pages/Login/AuthContext";

const MyHeader = () => {



  // authContext가 null인 경우에 대한 처리 추가
  const { isAuthenticated, logout } = useContext(AuthContext);
  
  
  const handleLogout = () =>{
    logout();
  }


  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     login(); //저장된 사용자 정보가 있으면 로그인 상태로 설정
  //   }
  // }, [login]);


  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">VolunteerNow</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/introduce">Introduce</Nav.Link>
            <Nav.Link href="/MyPage">My Page</Nav.Link>
          </Nav>

          <Nav>
          {isAuthenticated ? (
            <>
            <Button href="/new" variant="success">
              모집글작성
            </Button>
            
              <Button variant="danger" onClick={handleLogout}>
                Log-Out
              </Button>
            </>
        ) :(
            <Button
              href="/login" variant="danger">
              Log-In
            </Button>
        )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyHeader;
