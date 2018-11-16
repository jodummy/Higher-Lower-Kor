import React from "react";
import styled from "styled-components";
import { media } from "src/config/_mixin";

const FixContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  line-height: 40px;
`;

const SuggestionButton = styled.div`
  margin-top: 15px;
  cursor: pointer;
  animation: floatbutton 3s ease-in-out infinite;
  @keyframes floatbutton {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(5px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  transition: 1s ease;
  font-size: 15px;
  ${media.desktop`  
    font-size: 12px;
  `};
`;

class Fix extends React.Component {
  public render() {
    return (
      <FixContainer>
        <Message>
          <div>
            제작자가 돈이 없어서 트래픽을 견디지 못해 잠시 닫아둡니다...
          </div>
          <div>이용해주셔서 감사했습니다</div>

          <SuggestionButton
            onClick={() =>
              window.open(
                "mailto:leegun2003@gmail.com?subject=주제어 제안&body=보내시는 분: 건의 내용: 관심 가져주셔서 감사합니다."
              )
            }
          >
            검색어 제안, 오류 신고, 건의 사항은 계속 받습니다.
          </SuggestionButton>
        </Message>
      </FixContainer>
    );
  }
}

export default Fix;
