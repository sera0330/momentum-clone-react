import React, { useRef, useState, useEffect } from "react";
import * as S from "./Focus.style";
import { CgClose, CgMathPlus, CgMoreAlt } from "react-icons/cg";
import { IoMdCheckboxOutline, IoMdSquareOutline } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";
import {
  LS_FOCUS_CHECKED,
  CHECKED_TRUE,
  CHECKED_FALSE,
} from "../constants/localStorage";

const Focus = ({ focus, setFocus, clearFocus }) => {
  const LABEL_NEW = "New";
  const LABEL_EDIT = "Edit";
  const LABEL_CLEAR = "Clear";
  const DISPLAY_FLEX = "flex";
  const DISPLAY_NONE = "none";

  const [checked, setChecked] = useState(
    localStorage.getItem(LS_FOCUS_CHECKED) ? true : false
  );
  const [moreClicked, setMoreClicked] = useState();
  const moreContainerRef = useRef();

  useEffect(() => {
    localStorage.setItem(
      LS_FOCUS_CHECKED,
      checked ? CHECKED_TRUE : CHECKED_FALSE
    );
  }, [checked]);

  const handleClickCheckbox = () => {
    setChecked(!checked);
  };

  const handleClickMore = () => {
    setMoreClicked(!moreClicked);
  };

  const handleClickClear = () => {
    clearFocus();
  };

  const handleClickEdit = () => {
    setFocus(null);
  };

  const closeDropdown = () => {
    setMoreClicked(false);
  };

  // more 버튼 외부 클릭 시 드롭다운 닫기
  // refer) https://pythonq.com/so/javascript/5581
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeDropdown();
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(moreContainerRef);

  return (
    <S.StyledFocus>
      <S.SideDiv>
        <S.OpacitySpan
          onClick={handleClickCheckbox}
          display={checked ? DISPLAY_FLEX : DISPLAY_NONE}
        >
          {checked ? <IoMdCheckboxOutline /> : <IoMdSquareOutline />}
        </S.OpacitySpan>
      </S.SideDiv>
      <S.FocusText size="170%" weight="400" checked={checked}>
        {focus}
      </S.FocusText>
      <S.SideDiv>
        <S.MoreContainer ref={moreContainerRef}>
          <S.MoreIconWrapper>
            <S.OpacitySpan
              onClick={handleClickMore}
              display={moreClicked ? DISPLAY_FLEX : DISPLAY_NONE}
            >
              <CgMoreAlt />
            </S.OpacitySpan>
          </S.MoreIconWrapper>
          <S.Dropdown display={moreClicked ? DISPLAY_FLEX : DISPLAY_NONE}>
            <S.Ul>
              <S.Li>
                {checked ? (
                  <S.ItemContainer onClick={handleClickClear}>
                    <S.ItemIconWrapper>
                      <CgMathPlus />
                    </S.ItemIconWrapper>
                    <span>{LABEL_NEW}</span>
                  </S.ItemContainer>
                ) : (
                  <S.ItemContainer onClick={handleClickEdit}>
                    <S.ItemIconWrapper>
                      <RiPencilFill />
                    </S.ItemIconWrapper>
                    <span>{LABEL_EDIT}</span>
                  </S.ItemContainer>
                )}
              </S.Li>
              <S.Li>
                <S.ItemContainer onClick={handleClickClear}>
                  <S.ItemIconWrapper>
                    <CgClose />
                  </S.ItemIconWrapper>
                  <span>{LABEL_CLEAR}</span>
                </S.ItemContainer>
              </S.Li>
            </S.Ul>
          </S.Dropdown>
        </S.MoreContainer>
      </S.SideDiv>
    </S.StyledFocus>
  );
};

export default Focus;
