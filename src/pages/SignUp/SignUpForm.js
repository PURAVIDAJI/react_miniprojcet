import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./SignUpForm.css";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "../../errors/NotFound.js";
import MyHeader from "../../components/MyHeader.js";
import Footer from "../../components/MyFooter.js";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {  isSubmitted, errors }, //중복 방지
  } = useForm();

  const navigate = useNavigate();
  const [userid,setUserid] = useState();
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [email,setEmail] = useState();
  const [gender,setGender] = useState("man");
  //const [isUserIdAvailable, setIsUserIdAvailable] = useState(true);

  // //아이디 중복체크
  // const checkUserId = async () =>{
  //   try {
  //     const response = await axios.get(`http://localhost:8000/users?userid=${userid}`);
  //     setIsUserIdAvailable(response.data.length === 0);
      
  //   }catch(error){
  //     console.error("아이디 중복 체크 중 에러 발생 :", error);
  //     setIsUserIdAvailable(false);
  //   }
  // }

  const onSubmit = async (formData) => {

    

    // //아이디 중복확인
    // await checkUserId();
    // console.log()
    // if(!isUserIdAvailable){
    //   alert("이미 존재하는 아이디입니다.")
    //   return;
    // }
  

    try {
      formData.gender = gender;
      const response = await axios.post("https://mirror-jade-medusaceratops.glitch.me/users", formData);
      if (
        response &&
        response.formData &&
        typeof response.formData === "object"
      ) {
        
      }

      alert("회원가입 성공!");
      console.log(formData);
      navigate("/login"); //로그인 페이지로 리다이렉트
    } catch (error) {
      console.error("Error during signup:", error);
      alert("회원가입 실패 폼 내용을 초기화합니다.");
      console.log(formData);
      reset(); //회원가입폼 초기화
    }
  };

  return (
    <div>
    <MyHeader/>
    <div className="signup-page">
      <div className="form">
        <h2 className="signup-h2"> 오늘의 봉사 </h2>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="아이디"
            name="userid"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            {...register("userid", {
              required: "ID 는 필수 입력사항입니다.",
              pattern: {
                value: /^[a-zA-Z0-9]{5,15}$/,
                message: "아이디는 5-15자로 영어, 숫자만 사용할 수 있습니다.",
              },
            })}
          />
          {errors.userid && isSubmitted && <small className="error-message">{errors.userid.message}</small>}

          <input
            type="text"
            placeholder="이름"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-invalid={
              //submit -> password가 유효성검사 통과했을 때 비활성화 제출
              isSubmitted ? (errors.uesrname ? "true" : "false") : undefined
            }
            {...register("username", {
              required: "이름은 필수 입력사항입니다.",
              pattern: {
                value: /^[가-힣]{1,5}$/,
                message: "이름은 1-5자의 한글로 입력해주세요.",
              },
            })}
          />
          {errors.username && isSubmitted && <small className="error-message">{errors.username.message}</small>}

          <input
            type="password"
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={
              //submit -> password가 유효성검사 통과했을 때 비활성화 제출
              isSubmitted ? (errors.password ? "true" : "false") : undefined
            }
            {...register("password", {
              required: "password는 필수 입력사항입니다.",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message:
                  "비밀번호는 8자리 이상으로 영어 대 소문자, 숫자를 조합해서 사용하세요.",
              },
            })}
          />
          {errors.password && isSubmitted && <small className="error-message">{errors.password.message}</small>}
         

       
          <input
            type="email"
            placeholder="email@test.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={
              //submit -> password가 유효성검사 통과했을 때 비활성화 제출
              isSubmitted ? (errors.email ? "true" : "false") : undefined
            }
            
            {...register("email", {
              required: "이메일은 필수 입력사항입니다.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "유효한 이메일 형식으로 입력해주세요.",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <div className="radio-box">
            {/* 중복 없음 : 둘 중 하나 선택 */}
            <label htmlFor="man">남</label>
            <input type="radio" name="gender" value="man" id="man" checked ={gender ==="man"} onChange={() =>setGender("man")}/>

            <label htmlFor="woman">여</label>
            <input type="radio" name="gender" value="woman" id="woman" checked ={gender ==="woman"} onChange={() =>setGender("woman")}/>
          </div>

          <button type="submit">SignUp</button>
          <p className="message">
            이미 회원이신가요? <Link to="/Login">로그인</Link>
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SignUp;
