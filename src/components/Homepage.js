import React, { useEffect, useRef } from "react";
import banner2 from "../images/banner2.png";
import banner from "../images/banner.png";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import { NavLink, useNavigate } from "react-router-dom";
import { Margin, NavigateBefore } from "@mui/icons-material";
import Timer from "./Timer";
import { BiCalendar, BiMap, BiAlarm } from "react-icons/bi";
import ranlogo from "../images/RANlogo.png";
import timelinelogo from "../images/event_girl.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "./Footer";

function Homepage() {
  const navigate = useNavigate();
  const btnClickHandler = (route) => {
    navigate(`/${route}`);
  };

  const element = useRef();
  const leftScrollHandler = () => {
    element.current.scrollLeft -= 330;
    console.log(element.current.scrollLeft);
  };

  const rightScrollHandler = () => {
    element.current.scrollLeft += 330;

    console.log(element);
  };
  return (
    <div className="home">
      <div className="top-section">
        <div className="overlay">
          <div className="event-brief">
            <div>
              <h2>
                Science, Tech & <br />
                Entrepreneurhip Festival
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="date-location">
              <span>
                <BiCalendar className="icon" /> April 10 to April 20, 2022
              </span>
              <span>
                <BiMap className="icon" /> Pulchowk-3 Lalitpur, Nepal
              </span>
            </div>

            <div className="presentedby">
              <span>Presented by</span>
              <img src={ranlogo} />
            </div>
          </div>
        </div>
        <div className="overlay-bottom-right">
          <div className="days-event-partners">
            <div>
              <h1>10</h1>
              <span>DAYS</span>
            </div>
            <div>
              <h1>7</h1>
              <span>EVENTS</span>
            </div>
            <div>
              <h1>60+</h1>
              <span>PARTNERS</span>
            </div>
          </div>
          <p>
            <BiAlarm style={{ marginRight: "5px", fontSize: "18px" }} /> 5 DAYS
            TO GO
          </p>
        </div>
      </div>
      <div className="eventSlider">
        {/* */}
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide className="sliders">
            <div className="slider-contents">
              <div className="slider-header-container">
                <div>
                  <h2>Yantra Automatic Akhada</h2>
                  <span>
                    <BiCalendar className="icon" /> April 10, 2022
                  </span>
                </div>
                <button className="btnRegister">REGISTER NOW</button>
              </div>
              <div className="description">
                <p>
                  This is an open competition, like a fight to death, where one
                  manual robot has to destroy other in the game arena, the
                  Akhada. The size of robot will be 60 cm * 60 cm * 75 cm and 35
                  kg weight limit, so that participants can showcase their
                  creativity with bigger dimensions.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sliders">
            <div className="slider-contents">
              <div className="slider-header-container">
                <div>
                  <h2>Yantra Automatic Akhada</h2>
                  <span>
                    <BiCalendar className="icon" /> April 10, 2022
                  </span>
                </div>
                <button className="btnRegister">REGISTER NOW</button>
              </div>
              <div className="description">
                <p>
                  This is an open competition, like a fight to death, where one
                  manual robot has to destroy other in the game arena, the
                  Akhada. The size of robot will be 60 cm * 60 cm * 75 cm and 35
                  kg weight limit, so that participants can showcase their
                  creativity with bigger dimensions.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <span
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          fontWeight: "600",
          color: "#109d58",
          fontSize: "35px",
          textAlign: "center",
          top: "30px",
        }}
      >
        Time Left For Event
      </span> */}
      {/* <div
        style={{
          margin: "auto",
          marginTop: "-30px",
        }}
      >
        <Timer />
      </div> */}
      <div className="timelineSection">
        <h2>EVENTS TIMELINE</h2>
        <div className="timeline-container">
          <img src={timelinelogo} />
          <div className="timeline">
            <FaChevronLeft className="left-arrow" onClick={leftScrollHandler} />
            <FaChevronRight
              className="right-arrow"
              onClick={rightScrollHandler}
            />

            <div className="timeline-card-section" ref={element}>
              <div className="timeline-card">
                <h2>Poush 1-8</h2>
                <h3>Workshop and Seminars</h3>
              </div>
              <div className="timeline-card">
                <h2>Poush 19-18</h2>
                <h3>Workshop and Seminars</h3>
              </div>
              <div className="timeline-card">
                <h2>Poush 21-28</h2>
                <h3>Workshop and Seminars</h3>
              </div>
              <div className="timeline-card">
                <h2>Magh 48-58</h2>
                <h3>Workshop and Seminars</h3>
              </div>
              <div className="timeline-card">
                <h2>Poush 1-8</h2>
                <h3>Workshop and Seminars</h3>
              </div>
            </div>

            <button>VIEW TIMELINE</button>
          </div>
        </div>
      </div>
      <div className="competetions">
        <div className="individualCompetetion">
          <img
            src="https://i0.wp.com/yantra7.ran.org.np/wp-content/uploads/2018/10/featurephoto_yantraIRC.png?w=672&ssl=1"
            data-aos="fade-right"
          />
          <div className="compDescription" data-aos="fade-left">
            <h2>International Robotics Competition</h2>
            <span>
              International Robotics Competition is one of the major programs
              under the umbrella of Yantra 7.0 Science, Tech and Entrepreneurhip
              Festival 2018. International Robotics Competition has five major
              categories 1. Robo Business Cup 2. Nepal Drone Racing League 3.
              Yantra National League 4. Yantra Manual Akhada 5. Yantra Automatic
              Akhada <NavLink to="/event">...Read More</NavLink>
            </span>
          </div>
        </div>
        <div className="individualCompetetion">
          <div className="compDescription" data-aos="fade-right">
            <h2>Robo Business Cup</h2>
            <span>
              Robo Business Cup is annual main event of Yantra Science, Tech and
              Entrepreneurship Festival which empowers Robot engineers, makers,
              enthusiasts, tinkerers, dreamers and start ups to start their
              Robotics business in this innovative world. RBC envisions in
              creating huge Robotics Industry in Nepal by 2030 by solving local
              challenges and creating sustainable development environment.
            </span>
          </div>
          <img
            src="https://i0.wp.com/yantra7.ran.org.np/wp-content/uploads/2018/10/featurephoto_rbc.png?w=672&ssl=1"
            data-aos="fade-left"
          />
        </div>
        <div className="individualCompetetion">
          <img
            src="https://i0.wp.com/yantra7.ran.org.np/wp-content/uploads/2018/10/featurephoto_yantra-learning.png?w=672&ssl=1"
            data-aos="fade-right"
          />
          <div className="compDescription" data-aos="fade-left">
            <h2>Yantra Learning</h2>
            <span>
              Yantra Learning under the umbrella of Yantra 7.0 is third edition
              of Yantra Learning with the theme of Agricultural Disaster
              Response and Medical Assistive Technology. It is a software
              competition where programmers develop software project that can
              make the Yantra (machine) learn from external environments, past
              data and patterns to take decision as per the current situation.
            </span>
          </div>
        </div>
        <div className="individualCompetetion">
          <div className="compDescription" data-aos="fade-right">
            <h2>Yantra Kids</h2>
            <span>
              A design challenge, focusing on changes that can be brought into
              society through technology, will be organized after giving
              knowledge on design thinking, prototyping, tinkering, electronics
              components, coding etc to the children below age 14. And a final
              Competition will be organized between them.
            </span>
          </div>
          <img
            src="https://i0.wp.com/yantra7.ran.org.np/wp-content/uploads/2018/10/featurephoto_yantrakids.png?w=672&ssl=1"
            data-aos="fade-left"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
