import React from "react";
import styled from "styled-components";

const BackgroundImgae = styled.div`
  margin: 0;
  padding: 0;
  z-index: -1;
  transition: transform 0.3s ease-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
`;

const BackgroundOverlay = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-image: url(${(props) => props.url});
  background-size: 100% 100%;
  opacity: 1;
  transition: opacity 0.3s ease-out;
`;

const Background = ({ url }) => {
  return (
    <div>
      <BackgroundImgae url={url} />
      <BackgroundOverlay url="/overlay.png" />
    </div>
  );
};

export default Background;
