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

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      {new Date().getFullYear()}
      <Link color="inherit">Newstreet. All Rights Reserved.</Link> {"."}
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
const handleArrowClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        minHeight="100vh"
      >
        <CssBaseline />
        <Grid
          component="footer"
          container
          py={3}
          px={2}
          rowSpacing={1}
          columnSpacing={{ xs: 2, sm: 3, md: 6 }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Grid item sx={{ justifyContent: "flex-start" }}>
            <img src={LogoImg} className="logo1" alt="logo of sitemark" />
          </Grid>
          <Grid item>
            <Typography variant="h6">Quick Links</Typography>
            {quickLinks.map((link) => (
              <Grid item key={link.label} sx={{ justifyContent: "center" }}>
                <Link
                  href={link.path}
                  color="textPrimary"
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
                <Link
                  href={link.path}
                  color="textPrimary"
                  onClick={() => navigate(link.path)}
                >
                  {link.label}
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            India <br />
            <Typography>+91 80 4371 1712</Typography>
            <Typography>careers@newstreettech.com</Typography>
          </Grid>
          <Grid item>
            UAE <br />
            <Typography>+971 55 9298 123</Typography>
            <Typography>info@newstreettech.com</Typography>
          </Grid>
          <Grid item>
            Social Media <br />
            <a href="https://www.linkedin.com/company/newstreettech">
              <LinkedInIcon />
            </a>
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
        >
          <Grid item>
            <Copyright />
          </Grid>
          <Grid item>
            <Typography variant="body2">
              Privacy and Policy <ArrowUpwardIcon onClick={handleArrowClick} />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
