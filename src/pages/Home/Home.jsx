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
      whileTap={{ scale: 0.95 }} // Define tap effect
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
  const text =
    "If you want something new, you have to stop doing something old.".split(
      " "
    );
  const author = "~Peter F. Drucker".split();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg">
      <Header />
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [1, 1],
        }}
        transition={{
          duration: 5,
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
          opacity: [0, 1, 1, 0],
          scale: [1, 1],
        }}
        transition={{
          duration: 5,
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
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          elevation={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Center vertically
          }}
        >
          <motion.div
            style={{
              width: 150,
              height: 150,
              borderRadius: 30,
              backgroundColor: "#fff",
            }}
            animate={{ rotate: 90 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </Grid>

        <Grid
          item
          xs={0}
          sm={6}
          md={6}
          sx={{
            flexWrap: "wrap",
          }}
        ></Grid>
      </Grid>
      <Footer />
    </div>
  );
}
export default Home;
