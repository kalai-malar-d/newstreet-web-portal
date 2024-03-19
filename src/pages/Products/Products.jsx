import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Products.scss";
import { motion } from "framer-motion";
import bg from "./Assets/20215.jpg";
import logo from "./Assets/Screenshot 2024-03-14 223558.png";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import bg1 from "./Assets/image (3).png";

const transition = {
  duration: 1.5,
};

const summary = `
Proprietary blockchain ecosystem on Hyperledger
Bank-grade security (VAPT by regulator approved agencies)
ISO 9001 & ISO 27001 certified
Multi-party scalability
Independent node within individual firewalls
Distributed process optimization mechanism
Low-touch multi-channel integration with core (banking) systems
User configurable Smart Contracts to enable complex product rules
Expansive Data Lake
AI based customizable multi-medium Dashboards
`;
const summary2 = `
Originate customers
Complete KYC
Underwrite loans
Complete documentation
Open accounts
Disburse payments
Manage collections
Meet reporting requirements
Manage billing and settlement
`;
function Products() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const points = summary.split("\n").filter((point) => point.trim() !== "");
  const points2 = summary2
    .split("\n")
    .filter((points2) => points2.trim() !== "");

  return (
    <div className="bg">
      <Header />
      <div>
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
            ease: "easeIn",
          }}
        >
          <img src={bg} className="background-image"></img>{" "}
        </motion.div>

        <div className="image-text-products">
          <div className="TextFont-Products">
            <motion.div
              layout
              transition={transition}
              onClick={() => setIsOpen1(!isOpen1)}
              style={{
                backgroundColor: "black",
                padding: 40,
                overflow: "hidden",
                maxWidth: 500,
              }}
            >
              {isOpen1 ? (
                <motion.div layout="position" transition={transition}>
                  <img src={logo} className="logo"></img>
                  <br />
                  MIFIX-Multi-interface financial exchange for the banking and
                  financial services industry <br />
                  <br />
                  {points.map((point, index) => (
                    <p key={index}>
                      <StarOutlineIcon
                        viewBox="0 0 30 15"
                        sx={{ color: "red" }}
                      />
                      {point}
                    </p>
                  ))}
                </motion.div>
              ) : (
                <motion.div layout="position" transition={transition}>
                  <img src={logo} className="logo"></img>
                  <br />
                  MIFIX-Multi-interface financial exchange for the banking and
                  financial services industry <br />
                  <br />
                  <p>Click to Learn More</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: [0.3, 1, 1, 0.3],
            scale: [1, 1],
          }}
          transition={{
            duration: 5,
            delay: 1,
            repeat: Infinity,
            ease: "easeIn",
          }}
        >
          <img src={bg1} className="background-image"></img>{" "}
        </motion.div>

        <div className="image-text2-products">
          <div className="TextFont-Products">
            <motion.div
              layout
              transition={transition}
              onClick={() => setIsOpen2(!isOpen2)}
              style={{
                backgroundColor: "black",
                padding: 40,
                overflow: "hidden",
                maxWidth: 500,
              }}
            >
              {isOpen2 ? (
                <motion.div layout="position" transition={transition}>
                  <img src={logo} className="logo"></img>
                  <br />
                  Banking on MIFIX <br />
                  It Connects Banks||NBFCs||Other FLs
                  <br />
                  <br /> seamlessly with <br />
                  <br />
                  Customers Business ||Correspondents || DSAs||Field
                  Officers||Branches||3rd Party Partners
                  <br />
                  <br />
                  to
                  <br />
                  <br />
                  {points2.map((point, index) => (
                    <p key={index}>
                      <StarOutlineIcon
                        viewBox="0 0 30 15"
                        sx={{ color: "red" }}
                      />
                      {point}
                    </p>
                  ))}
                </motion.div>
              ) : (
                <motion.div layout="position" transition={transition}>
                  <img src={logo} className="logo"></img>
                  <br />
                  Banking on MIFIX <br />
                  It Connects Banks||NBFCs||Other FLs
                  <br />
                  <br />
                  <p>Click to Learn More</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
