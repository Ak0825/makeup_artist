import React from "react";
import "./test.css";
import one from "../assets/s1.jpg";
import two from "../assets/s2.jpg";
import three from "../assets/s3.jpg";
import four from "../assets/s4.jpg";
import five from "../assets/s5.jpg";
import six from "../assets/s6.jpg";
import Layout from "../components/Layout";

const ServicesSection = () => {
  return (
    <Layout>
      <div
        id="services"
        className="row services-area bg-color-2 area-padding-2 back text-light "
        style={{
          padding:'120px 0'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline white-headline text-center">
                <span className="top-head">Services</span>
                <h3>Services</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!-- single-Service end--> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-services">
                <div className="main-services">
                  <div className="services-content">
                    <h4>Facial Makeup</h4>
                  </div>
                  <div className="services-image">
                    <img src={one} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single-Service end--> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-services">
                <div className="main-services">
                  <div className="services-content">
                    <h4>Eye Makeup</h4>
                  </div>
                  <div className="services-image">
                    <img src={two} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single-Service end--> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-services">
                <div className="main-services">
                  <div className="services-content">
                    <h4>Hair Styling</h4>
                  </div>
                  <div className="services-image">
                    <img src={three} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single-Service end--> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-services">
                <div className="main-services">
                  <div className="services-content">
                    <h4>Wedding Makeup</h4>
                  </div>
                  <div className="services-image">
                    <img src={four} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single-Service end--> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-services">
                <div className="main-services">
                  <div className="services-content">
                    <h4>Fashion Makeup</h4>
                  </div>
                  <div className="services-image">
                    <img src={five} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single-Service end--> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-services">
                <div className="main-services">
                  <div className="services-content">
                    <h4>Enents Makeup</h4>
                  </div>
                  <div className="services-image">
                    <img src={six} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single-Service end--> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesSection;
