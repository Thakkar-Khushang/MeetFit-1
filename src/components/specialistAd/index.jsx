import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Marginer } from "../marginer";

import FarmingImg from "../../images/farming.png";
import { Button } from "../button";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import BootstrapCarousel from './BootstrapCarousel';

const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: #264653;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;


export function SpecialistAd(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <BrandLogo
            logoSize={isMobile ? 33 : 40}
            textSize={isMobile ? 28 : 35}
          />
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <div align="center">
            <Slogan>About Us</Slogan>
            <p>MeetFit is a web app designed especially for women who want to get fit.<br /> Through the web-app they can explore various fitness activities in their locality. <br />Not only does this provide them with an opportunity to connect with other women having the same fitness interest but also form pairs or groups to participate in with them.</p>
            </div>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.8em" />
          <div margin="40%"><BootstrapCarousel></BootstrapCarousel></div>
        </SloganContainer>
      </ContentContainer>
    </SpecialistAdContainer>
  );
}
