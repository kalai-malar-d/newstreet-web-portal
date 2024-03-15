import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./NSTNews.scss";
import { Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import bg from "./Assets/V1-01092021-honeycomb-futuristic-desktop-HD.png";

function Apconfig({ photos, visibleNewsCount, handleViewMore }) {
  return (
    <div className="App">
      <Grid container sx={{ justifyContent: "space-around" }}>
        {photos.slice(0, visibleNewsCount).map((data, index) => (
          <div key={index} className="tile">
            <img src={data.imageUrl} alt="Tile Image"></img>
            <div className="text">
              <h1>{data.title}</h1>
              <p className="animate-text">{data.description}</p>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
}

function NstNews() {
  const [photos, setPhotos] = useState([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(1);
  const url = "https://nst-website-api.onrender.com/api/v1/news/";

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Oh no! Fetch failed");
      }
      const data = await res.json();

      setPhotos(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleViewMore = () => {
    setVisibleNewsCount((prevCount) => prevCount + 1);
  };

  const AnimatedButton = () => {
    return (
      <motion.button
        className="button-neednstnews"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: [null, 1.2, 1.1] }}
        style={{
          backgroundColor: "red",
          height: "10",
          width: "300px",
          color: "white",
          padding: "10px 20px",
          borderRadius: "200px",
          cursor: "pointer",
          margin: "0 auto",
          display: "block",
        }}
        onClick={handleViewMore}
      >
        <Typography className="button-font-nstnews">View More</Typography>
      </motion.button>
    );
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <img src={bg} className="background-image"></img>
      <div className="image-text-news">
        <Container className="TextFont-news" maxWidth="sm">
          {"There are no secrets to success. It is the result of preparation, hard work and learning from failure."
            .split(" ")
            .map((el, i) => (
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
        </Container>
        <br />
        <br />
        <Container className="TextFont-news" maxWidth="sm">
          {"Here are the result of that hardwork and failures making achievements Here NST proudly presents"
            .split(" ")
            .map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10 + 2,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
        </Container>
        <br />
        <br />
        <Apconfig
          photos={photos}
          visibleNewsCount={visibleNewsCount}
          handleViewMore={handleViewMore}
        />
        <br />
        <br />
        {photos.length > visibleNewsCount && <AnimatedButton />}
      </div>
      <Footer />
    </div>
  );
}
export default NstNews;
