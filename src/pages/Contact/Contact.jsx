import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import bgimg from "./Asssets/2776789.jpg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import "./Contact.scss";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

function Contact() {
  return (
    <div className="bg">
      <div className="contact-container">
        <Header />
        <img src={bgimg} className="bg-img" alt="Background" />
        <Grid container component="main" sx={{ height: "50vh" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            elevation={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <div className="icon-circle">
                <PlaceIcon className="icon-location" />
              </div>
              <Typography className="TextFont-Contact"> ADDRESS</Typography>
            </div>
            <br />
            <div className="text-align-location">
              <Typography className="TextFont-Contact">
                New Street Technologies-Center of Excellence
                <br /> #3, First Floor, First Main, <br />
                BDA Layout, HAL 2nd Stage, Kodihalli
                <br /> Bengaluru - 560008 Karnataka, India
              </Typography>
              <br />
              <Typography className="TextFont-Contact">
                New Street Tech Middle East FZCO <br /> 2W M081 , DAFZA, PO Box
                371572, Dubai, UAE
                <br /> Bengaluru - 560008 Karnataka, India
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            elevation={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <div className="icon-circle">
                <PhoneInTalkIcon className="icon-location" />
              </div>
            </div>
            <Typography className="TextFont-Contact"> Phone</Typography>
            <br />

            <div className="text-align-location">
              <Typography className="TextFont-Contact">
                +91 80 4371 1712 -Karnataka-India
              </Typography>
              <br />
              <Typography className="TextFont-Contact">
                +971 55 9298 123 - Dubai,UAE
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            elevation={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <div className="icon-circle">
                <EmailIcon className="icon-location" />
              </div>
            </div>
            <Typography className="TextFont-Contact">
              {" "}
              Email and Social Media
            </Typography>
            <br />
            <div className="text-align-location">
              <Typography className="TextFont-Contact">
                careers@newstreettech.com
              </Typography>
              <br />
              <Typography className="TextFont-Contact">
                info@newstreettech.com
              </Typography>
            </div>
            <br />
            <div>
              <a href="https://www.linkedin.com/company/newstreettech">
                <LinkedInIcon color="error" />
              </a>{" "}
              <a href="https://twitter.com/New_Street_Tech">
                <XIcon color="error" />
              </a>
            </div>
          </Grid>
        </Grid>
        <Grid container> adwfaa</Grid>
        <Footer />
      </div>
    </div>
  );
}
export default Contact;
