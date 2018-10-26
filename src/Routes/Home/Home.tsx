import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import higher from "../../img/higher.png";
import lower from "../../img/lower.png";

const HomeContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://media.giphy.com/media/7bBOWS03YeJi/giphy.gif");
  background-size: 100% auto;
  background-position: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainTitleImgContainer = styled.div`
  display: flex;
  font-size: 40px;
`;

interface IMainTitleImg {
  dir: "UP" | "DOWN";
}
const MainTitleImg = styled<IMainTitleImg, any>("img")`
  width: 250px;
  height: 140px;
  font-weight: bolder;
  margin: 0px 10px 30px;
  animation: float 6s ease-in-out infinite;
  /* font-family: "Nanum Myeongjo", serif; */
  @keyframes float {
    0% {
      -webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 1));
      filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 1));
      transform: translatey(0px);
    }
    50% {
      -webkit-filter: drop-shadow(0 25px 15px rgba(0, 0, 0, 0.5));
      filter: drop-shadow(0 25px 15px rgba(0, 0, 0, 0.5));

      transform: ${props =>
        props.dir === "UP" ? "translatey(20px)" : "translatey(-20px)"};
    }
    100% {
      -webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 1));
      filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 1));
      transform: translatey(0px);
    }
  }
`;

const ExplainTitle = styled.div`
  font-weight: bolder;
  font-size: 27px;
  margin-bottom: 15px;
`;

const ExplainSubtitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ExplainAdditional = styled.div`
  opacity: 0.5;
  font-size: 12px;
`;

const StartButton = styled.div`
  font-size: 25px;
  padding: 15px 25px;
  border-radius: 100px;
  border: 2px solid white;
  margin: 15px 0;
  transition: 0.2s ease;
  &:hover {
    color: black;
    background-color: white;
  }
`;

const SuggestionButton = styled.div`
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
`;

class Home extends React.Component<any, any> {
  public render() {
    return (
      <HomeContainer>
        <MainTitleImgContainer>
          <MainTitleImg dir={"UP"} src={higher} />
          <MainTitleImg dir={"DOWN"} src={lower} />
        </MainTitleImgContainer>
        <ExplainTitle>어떤 것이 검색이 더 많이 됐을까요?</ExplainTitle>
        <ExplainSubtitle>
          구글 검색량을 이용한 중독성 넘치는 검색량 비교 게임!
        </ExplainSubtitle>
        <ExplainAdditional> * 자료는 2018년 10월 기준입니다</ExplainAdditional>
        <Link to={"/game"}>
          <StartButton>게임 시작!</StartButton>
        </Link>
        <SuggestionButton
          onClick={() =>
            window.open(
              "mailto:leegun2003@gmail.com?subject=주제어 제안&body=주제어: , 이유: "
            )
          }
        >
          메일로 검색어를 제안해주세요!
        </SuggestionButton>
      </HomeContainer>
    );
  }
}

export default Home;