import { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { VolunteerStateContext } from "../../App";
import Header from "../../components/Header";
import MyButton from "../../components/MyButton";
import { categoryList } from "../../util/category";
import Parser from 'html-react-parser';
import MyHeader from "../../components/MyHeader";
import AuthContext from "../Login/AuthContext";
import Footer from "../../components/MyFooter";

const Detail = () => {
    
    const {id} =useParams();
   

    // 리스트를 받아오기
    const volunteerList = useContext(VolunteerStateContext);
    const{isAuthenticated ,userid} =useContext(AuthContext); //로그인한 userid 받아오기
    const navigate = useNavigate();
    const [data,setData] =useState();

    



    useEffect(()=>{
        if(volunteerList.length>=1){
            const targetVolunteer = volunteerList.find(
                (it) => parseInt(it.id) === parseInt(id)
        );
        
        

        if(targetVolunteer){
            //모집글 존재할 때
            setData(targetVolunteer);

        }else{
            //모집글 존재하지 않을 때
            alert("없는 페이지입니다.");
            navigate('/',{replace:true});
        }

        }
    },[id,volunteerList,navigate]);

    if(!data){
        return<div className="DetailPage">로딩중입니다...</div>;
    }else{

        const currentVolunteerData = categoryList.find(
            (it)=>parseInt(it.category_id)===parseInt(data.category));

        console.log(currentVolunteerData);
        //아이콘 이미지 불러오기 위함.

        const strDate = new Date(parseInt(data.date)).toLocaleDateString();
        //위치가 중요하다.데이터 받고,리턴 하기 전에 선언해야 함.


        console.log(data.userid);

        return (
            <div>
            <MyHeader/>
            <div className="DetailPage">
                
                <Header 
                headText={"상세페이지"}
                leftChild={
                    <MyButton text={"<뒤로가기"} onClick={()=>navigate(-1)}/>
                }
                rightChild={
                    (isAuthenticated && userid === data.userid)?
                    //로그인했고, 게시글 쓴 userid와 로그인 아이디가 같을 때만, 수정하기 버튼 보여준다.
                    (
                    <MyButton text={"수정하기"} onClick={() =>navigate(`/edit/${data.id}`)}/>)
                    :null
                }
                />
                <article>
                    <section className="volunteer_img">
                
                        <div className="volunteer_image_wrapper">

                            <img src = {data.image} alt=""/>

                        </div>

                    </section>
                    <section className="volunteer_info">
                        <h4>봉사 카테고리</h4>
                        <div className={[
                            "category_img_wrapper",
                            `category_img_wrapper_${data.category}`,
                            ].join(" ")
                            }>
                            <img className="img" src={currentVolunteerData.category_img} alt=""/>
                            <div className="category_description">
                                {currentVolunteerData.category_description}

                            </div>            
                        </div>
                        <h4>봉사 일자</h4>
                        <div className="volunteer_date_wrapper">
                            <p>{strDate}</p>
                        </div>
                    
                        <h4>봉사 제목</h4>
                        <div className="volunteer_con_wrapper">
                            <p>{data.content}</p>
                        </div>
                        <h4>봉사 장소</h4>
                        <div className="volunteer_loc_wrapper">
                            <p>{data.location}</p>
                        </div>
                    </section>
                </article>
                    <section className="volunteer_detail">
                        <h4>상세내용</h4>
                        <div className="volunteer_detail_wrapper">
                            <p>{Parser(data.detail)}</p>
                        </div>
                    </section>


                

            </div>
            <Footer/>
            </div>
        );

    }

    
}

export default Detail;