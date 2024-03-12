import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LogoImg from "../../Assests/image.png";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Copyright() {
  return (
    <Typography variant="body2" className="TextOnly">
      <Link style={{ color: "red" }}>
        Copyright © {new Date().getFullYear()} Newstreet. All Rights Reserved.
      </Link>
    </Typography>
  );
}

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Partners", path: "/partners" },
  { label: "About Us", path: "/aboutus" },
];

const quickLinks2 = [
  { label: "NST News", path: "/nstnews" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const defaultTheme = createTheme();

export default function Footer() {
  const navigate = useNavigate();
  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const privacyclick = () => {
    navigate("/privacypolicy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        className="footer"
      >
        <CssBaseline />
        <Grid
          component="footer"
          container
          py={3}
          px={2}
          rowSpacing={1}
          columnSpacing={{ xs: 2, sm: 3, md: 7 }}
          sx={{
            backgroundColor: "black",
            position: "sticky",
            bottom: 0,
            width: "100%",
            zIndex: 1000,
          }}
        >
          <Grid item sx={{ justifyContent: "flex-start" }}>
            <img src={LogoImg} className="logo1" alt="logo of sitemark" />
          </Grid>
          <Grid item>
            <Typography variant="h6" className="TextOnly">
              Quick Links
            </Typography>
            {quickLinks.map((link) => (
              <Grid item key={link.label} sx={{ justifyContent: "center" }}>
                <PlayArrowIcon viewBox="0 0 30 10" sx={{ color: "red" }} />

                <Link
                  href={link.path}
                  className="TextFont"
                  onClick={() => navigate(link.path)}
                >
                  {link.label}
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <br />
            {quickLinks2.map((link) => (
              <Grid item key={link.label} sx={{ justifyContent: "center" }}>
                <PlayArrowIcon viewBox="0 0 30 10" sx={{ color: "red" }} />
                <Link
                  href={link.path}
                  className="TextFont"
                  onClick={() => navigate(link.path)}
                >
                  {link.label}
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Typography varient="h6" className="TextOnly">
              India
            </Typography>
            <Typography>
              <a className="TextFont" href="tel:+918043711712">
                +91 80 4371 1712
              </a>
            </Typography>
            <Typography>
              <a className="TextFont" href="mailto:careers@newstreettech.com">
                careers@newstreettech.com
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography varient="h6" className="TextOnly">
              UAE
            </Typography>
            <Typography>
              <a className="TextFont" href="tel:+971559298123">
                +971 55 9298 123
              </a>
            </Typography>
            <Typography>
              <a className="TextFont" href="mailto:info@newstreettech.com">
                info@newstreettech.com
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="TextOnly">Social Media</Typography>
            <a href="https://www.linkedin.com/company/newstreettech">
              <LinkedInIcon />
            </a>{" "}
            <a href="https://twitter.com/New_Street_Tech">
              <XIcon />
            </a>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          p={2}
          sx={{ backgroundColor: "black" }}
        >
          <Grid item>
            <Copyright />
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              className="TextFont"
              style={{ color: "red" }}
            >
              <ArrowUpwardIcon
                onClick={handleArrowClick}
                sx={{ justifyContent: "flex-end" }}
              />

              <Link>
                <Typography
                  onClick={privacyclick}
                  className="TextOnly"
                  style={{ color: "red" }}
                >
                  Privacy and Policy
                </Typography>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
