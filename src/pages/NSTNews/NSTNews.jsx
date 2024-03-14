import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./NSTNews.scss";
import { Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Apconfig() {
  const [photos, setPhotos] = useState([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(2);
  const url = "https://nst-website-api.onrender.com/api/v1/news/";

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
        onClick={handleViewMore}
      >
        <Typography className="button-font-nstnews">View More</Typography>
      </motion.button>
    );
  };

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
    setVisibleNewsCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="App">
      <Grid container sx={{ justifyContent: "space-around" }}>
        {photos.slice(0, visibleNewsCount).map((data, index) => (
          <div key={index} className="tile">
            <img src={data.imageUrl} alt="Tile Image"></img>
            <div className="text">
              <h1>{data.title}</h1>
              <p className="animate-text">{data.description}</p>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        ))}
      </Grid>
      {photos.length > visibleNewsCount && (
        <AnimatedButton onClick={handleViewMore} />
      )}
    </div>
  );
}

function NstNews() {
  const text =
    "There are no secrets to success. It is the result of preparation, hard work and learning from failure.".split(
      " "
    );
  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <div className="TextFont-news">
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
      </div>
      <Apconfig />
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default NstNews;
