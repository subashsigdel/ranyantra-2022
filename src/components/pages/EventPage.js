import React from "react";
import "./Event.css";
import logoPDF from "../../images/pdflogo.png";
import Footer from "./Footer";

function EventPage() {
  return (
    <div>
      <div className="event-headersection">
        <h1>Yantra Learning</h1>
        <button>REGISTER NOW</button>
      </div>

      {/* event desctiption section */}
      <div className="event-section">
        <div className="event-container">
          <div className="event-logo">
            <img src="https://i0.wp.com/yantra7.ran.org.np/wp-content/uploads/2018/10/featurephoto_yantraIRC.png?w=672&ssl=1" />
          </div>
          <div className="event-description">
            <p>
              New businesses stimulate the fair redistribution of wealth and
              incomes for the interest of the country through a large population
              covering a larger geographical area and thus offering benefits to
              larger sections of society. Entrepreneurship leads to the
              emergence of secondary activities and therefore allows a
              multiplier effect in the economy. Education, Science and
              Technology are backbone for modern economy of any emerging
              economies. Effective Implementation of Creative and innovative
              Science and Technology leads to economic prosperity and it’s a
              need in current situation. Blend of Entrepreneurship with Science
              and Technology creates a mechanism for the exploration of
              creativity, innovation, protection of talented scientist and
              engineers, exponential growth of application based research. Thus,
              opening an opportunity for social, economical, environmental,
              educational growth of the country. This proposal will create first
              of a kind Nepal-wide platform where scientists, engineers, IT
              professionals, students working in the field of Robotics get an
              opportunity not only to learn entrepreneurial concepts but develop
              innovative projects & products based on UN Sustainable Development
              Goals (SDGs) focused on Agriculture, Tourism, Manufacturing
              Industry, Humanitarian and Medical services. This project in turn
              aspires to initiate the science and tech based entrepreneurship in
              Nepal and bring together all related stakeholders to work towards
              this goal by initiating RoboBusiness Cup – Creating Robotics
              Industry in Nepal.
            </p>
          </div>
        </div>
        <div className="pdf-section">
          <div className="pdf-download-section">
            <div>
              <img src={logoPDF} />
              <span>Yantra Learning Theme</span>
            </div>
            <button>Download</button>
          </div>
        </div>

        <div className="event-description2">
          <p>
            Robo Business Cup is a national event focused on creating next step
            platform for innovative and creative science & technology community
            working in the field of robotics which empowers engineers, makers,
            tinkerers, dreamers and start-ups to start their own business in
            this innovative changing world. A competitive gathering where they
            test their technological skills, reasoning capacity, innovations,
            research and findings thus promoting core values such as Creativity,
            Collaboration, Critical thinking and Communication by pitching their
            project/product to the leading business entrepreneurs, policy
            makers, government representatives. Their innovative project &
            products will address local challenges and support in gradual growth
            of industry, Innovation and infrastructure.
          </p>
        </div>

        <div className="event-highlights">
          <span className="heading">Highlights of Yantra Learning:</span>
          <ul>
            <li>
              Robo Business Cup is a national event focused on creating next
              step platform for innovative and creative science & technology
              community
            </li>
            <li>
              Robo Business Cup is a national event focused on creating next
              step platform for innovative and creative science & technology
              community
            </li>
            <li>
              Robo Business Cup is a national event focused on creating next
              step platform for innovative and creative science & technology
              community
            </li>
            <li>
              Robo Business Cup is a national event focused on creating next
              step platform for innovative and creative science & technology
              community
            </li>
            <li>
              Robo Business Cup is a national event focused on creating next
              step platform for innovative and creative science & technology
              community
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventPage;
