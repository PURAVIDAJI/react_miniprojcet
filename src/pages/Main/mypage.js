import Header from "../../components/Header.js";
import SideBar from "../../components/SideBar.js";

const MyPage = () => {
  return (
    <div className="MyPage">
      <Header headText={"마이 페이지"} />

      <SideBar />
    </div>
  );
};

export default MyPage;
