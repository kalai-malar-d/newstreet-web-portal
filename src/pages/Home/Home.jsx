import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import bgimg from "../../Assests/1710246946087.png";
import "./Home.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgimg1 from "../../Assests/1710304225661.png";
import CssBaseline from "@mui/material/CssBaseline";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bgimg2 from "../../Assests/1710345925180.png";
import logo1 from "./Assets/1710390780892.png";
import logo2 from "./Assets/1710390832621.png";
import logo3 from "./Assets/1710390989298.png";
import logo4 from "./Assets/1710391067085.png";
import logo5 from "./Assets/1710391092960.png";
import logo6 from "./Assets/bima.png";
import logo7 from "./Assets/dhan.png";
import logo8 from "./Assets/krypc-300x108.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function Apconfig() {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };
  const [photos, setPhotos] = useState([]);
  const url = "https://nst-website-api.onrender.com/api/v1/testimonials/";
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
      <Slider {...sliderSettings}>
        {photos.map((data) => (
          <Grid container justifyContent="center">
            <div>
              <Grid item xs={10} sm={8} md={6}>
                <Card
                  sx={{
                    maxWidth: 345,
                    bgcolor: "black",
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={logo1}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center"
                    ></Typography>
                    <Typography variant="body2" className="TextFont-Home">
                      {data.message}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </div>
          </Grid>
        ))}
      </Slider>
    </div>
  );
}

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Headlines = () => {
  const headlines = [
    "Can... Blockchain, DApps ...actually impact your business ?",
    "Can... Smart Contracts ...actually impact your business ?",
    "Can... DLT, AI, ML, IOT ...actually impact your business ?",
  ];

  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeadlineIndex(
        (prevIndex) => (prevIndex + 1) % headlines.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div className="TextFont-Home">
      <Typography
        variant={{ xs: "h6", sm: "h5", md: "h4", lg: "h3", xl: "h2" }}
        className="image-text2"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 5,
            delay: 0,
            repeat: Infinity,
          }}
        >
          {headlines[currentHeadlineIndex]}
        </motion.span>
      </Typography>
    </motion.div>
  );
};

// Button component with tap effect
const AnimatedButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      className="button-need"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: [null, 1.2, 1.1] }}
      style={{
        backgroundColor: "red",
        height: "50px",
        width: "300px",
        color: "white",
        padding: "10px 20px",
        borderRadius: "200px",
        cursor: "pointer",
      }}
      onClick={() => navigate("/products")}
    >
      <Typography className="button-font-home">Learn More</Typography>
    </motion.button>
  );
};

function Home() {
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
  const text =
    "If you want something new, you have to stop doing something old.".split(
      " "
    );
  const author = "~Peter F. Drucker".split(" ");
  const heading = "NEW STREET TECH".split(" ");
  const content =
    "Your fast track to the future - leverages these technologies to create and operate Hi-tech Ecosystems that will facilitate powerful re-imagination of your Products, Processes & Partnerships to Deliver Unprecedented & Delightful Customer Experience".split(
      " "
    );
  const quote =
    "Coming together is a beginning, staying together is progress, and working together is success".split(
      " "
    );
  const lastline = "So, waltz into your future via New Street!!!".split(" ");
  const ourpartners = "OUR PARTNERS ALSO OUR GIANTS".split(" ");

  return (
    <div className="bg">
      <Header />
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: [0.3, 1, 1, 0.3],
          scale: [1, 1],
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img className="background-image" src={bgimg} alt="background"></img>
      </motion.div>

      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: [0.3, 1, 1, 0.3],
          scale: [1, 1],
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="image-text3">
          <img
            className="background-image2"
            src={bgimg1}
            alt="background"
          ></img>
        </div>
      </motion.div>
      <motion.div>
        <div className="image-text">
          <Typography className="TextFont-Home">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
            <br />
            {author.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </Typography>
        </div>
      </motion.div>

      <Grid container sx={{ mt: 8, justifyContent: "center" }}>
        <Grid item>
          <AnimatedButton />
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 8, justifyContent: "center" }}>
        <Grid item>
          <Headlines />
        </Grid>
      </Grid>
      <Section>
        <Grid container component="main" sx={{ height: "50vh" }}>
          <CssBaseline />

          <Grid item xs={12} sm={6} md={6} elevation={6}>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 100 }}
              style={{
                transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img
                src={bgimg2}
                style={{
                  maxWidth: "70%",
                  height: "auto",
                  display: "block",
                }}
              ></img>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={0}
            sm={6}
            md={6}
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Typography className="TextFont-Home2">
              {heading.map((el, i) => (
                <motion.span
                  className="head"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
              <br />
              <br />
              {content.map((el, i) => (
                <motion.span
                  className="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: i / 10 + 3,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
              <br />
              <br />
              {quote.map((el, i) => (
                <motion.span
                  className="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: i / 10 + 7,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
              <br />
              <br />
              {lastline.map((el, i) => (
                <motion.span
                  className="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: i / 10 + 9,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Grid container maxWidth={"100%"} justifyContent={"center"}>
        <Section>
          <div className="TextFont-Title">
            {ourpartners.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 5,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
          <br />
          <div className="logobar">
            <div className="logos">
              <div className="logos-slide">
                <img src={logo1} alt="she_com" />
                <img src={logo2} alt="Barstool Store logo" />
                <img src={logo3} alt="Budweiser logo" />
                <img src={logo4} alt="BuzzFeed logo" />
                <img src={logo5} alt="Forbes logo" />
                <img src={logo6} alt="Macy's logo" />
                <img src={logo7} alt="Men's Health logo" />
                <img src={logo8} alt="MrBeast logo" />
              </div>
            </div>
          </div>
        </Section>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container maxWidth={"100%"} justifyContent={"center"}>
        <Typography className="TextFont-Title"> TESTIMONIALS</Typography>
        <br />
        <br />
        <br />
        <Container className="about-us-container">
          <Apconfig />
          <div className="image-text"></div>
        </Container>
      </Grid>
      <br />
      <br />
      <div className="dialog-top">
        <Grid
          container
          height={200}
          direction={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid
            item
            xs={0}
            sm={6}
            md={4}
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Typography className="TextFont-Home" textAlign={"center"}>
              5430389
            </Typography>
            <br />
            <Typography className="TextFont-Home" textAlign={"center"}>
              ___________
            </Typography>
            <br />
            <Typography className="TextFont-Home" textAlign={"center"}>
              Blocks
            </Typography>
          </Grid>
          <Grid item xs={0} sm={6} md={4} className="grid-dialog">
            <Typography className="TextFont-Home" textAlign={"center"}>
              626
            </Typography>
            <br />
            <Typography className="TextFont-Home" textAlign={"center"}>
              ___________
            </Typography>
            <br />
            <Typography className="TextFont-Home" textAlign={"center"}>
              Users
            </Typography>
          </Grid>
          <Grid
            item
            xs={0}
            sm={6}
            md={4}
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Typography className="TextFont-Home" textAlign={"center"}>
              16
            </Typography>
            <br />
            <Typography className="TextFont-Home" textAlign={"center"}>
              ___________
            </Typography>
            <br />
            <Typography className="TextFont-Home" textAlign={"center"}>
              Nodes
            </Typography>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}
export default Home;
