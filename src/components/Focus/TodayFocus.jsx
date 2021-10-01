import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as S from "./Focus.style";
import FocusDropdownItem from "./FocusDropdownItem";
import { ROLE_ADD, ROLE_CLEAR, ROLE_EDIT } from "../../constants/etc";
import {
  LS_FOCUS_CHECKED,
  CHECKED_TRUE,
  CHECKED_FALSE,
} from "../../constants/localStorage";
import { DISPLAY_FLEX, DISPLAY_NONE } from "../../constants/css";
import { CgMoreAlt } from "react-icons/cg";
import { IoMdCheckboxOutline, IoMdSquareOutline } from "react-icons/io";

const TodayFocus = () => {
  const focus = useSelector((state) => state.focus);

  const [checked, setChecked] = useState(
    localStorage.getItem(LS_FOCUS_CHECKED) ? true : false
  ); // focus 체크박스 체크 여부
  const [moreClicked, setMoreClicked] = useState(false); // focus 우측의 more 버튼 클릭 여부. 클릭했을 때 dropdown 보이기 위함
  const moreContainerRef = useRef(); // more 버튼 영역 컨테이너

  // focus가 체크됐을 때는 hover 상태가 아니어도 체크박스가 보이도록
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
    <S.FocusContainer>
      <S.FocusTitle>TODAY</S.FocusTitle>
      <S.FocusContent>
        <S.SideDiv side="left">
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
        <S.SideDiv side="right">
          <S.MoreContainer ref={moreContainerRef}>
            <S.MoreIconWrapper>
              <S.OpacitySpan
                onClick={handleClickMore}
                display={moreClicked ? DISPLAY_FLEX : DISPLAY_NONE}
                title="More"
              >
                <CgMoreAlt />
              </S.OpacitySpan>
            </S.MoreIconWrapper>
            <S.Dropdown visible={moreClicked}>
              <S.Ul>
                <S.Li>
                  {checked ? (
                    <FocusDropdownItem role={ROLE_ADD} />
                  ) : (
                    <FocusDropdownItem role={ROLE_EDIT} />
                  )}
                </S.Li>
                <S.Li>
                  <FocusDropdownItem role={ROLE_CLEAR} />
                </S.Li>
              </S.Ul>
            </S.Dropdown>
          </S.MoreContainer>
        </S.SideDiv>
      </S.FocusContent>
    </S.FocusContainer>
  );
};

export default TodayFocus;
