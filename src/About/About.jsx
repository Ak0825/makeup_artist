import React from "react";
import about_img from "../assets/About.jpg";
import Layout from "../components/Layout";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div
        className="row home_back text-light"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline white-headline text-center">
              <span className="top-head">About</span>
              <h3>About</h3>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-5 col-12">
            <img src={about_img} alt="" width={400} className="rounded" />
          </div>
          <div className="col-md-7 col-12 py-4">
            <p className=" px-5 text-start fs-5">
              Welcome to my world of artistry and transformation! I’m Lata
              Prabhakar, a passionate makeup artist dedicated to enhancing
              natural beauty and bringing creative visions to life.I specialize
              in everything from elegant bridal looks to bold editorial styles.
            </p>
            <p className="px-5 text-start fs-5">
              My journey into makeup artistry began with a love for color,
              texture, and the profound confidence a great makeup look can
              inspire. I believe that makeup is more than just a tool for
              beauty—it's a form of self-expression and empowerment. Each face I
              work on is a unique canvas, and I strive to highlight
              individuality while catering to personal preferences and the
              occasion's needs.
            </p>
            <div className="text-start px-5">
              <Button
                id="button"
                onClick={() => navigate("/contact")}
                sx={{
                  width: "150px !important",
                }}
              >
                Contact Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
