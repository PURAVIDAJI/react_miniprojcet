 /* global kakao */
 //kakao가 전역변수임을 알려줌
import React, { useEffect } from 'react';
import Footer from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";

const Introduce = () => {
    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.47726987286, 127.04451924211),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);
        var markerPosition = new kakao.maps.LatLng(37.47726987286, 127.04451924211);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        })
        marker.setMap(map);
    }, []);

    return (
        <div>
            <MyHeader />
            <div className='custom-carousel'>
                <img
                    className="d-block w-100"
                    src='/images/image3.webp'
                    alt='banner'
                />

            </div>
            <div className="IntroducePage">
                <h1>Introduce</h1>
                <p style={{fontSize :"20px"}}>VolunteerNow는 사람들이 봉사활동 모임을 더 쉽게 조직하고 참여할 수 있도록 돕기 위해 탄생했습니다. 우리는 함께하는 경험을 통해 더 많은 선을 이뤄낼 수 있다고 믿습니다. 중고등학생부터 일반인까지, 누구나 자신이 원하는 봉사에 참여하고 개인의 가치를 사회에 기여할 수 있는 플랫폼으로서 우리는 다양한 활동을 제공하고 있습니다.
                <br/><br/> 
                <strong style={{ fontSize: "24px"}}>Vision.</strong> 봉사를 시작할 곳과 계속 봉사를 해 나아갈 공동체가 필요합니다. VolunteerNow는 선을 실현하기 위해 다른 이들과 함께 참여할 수 있는 마켓플레이스입니다. 
                <br/><br/>
                <strong style={{ fontSize: "24px"}}>Mission.</strong> VolunteerNow는 마음을 가진 사람들을 통합하고, 그들에게 아이디어, 물품 및 공동체를 제공하여 함께 세상에서 보고 싶은 변화를 창출할 수 있도록 자유를 부여합니다. 
                <br/><br/>
                </p>
                <div className='Map'>
                
                    <div>
                    <h1>Directions</h1>
                    <br/>
                    <p style={{fontSize :"20px"}}>
                    <strong style={{ fontSize: "24px"}}>주소</strong>
                    <br/> 서울특별시 서초구 논현로87 삼호물산빌딩 B동 3층
                    <br/><br/>
                    <strong style={{ fontSize: "24px"}}>지하철 이용안내 </strong>
                    <br/>
                    <strong style={{ padding: "0.2em 0.3em",backgroundColor:"#EF7C1C", color: "white" ,fontSize: "20px"}}>3호선</strong>
                    <strong style={{padding: "0.4em"}}>매봉역 4번출구 (버스 약 7분 소요)</strong>
                    <br/><br/>
                    →'매봉역' 정류장에서 마을버스 02번, 4433번(초록)
                    <br/> 
                    →'포이사거리삼호물산' 정류장 하차 → 횡단보도 이용 
                

                        
                        
                        </p>
                    </div>
                    <div id="map" style={{ width: '500px', height: '400px' }}></div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Introduce;
