import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import logoImage from "./assets/image.png";
import "./NavBar.scss";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div id="nav-bar">
      <AppBar
        position="fixed"
        style={{ backgroundColor: "black" }}
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          mt: 0,
        }}
      >
        <Toolbar variant="regular" className="toolbar">
          {" "}
          <img src={logoImage} className="logo" alt="logo of sitemark" />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: "2px",
              px: 2,
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem onClick={() => navigate("/")} sx={{ px: "20px" }}>
                <Typography variant="body2" className="TextFont">
                  Home
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/products")}
                sx={{ p: "20px" }}
              >
                <Typography variant="body2" className="TextFont">
                  Products
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/partners")}
                sx={{ p: "20px" }}
              >
                <Typography variant="body2" className="TextFont">
                  Partners
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate("/aboutus")} sx={{ p: "20px" }}>
                <Typography variant="body2" className="TextFont">
                  About Us
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate("/nstnews")} sx={{ p: "20px" }}>
                <Typography variant="body2" className="TextFont">
                  NST News
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate("/careers")} sx={{ p: "20px" }}>
                <Typography variant="body2" className="TextFont">
                  Careers
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate("/contact")} sx={{ p: "20px" }}>
                <Typography variant="body2" className="TextFont">
                  Contact
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "1px" }}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: "20dvw",
                  p: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                  }}
                />
                <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                <MenuItem onClick={() => navigate("/products")}>
                  Products
                </MenuItem>
                <MenuItem onClick={() => navigate("/partners")}>
                  Partners
                </MenuItem>
                <MenuItem onClick={() => navigate("/aboutus")}>
                  About Us
                </MenuItem>
                <MenuItem onClick={() => navigate("/nstnews")}>
                  NST News
                </MenuItem>
                <MenuItem onClick={() => navigate("/careers")}>
                  Careers
                </MenuItem>
                <MenuItem onClick={() => navigate("/contact")}>
                  Contact
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
