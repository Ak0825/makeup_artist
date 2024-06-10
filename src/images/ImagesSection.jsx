import React, { useState } from "react";
import one from "../assets/s1.jpg";
import two from "../assets/s2.jpg";
import three from "../assets/s3.jpg";
import four from "../assets/s4.jpg";
import five from "../assets/s5.jpg";
import six from "../assets/s6.jpg";
import { Modal, Box, IconButton } from "@mui/material";
import { Close, ZoomIn } from "@mui/icons-material";
import "./image.css";
import Layout from "../components/Layout";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ImagesSection = () => {
  const images = [one, two, three, four, five, six];

  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage(null);
  };
  return (
    <Layout>
      <div
        id="portfolio"
        className="row project-area bg-color-2 area-padding-2 back"
        style={{
          padding:'120px 0'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline white-headline text-center">
                <span className="top-head">Gallery</span>
                <h3>My portfolio</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!-- single-project start --> */}
            {images.map((photo, index) => (
              <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a
                      class="venobox vbox-item"
                      data-gall="myGallery" 
                      onClick={() => handleOpen(photo)}
                    >
                      <img
                        src={photo}
                        alt=""
                        onClick={() => handleOpen(photo)}
                      />
                       
                      <ZoomIn className="i"  onClick={() => handleOpen(photo)}/>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <Modal open={open} onClose={handleClose}>
              <Box sx={modalStyle}>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <Close />
                </IconButton>
                <img
                  src={currentImage}
                  alt=""
                  style={{ maxWidth: "100%", maxHeight: "80vh" }}
                />
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImagesSection;
