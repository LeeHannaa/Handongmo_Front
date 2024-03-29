/* eslint-disable react/prop-types */
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ToggleContainer = styled.div`
  position: relative;
  /* width: 160px; */
  cursor: pointer;

  font-size: 10px;

  > .toggle-container {
    width: 80px;
    height: 30px;
    border-radius: 30px;
    background-color: gray;
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현

  > .toggle-circle {
    position: absolute;
    top: 5px;
    left: 6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: 0.5s;

    background-color: rgba(244, 240, 231, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 55px;
    transition: 0.5s;
  }
`;

const InOut = styled.div`
  > .fadeout {
    animation: ToggleFadeOut 0.5s forwards;
    @keyframes ToggleFadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
  > .fadein {
    animation: ToggleFadeIn 1s;
    @keyframes ToggleFadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const In = styled.div`
  position: absolute;
  top: 8px;
  right: 20px;
`;

const Out = styled.div`
  position: absolute;
  top: 8px;
  left: 11px;
`;

export default function ToggleBtn({ isOn, toggleHandler }) {
  return (
    <Main>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`}>
          <InOut>
            <Out className={`${isOn ? "fadein" : "fadeout"}`}>리크루팅</Out>
            <In className={`${isOn ? "fadeout" : "fadein"}`}>전체</In>
          </InOut>
        </div>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}></div>
      </ToggleContainer>
    </Main>
  );
}
