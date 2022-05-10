import React from "react";
import "./News.css";
import { BiCalendar } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import Footer from "./Footer";

function News() {
  return (
    <div>
      <div className="news-headersection">
        <h1>Yantra Learning</h1>
      </div>
      <div className="news-section">
        <div className="news-container">
          <div className="news-left-container">
            <div className="news-description-card" data-aos="fade-right">
              <div className="news-image-section"></div>
              <div className="news-description">
                <h3>
                  Real Time Solutions, Knowledge Partner – Yantra 7.0 Science,
                  Tech and Entrepreneurship Festival
                </h3>
                <div className="date-creator">
                  <div>
                    <span>
                      <BiCalendar className="ic" /> April 5, 2022
                    </span>
                  </div>
                  <div>
                    <span>
                      <BiUser className="ic" /> Rabiraj Khadka
                    </span>
                  </div>
                </div>
                <p>
                  New businesses stimulate the fair redistribution of wealth and
                  incomes for the interest of the country through a large
                  population covering a larger geographical area and thus
                  offering benefits to larger sections of society.
                  Entrepreneurship leads to the emergence of secondary
                  activities and therefore allows a multiplier effect in the
                  economy. Education, Science and Technology are backbone for
                  modern economy of any emerging economies. Effective
                  Implementation of Creative and innovative Science and
                  Technology leads to economic prosperity and it’s a need in
                  current situation.
                </p>
                <button>Continue Reading</button>
              </div>
            </div>
          </div>
          <div className="news-right-container">
            <div className="news-headlines-card" data-aos="fade-left">
              <h3>Recent News</h3>
              <div className="news-headline-list">
                <div className="news-indiv-headline">
                  <div className="img-news"></div>
                  <div className="news-headline">
                    <p>Samriddhi Foundation, Knowledge....</p>
                    <span>April 5, 2022</span>
                  </div>
                </div>
                <div className="news-indiv-headline">
                  <div className="img-news"></div>
                  <div className="news-headline">
                    <p>Samriddhi Foundation, Knowledge....</p>
                    <span>April 5, 2022</span>
                  </div>
                </div>
                <div className="news-indiv-headline">
                  <div className="img-news"></div>
                  <div className="news-headline">
                    <p>Samriddhi Foundation, Knowledge abcdef</p>
                    <span>April 5, 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default News;
