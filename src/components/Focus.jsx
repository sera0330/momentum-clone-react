import React, { useRef, useState } from "react";
import styled from "styled-components";
import Span from "./Span";
import { CgClose, CgMathPlus, CgMoreAlt } from "react-icons/cg";
import { IoMdCheckboxOutline, IoMdSquareOutline } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";
import { LS_FOCUS_CHECKED } from "../constants/localStorage";

const StyledFocus = styled.div`
  display: flex;
  justify-content: center;
`;

const OpacitySpan = styled.span`
  color: #fff;
  opacity: 0.75;
  font-size: 130%;
  line-height: 1.2;
  margin: 0 10px;
  display: ${(props) => props.display || "none"};
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${StyledFocus}:hover & {
    display: flex;
  }
`;

const SideDiv = styled.div`
  justify-content: center;
  flex: 1 0 50px;
  display: inline-flex;
  align-items: center;
`;

const More = styled.div`
  position: relative;
  display: flex;
`;

const MoreIconWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Dropdown = styled.div`
  display: ${(props) => props.display || "none"};
  position: absolute;
  top: 100%;
  z-index: 100;
  text-align: left;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 8px rgb(0 0 0 / 25%);
`;

const Focus = ({ focus, setFocus, clearFocus }) => {
  const [checked, setChecked] = useState();
  const moreClicked = useRef(false);

  const handleClickCheckbox = () => {
    setChecked(!checked);
  };

  const handleClickClose = () => {
    if (window.confirm("Do you want to delete?")) {
      clearFocus();
    }
  };

  const handleClickMore = () => {};

  return (
    <>
      <StyledFocus>
        <SideDiv>
          <OpacitySpan
            onClick={handleClickCheckbox}
            display={checked ? "flex" : "none"}
          >
            {checked ? <IoMdCheckboxOutline /> : <IoMdSquareOutline />}
          </OpacitySpan>
        </SideDiv>
        <Span size="170%" weight="400" text={focus} />
        <SideDiv>
          <More>
            <MoreIconWrapper>
              <OpacitySpan>
                <CgMoreAlt onClick={handleClickMore} />
              </OpacitySpan>
            </MoreIconWrapper>
            <Dropdown display="">
              <ul>
                <li>
                  <OpacitySpan>
                    {checked ? <CgMathPlus /> : <RiPencilFill />}
                  </OpacitySpan>
                </li>
                <li>
                  <OpacitySpan>
                    <CgClose onClick={handleClickClose} />
                  </OpacitySpan>
                </li>
              </ul>
            </Dropdown>
          </More>
        </SideDiv>
      </StyledFocus>
    </>
  );
};

export default Focus;
