import { useContext, useRef, useState } from "react";
import Header from "../../components/Header.js";
import Footer from "../../components/MyFooter.js";
import MyHeader from "../../components/MyHeader.js";
import SideBar from "../../components/SideBar.js";
import AuthContext from "../Login/AuthContext.js";
import MyButton from "../../components/MyButton.js";

const MyPage = () => {
  // authContext를 가져와서 로그인 정보 가져오기
  const { username, userid, email, gender } = useContext(AuthContext);

  const imageInputRef = useRef();
  const [imageSrc, setImageSrc] = useState(null);
  const [isImageSaved, setIsImageSaved] = useState(false);


  const onUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      //onloadend -> 파일 읽기 작업이 완료되면 실행될 함수를 설정하는 부분
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
    }
  };

  const handleSave =() =>{
    setIsImageSaved(true);
    alert("이미지가 저장되었습니다!");
  };

  return (
    <div className="MyPage">
      <MyHeader/>
      <Header headText={"마이 페이지"} />
      <div className="cart_content_wrapper">
            <section className="cart_sidebar">

            <SideBar />
            </section>
            <section className="mypage_profile">
            <div className="mypage-item">
              <strong>나의 정보</strong>
              <br/><br/>  
            
              {username && `이름 : ${username}`}
              <br/> 
              {gender && `성별 : ${gender}`}
              <br/> 
              {userid && `ID : ${userid}`}
              <br/> 
              {email && `이메일 : ${email}`}
              <br/><br/>
              <div className="vertical-align">
              {isImageSaved? (
              <img src={imageSrc} alt="" className="default-image2"/>
              ):(<img src="/images/basic.png"
              alt="Default"
              className="default-image2"/>)}

              </div>
              </div>
            </section>
            <section className="mypage_profile">
            <div className="image-upload-wrapper2">
              <div className="image-preview">
                {imageSrc ? (
                  <img src={imageSrc} alt="Preview" />
                ) : (
                  <img
                    src="/images/upload.png"
                    alt="Default"
                    className="default-image"
                  />
                )}
              </div>
              <div className="upload-button">
              <input
                type="file"
                accept="image/*"
                onChange={onUpload}
                ref={imageInputRef}
              />
              <label onClick={() => imageInputRef.current.click()}>
                프로필 업로드
              </label>
              <MyButton
              text={"저장"}
              type={"positive"}
              onClick={handleSave}
              />
              </div>
              
            </div>
            </section>
      </div>

    <Footer/>
    </div>
    
  );
};

export default MyPage;
