import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {useContext} from "react";
import AuthContext from "../pages/Login/AuthContext";
import { Link } from "react-router-dom";

const MyHeader = () => {



  // authContext가 null인 경우에 대한 처리 추가
  const { isAuthenticated, logout, username } = useContext(AuthContext);
  
  
  const handleLogout = () =>{
    logout();
  }


  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>VolunteerNow</Navbar.Brand>
          </Link>

          <Nav className="me-auto">
            <Link to="/" style={linkStyle}>
            Home
            </Link>
            <Link to="/introduce" style={linkStyle}>
            Introduce
            </Link>
            <Link to="/mypage" style={linkStyle}>
            My Page
            </Link>
          </Nav>

          <Nav>
          {isAuthenticated ? (
            <>

            {/* 로그인한 사람의 이름을 표시하고 싶음 */}

            <Nav.Item style={nameStyle}>
              {username && `${username}님, 환영합니다!`}
            </Nav.Item>

            <Link to="/new">
              <Button  variant="success">
                모집글작성
              </Button>
            </Link>
            
              <Button variant="danger" onClick={handleLogout}>
                Log-Out
              </Button>
            </>
        ) :(
      


          <Link to="/login">
            <Button variant="danger">
              Log-In
            </Button>
            </Link>
        )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

const linkStyle = {
  textDecoration: "none",
  padding: "0.5rem 1rem",
  display: "flex",
  alignItems: "center",
 
  
  transition: "color 0.2s", // Smooth transition on color change
};


const nameStyle = {
  
  padding: "0.5rem 1rem",
  color: "white", 
  display: "flex",
  alignItems: "center"
};
export default MyHeader;
