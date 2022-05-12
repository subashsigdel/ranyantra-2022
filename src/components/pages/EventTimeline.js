import React from "react";
import "./EventTimeline.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillAppstore } from "react-icons/ai";
import photo from "../../images/photo.png";

function EventTimeline() {
  return (
    <div>
      <div className="news-headersection">
        <h1>Events Timeline</h1>
      </div>
      <div className="container-timeline">
        <div className="timeline-search-container">
          <div>
            <BsSearch className="searchIcon" />
            <input type="search" placeholder="Search Events" />
          </div>
          <div>
            <AiOutlineMenu className="icon" />
            <AiFillAppstore className="icon" />
          </div>
        </div>
        <div className="filter-btn">
          <button>Filter by day or month</button>
        </div>
        <div className="event-timeline-container">
          <span className="date">Friday, May 6</span>
          <div className="event-timeline-det">
            <div className="time">1:30 PM</div>
            <div className="det-card">
              <h5 className="heading">Yantra Workshops & Seniors</h5>
              <p>
                Artificial Intelligence, Machine Learning, Mechanical Design,
                Basic Robotics Crash courses,Robotics Locomotion, 3D printing
                workshop, Raspberry Pi and Local server workshop, Automation
                using Image Processing
              </p>
              <div className="seniors-section">
                <div className="seniors-indiv-details">
                  <img src={photo} />
                  <div className="seniors-details">
                    <span>Bikash Gurung</span>
                    <span>President</span>
                    <span>RAN</span>
                    <span>Speaker</span>
                  </div>
                </div>

                <div className="seniors-indiv-details">
                  <img src={photo} />
                  <div className="seniors-details">
                    <span>Bikash Gurung</span>
                    <span>President</span>
                    <span>RAN</span>
                    <span>Speaker</span>
                  </div>
                </div>

                <div className="seniors-indiv-details">
                  <img src={photo} />
                  <div className="seniors-details">
                    <span>Bikash Gurung</span>
                    <span>President</span>
                    <span>RAN</span>
                    <span>Speaker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
        COPY
        */}
        <div className="event-timeline-container">
          <span className="date">Friday, May 6</span>
          <div className="event-timeline-det">
            <div className="time">1:30 PM</div>
            <div className="det-card">
              <h5>Yantra Workshops & Seniors</h5>
              <p>
                Artificial Intelligence, Machine Learning, Mechanical Design,
                Basic Robotics Crash courses,Robotics Locomotion, 3D printing
                workshop, Raspberry Pi and Local server workshop, Automation
                using Image Processing
              </p>
              <div className="seniors-section">
                <div className="seniors-indiv-details">
                  <img src={photo} />
                  <div className="seniors-details">
                    <span>Bikash Gurung</span>
                    <span>President</span>
                    <span>RAN</span>
                    <span>Speaker</span>
                  </div>
                </div>

                <div className="seniors-indiv-details">
                  <img src={photo} />
                  <div className="seniors-details">
                    <span>Bikash Gurung</span>
                    <span>President</span>
                    <span>RAN</span>
                    <span>Speaker</span>
                  </div>
                </div>

                <div className="seniors-indiv-details">
                  <img src={photo} />
                  <div className="seniors-details">
                    <span>Bikash Gurung</span>
                    <span>President</span>
                    <span>RAN</span>
                    <span>Speaker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*COPy */}
        {/*
        COPY
        */}
        <div className="event-timeline-container">
          <span className="date">Friday, May 6</span>
          <div className="event-timeline-det">
            <div className="time">1:30 PM</div>
            <div className="det-card">
              <h5>Yantra Workshops & Seniors</h5>
              <p>
                Artificial Intelligence, Machine Learning, Mechanical Design,
                Basic Robotics Crash courses,Robotics Locomotion, 3D printing
                workshop, Raspberry Pi and Local server workshop, Automation
                using Image Processing
              </p>
              <div className="seniors-section">
                <div className="seniors-indiv-details">
                  <img src={photo} />
                  <div className="seniors-details">
                    <span>Bikash Gurung</span>
                    <span>President</span>
                    <span>RAN</span>
                    <span>Speaker</span>
                  </div>
                </div>

                <div className="seniors-indiv-details">
                  <img src={photo} />
                  <div className="seniors-details">
                    <span>Bikash Gurung</span>
                    <span>President</span>
                    <span>RAN</span>
                    <span>Speaker</span>
                  </div>
                </div>

                <div className="seniors-indiv-details">
                  <img src={photo} />
                  <div className="seniors-details">
                    <span>Bikash Gurung</span>
                    <span>President</span>
                    <span>RAN</span>
                    <span>Speaker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*COPy */}

        {/*SLIDER SECTION*/}
        <div className="events-timeline-sliders">
          <div></div>
        </div>
        {/*SLIDER SECTION END*/}
      </div>
    </div>
  );
}

export default EventTimeline;
