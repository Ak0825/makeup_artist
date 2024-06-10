import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="footer-content">
                  <div className="footer-head">
                    <div className="footer-logo">
                      <a href="#">
                        <img src={logo} alt="" width={100} />
                      </a>
                    </div>
                    <div className="footer-icons">
                      <ul>
                        <li>
                          <a href="#">
                            <FaFacebookF className="icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaInstagram className="icon" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <WhatsApp className="icon" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single footer --> */}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>Contact information</h4>
                    <ul className="footer-contact mt-4">
                      <li>
                        <a href="#"  >
                          <i className="fa fa-skype"></i> Lata Prabhakar
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-envelope"></i> sample@lata.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+916239147323">
                          <i className="fa fa-phone"></i> +916239147323
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- end single footer --> */}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="footer-content last-content">
                  <div className="footer-head">
                    <h4>About Us</h4>
                    <div className="subs-feilds text-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum autem beatae, consequatur debitis laudantium
                      architecto nemo impedit quidem facere officia.
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single footer --> */}
            </div>
          </div>
        </div>
        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright">
                  <p className="">Copyright © 2020 All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
