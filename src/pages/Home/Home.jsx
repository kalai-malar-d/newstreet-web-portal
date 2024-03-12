import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Headlines from "./components/Headlines";
import Background from "../../Components/Background/Background";

function Home() {
  return (
    <>
      <Background />
      <Container maxWidth="md">
        <Header />
        <Grid container sx={{ mt: 12, justifyContent: "center" }}>
          <Grid item>
            <Headlines />
          </Grid>
          <Grid item>Learn More</Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
export default Home;
