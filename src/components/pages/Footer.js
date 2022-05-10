import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { StyleSharp } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media-container">
        <FaFacebookF className="icons" />
        <FaLinkedinIn className="icons" />
        <FaTwitter className="icons" />
        <AiOutlineMail className="icons" />
      </div>
      <div className="footer-mid">
        <span>Terms & Conditions</span>
        <span
          style={{
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {" "}
          |{" "}
        </span>
        <span>Code of Conduct</span>
        <span
          style={{
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {" "}
          |{" "}
        </span>

        <span>Event Privacy Note</span>
      </div>
      <span style={{ marginTop: "10px" }}>
        {" "}
        &copy; 2022 Robotics Association of Nepal. Al Rights Reserved
      </span>
    </div>
  );
}

export default Footer;
