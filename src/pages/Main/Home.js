import React, { useContext, useEffect, useState } from "react";
import MyCarousel from "../../components/MyCarousel";
import MyHeader from "../../components/MyHeader";
import { VolunteerStateContext} from "../../App";
import VolunteerList from "../../components/VolunterrList";
import Footer from "../../components/MyFooter";

const Home = () => {
  const volunteerList = useContext(VolunteerStateContext);
  const [data, setData] = useState([]);
  

  useEffect(() => {
    setData(volunteerList);
  }, [volunteerList]);

  return (
    <div>
      <MyHeader />
      <MyCarousel />
      <VolunteerList VolunteerList={data} className="vl"/>
      <Footer/>
    </div>
  );
};

export default Home;


