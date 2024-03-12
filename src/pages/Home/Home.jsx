import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Headlines from "./components/Headlines";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <div className="bg">
      <Header />
      <Typography className="TextFont">
        “If you want something new, you have to stop doing something old.”{" "}
        <br />
        ~Peter F. Drucker
      </Typography>
      <Grid container sx={{ mt: 8, justifyContent: "center" }}>
        <Typography className="TextFont">
          “If you want something new, you have to stop doing something old.”{" "}
          <br />
          ~Peter F. Drucker
        </Typography>
        <Grid item>
          <Headlines />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}
export default Home;
