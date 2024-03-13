import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FlippableCard from "./FCard/FCard";
import GroupImg from "./Assets/NST-Centre-of-Excellence.png";
import GroupImg1 from "./Assets/Dhanlaxmi-Bank-Inaugurates-Shecommerz-State-Headquarters-powered-by-New-Street-Tech-1.jpg";
import GroupImg2 from "./Assets/New-Street-Tech-bags-Most-Innovative-Products-by-Emerging-Enterprise-Award-at-the-5th-Edition-of-Emerging-Businesses-Organized-by-BW-Businessworld.jpg";
import GroupImg3 from "./Assets/Untitled-design41.jpg";
import GroupImg4 from "./Assets/enterance.jpg";
import { useState, useEffect } from "react";
import "./AboutUs.scss";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@mui/system/Unstable_Grid/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Apconfig() {
  const [photos, setPhotos] = useState([]);
  const url = "https://nst-website-api.onrender.com/api/v1/about/";
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Oh no! Fetch failed");
      }
      const data = await res.json();

      // Stop fetching after the 10th item
      const slicedData = data.slice(0, 10);

      setPhotos(slicedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Photos</h1>
      <h2>...are here</h2>
      <Grid container sx={{ justifyContent: "space-around" }}>
        {photos.map((data) => (
          <Grid item>
            <FlippableCard key={data.id} photo={data} />
            <br />
            <Typography className="Profiles" color={"white"}>
              {data.title}
              {" || "}
              <a
                href="https://www.linkedin.com/company/newstreettech"
                className="Linkedin"
              >
                <LinkedInIcon viewBox="0 0 20 20" />
              </a>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

function AboutUs() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };
  return (
    <div className="bg">
      <Header />
      <Container className="about-us-container">
        <Slider {...sliderSettings}>
          <div>
            <img src={GroupImg} alt="" className="gpimg" />
          </div>
          <div>
            <img src={GroupImg1} alt="" className="gpimg" />
          </div>
          <div>
            <img src={GroupImg2} alt="" className="gpimg" />
          </div>
          <div>
            <img src={GroupImg3} alt="" className="gpimg" />
          </div>
          <div>
            <img src={GroupImg4} alt="" className="gpimg" />
          </div>
        </Slider>
        <div className="image-text">
          <Typography
            variant={{ xs: "h6", sm: "h5", md: "h4", lg: "h3", xl: "h2" }}
            className="TextOnly"
          >
            "It’s not about ideas. It’s about making ideas happen. Here People
            make Ideas Happen."
          </Typography>
        </div>
      </Container>
      <br />
      <Container className="cardContainer">
        <Apconfig />
        {/* <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          <Grid item>
            <FlippableCard />
            <br />
            <Typography className="TextOnly" color={"white"}>
              Namadawdfagage
            </Typography>
          </Grid>
          <Grid item>
            <FlippableCard /> <br />
            <Typography className="TextOnly" color={"white"}>
              Namadawdfagage
            </Typography>
          </Grid>
          <Grid item>
            <FlippableCard /> <br />
            <Typography className="TextOnly" color={"white"}>
              Namadawdfagage
            </Typography>
          </Grid>
          <Grid item>
            <FlippableCard /> <br />
            <Typography className="TextOnly" color={"white"}>
              Namadawdfagage
            </Typography>
          </Grid>
          <Grid item>
            <FlippableCard />
            <br />

            <Typography className="TextOnly" color={"white"}>
              Namadawdfagage
            </Typography>
          </Grid>
          <Grid item>
            <FlippableCard /> <br />
            <Typography className="TextOnly" color={"white"}>
              Namadawdfagage
            </Typography>
          </Grid>
        </Grid> */}
      </Container>
      <Footer />
    </div>
  );
}

export default AboutUs;
