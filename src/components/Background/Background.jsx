import React from "react";
import * as S from "./Background.style";

const Background = ({ url }) => {
  return (
    <div>
      <S.BackgroundImgae url={url} />
      <S.BackgroundOverlay url="/overlay.png" />
    </div>
  );
};

export default Background;
