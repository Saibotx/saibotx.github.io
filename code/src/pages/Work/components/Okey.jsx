//Import Packages
import React from "react";
import styled, { css } from "react-emotion";
import Parallax from "react-springy-parallax";

//Import Core
import _Button from "core/Button.jsx";

//Import Assets
import okeyImac from "assets/okeyImac.png";
import okeywatch from "assets/okeywatch.png";
import okeyphone from "assets/okeyphone.png";
import okeyLogo from "assets/okeyLogo.png";

const ParallaxFlex = styled(Parallax.Layer)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 550px) {
    ${"" /* flex-direction: column; */} justify-content: center;
  }
`;

const BrowserWindow = styled("div")`
  width: ${props => (props.main ? "45%" : "38%")};
  max-width: 700px;
  text-align: center;
  margin-top: -25vh;
  @media (max-width: 550px) {
    width: 75%;
    ${"" /* margin-top: -15vh; */} padding: 10% 0 10% 0;
    ${props =>
      props.main &&
      `width:90%;`} ${"" /* ${props =>
        !props.main && `display:none;`}; */};
  }
`;

const Desc = styled(BrowserWindow)`
  padding-bottom: 30px;
  width: 50%;
  margin-top: 100vh;
  transform: translateY(-50%);
  display: block !important;
`;

const workText = css`
  color: white;
  opacity: 1;
  text-shadow: 0px 0px 8px black;
`;

const MobilePhoneImg = styled("img")`
  width:20vw;
  margin-top: 20vh;
  max-width: 150px;
  ${props =>
    props.left && "width:30vw;max-width:260px;margin-top:30vh;"} @media (max-width: 550px) {
    ${props => props.left && "padding-right: 10vh;"} ${props =>
        props.right && "padding-left: 10vh;"} height:auto;
    width: 30vw;
  }
`;

const Okey = (
  <div>
    <ParallaxFlex offset={4} speed={0}>
      <BrowserWindow main>
        <img style={{ width: "100%" }} src={okeyImac} />
      </BrowserWindow>
    </ParallaxFlex>
    <ParallaxFlex offset={4} speed={0.1}>
      <BrowserWindow>
        <MobilePhoneImg left src={okeywatch} />
      </BrowserWindow>
      <BrowserWindow>
        <MobilePhoneImg right src={okeyphone} />
      </BrowserWindow>
    </ParallaxFlex>

    <ParallaxFlex offset={4} speed={0.9}>
      <Desc>
        <img style={{ width: "80%", maxWidth: 250 }} src={okeyLogo} />
        <h3 className={workText} style={{ marginTop: 5 }}>
          Founder, CEO, Lead Engineer
        </h3>
        <h4 className={workText}>
          Over a few short months, Okey was built natively on Android, iOS,
          Apple Watch and OSX. Our products had a combined 30,000 downloads and
          raised nearly $100k in investment money. I was handled all the
          business, fund raising and built the mobile and web apps.
        </h4>
        <a target="_blank" href="https://okeytest.herokuapp.com/">
          <_Button shadow color="light">
            See Live
          </_Button>
        </a>
      </Desc>
    </ParallaxFlex>
  </div>
);

export default Okey;
