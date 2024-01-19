import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Footer = () => {
    return (
      <footer className="bg-light p-3 text-center" style={{ marginTop: '30px' }}>
        <p style={{marginTop:'30px'}}>상호 : 볼룬티어투데이 | 대표자명 : 홍길동 </p>
        <p>사업자 등록번호 : 345-89-42959 | 이메일 : help@volunteertoday.com </p>
        <p>Protocol &copy; 2024 All Right Reserved</p>
      </footer>
    );
  };
  
  export default Footer;