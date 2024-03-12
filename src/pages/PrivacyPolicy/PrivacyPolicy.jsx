import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./PrivacyPolicy.scss";
function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Typography>
          <Typography className="TextHead">Privacy Policy:</Typography>
          <br></br>
          <Typography className="TextPara">
            New Street Technologies Private Limited and its group of companies
            (hereinafter referred to as “New Street”) are committed to
            respecting your privacy and your choices while using our website.
            For the purposes of this Privacy statement “Personal Information” is
            any data which relates to an individual who may be identified from
            that data, or from a combination of a set of data, that may be in
            the possession of New Street. You may browse our website without
            providing any personal information about yourself. However, certain
            information, such as your IP address, your computer operating
            system, and browser type may be collected to provide a better user
            experience.
          </Typography>
          <br />
          <Typography className="TextHead">
            <br />
            Registration:
          </Typography>
          <br />
          <Typography className="TextPara">
            When you register on our website or comment on our content, we may
            require you to provide us with certain personal information such as
            your name, email address, company name to grant access to our
            website and/or to contact you.
          </Typography>
          <br />
          <Typography className="TextHead"> Cookies:</Typography>
          <br />{" "}
          <Typography className="TextPara">
            Cookies are small text files that will reside in the device that you
            use to access our website. Like most other websites, we use this
            information to provide you a better experience by recognizing your
            device during a session or in your future visits to our website.
          </Typography>{" "}
          <br />
          <Typography className="TextHead"> Data Security:</Typography>
          <br />{" "}
          <Typography className="TextPara">
            New Street adopts reasonable and appropriate security practices and
            procedures that include administrative, physical security, and
            technical controls to safeguard your Personal Information. New
            Street may retain your Personal Information as long as there is a
            business requirement or if otherwise required under applicable laws.
            New Street does not share your Personal Information with third
            parties for marketing purposes without your prior permission. New
            Street will seek your consent prior to using or sharing Personal
            Information for any purpose beyond that for which it was originally
            collected. New Street may share your Personal Information with any
            of its group companies, business partners, service vendors,
            authorized third-party agents, or contractors located in any part of
            the world for the purposes of data processing, storage, or to
            provide a requested service or transaction, after ensuring that such
            entities are contractually bound by data privacy obligations.
          </Typography>
          <br />{" "}
          <Typography className="TextHead">Third-party Links:</Typography>
          <br />
          <Typography className="TextPara">
            {" "}
            New Street may provide links to third-party websites; however, New
            Street is not responsible for the privacy statements, practices, or
            contents of such third-party websites.
          </Typography>
          <br />
          <Typography className="TextHead"> Policy Updates:</Typography>
          <br />{" "}
          <Typography className="TextPara">
            New Street may periodically change data privacy practices and update
            this Privacy Statement. Any revised Privacy Statement will be made
            available on this website.
          </Typography>
          <br />
          <Typography className="TextHead"> Grievance Redressal:</Typography>
          <br />
          <Typography className="TextPara">
            {" "}
            Grievances or complaints related to the processing of information
            can be sent to New Street at: info@newstreettech.com
          </Typography>{" "}
          <br />
          <Typography className="TextHead">Opt Out:</Typography>
          <br />{" "}
          <Typography className="TextPara">
            If you want to deactivate your account or remove your information at
            any time, please send a request to info@newstreettech.com
          </Typography>
        </Typography>
      </Container>
      <Footer />
    </div>
  );
}
export default PrivacyPolicy;
