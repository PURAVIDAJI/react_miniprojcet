import Header from "../../components/Header.js";
import MyHeader from "../../components/MyHeader.js";
import SideBar from "../../components/SideBar.js";

const MyPage = () => {
  return (
    <div className="MyPage">
      <MyHeader/>
      <Header headText={"마이 페이지"} />

      <SideBar />
    </div>
  );
};

export default MyPage;
