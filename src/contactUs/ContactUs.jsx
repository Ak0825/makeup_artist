import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import "./contact.css";
import styled from "styled-components";
import Instagram from "../assets/instagram.png";
import whatsApp from "../assets/whatsapp.png";
import Layout from "../components/Layout";

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    color: #d8a557;
  }
  & .MuiFormLabel-root {
    color: #d8a557;
  }
  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: #d8a557;
  }
  &:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: #d8a557;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #d8a557;
  }
  & .MuiInputLabel-root.Mui-focused {
    color: #d8a557;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: #1976d2;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1565c0;
  }
`;

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Layout>
      <div className="back row  " style={{
          padding:'105px 0'
        }}>
        <div className="section-headline white-headline text-center">
          <span className="top-head">Get in touch</span>
          <h3>Contact Us</h3>
        </div>

        <div className="row">
          <div className="col-md-6 col-12 d-flex flex-column gap-2 align-items-center justify-content-center">
            <div className="notification">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <div className="notititle mt-2">Address</div>
              <div className="notibody">
                #571/10 , Sector 4 , Haripur , Panchkula
              </div>
            </div>
            <div className="notification">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <div className="notititle mt-4">Mobile</div>
              <div className="notibody">  <a href="tel:+916239147323">+916239147323</a></div>
            </div>
            <div className="notification">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <div className="notititle mt-4">Social</div>
              <div className="notibody">
                <a
                  href="https://instagram.com/lataprabhakarmakeupartist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Instagram} width={30} />
                </a>
                <a
                  href="https://wa.me/6239147323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2"
                >
                  <img src={whatsApp} width={30} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 cool-12">
            <form onSubmit={handleSubmit(onSubmit)} className="custom-form">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <StyledTextField
                      id="name"
                      size="small"
                      fullWidth
                      label="Name"
                      {...register("name", {
                        required: "Name is required",
                      })}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <StyledTextField
                      id="email"
                      size="small"
                      fullWidth
                      type="email"
                      label="Email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <StyledTextField
                      id="phone"
                      size="small"
                      fullWidth
                      type="tel"
                      label="Phone"
                      {...register("phone", {})}
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <StyledTextField
                      id="subject"
                      size="small"
                      fullWidth
                      label="Subject"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      error={!!errors.subject}
                      helperText={errors.subject?.message}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <StyledTextField
                      id="message"
                      size="small"
                      fullWidth
                      rows={4}
                      multiline
                      label="Message"
                      {...register("message", {
                        required: "Message is required",
                      })}
                      error={!!errors.message}
                      helperText={errors.message?.message}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Button type="submit" variant="contained" id="button">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
