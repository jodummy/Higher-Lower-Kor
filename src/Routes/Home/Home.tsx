import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import higher from "../../img/logo/higher.png";
import lower from "../../img/logo/lower.png";
import { media } from "src/config/_mixin";
import { Icon, Tooltip } from "antd";

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
  transition: 1s ease;
  ${media.desktop`
    background-size: auto 100% ;
  `};
`;

const MainTitleImgContainer = styled.div`
  display: flex;
  font-size: 35px;
  transition: 1s ease;
  ${media.desktop`  
  font-size: 25px;
  `};
`;

interface IMainTitleImg {
  dir: "UP" | "DOWN";
}
const MainTitleImg = styled<IMainTitleImg, any>("img")`
  width: 250px;
  height: 140px;
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
  transition: 1s ease;
  ${media.desktop`  
  
  width: 100px;
  height: 55px;
  margin: 0px 5px 15px;
  `};
`;

const ExplainTitle = styled.div`
  font-weight: bolder;
  font-size: 27px;
  margin-bottom: 15px;
  transition: 1s ease;
  ${media.desktop`  
    font-size: 15px;
    margin-bottom: 10px;
  `};
`;

const ExplainSubtitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  transition: 1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.desktop`  
    font-size: 12px;
    margin-bottom: 7px;
  `};
`;

const ExplainAdditional = styled.div`
  opacity: 0.5;
  font-size: 15px;
  transition: 1s ease;
  ${media.desktop`  
    font-size: 12px;
  `};
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
  transition: 1s ease;
  ${media.desktop`  
    font-size: 15px;
      padding: 10px 15px;
      
  border: 1px solid white;
  
  margin: 10px 0;

  `};
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
  transition: 1s ease;
  font-size: 15px;
  ${media.desktop`  
    font-size: 12px;
  `};
`;

class Home extends React.Component {
  public render() {
    return (
      <HomeContainer>
        <Tooltip
          placement="bottomRight"
          title={"크롬 브라우저를 사용하셔야 정상적으로 게임이 진행됩니다."}
        >
          <Icon
            type="exclamation-circle"
            style={{
              fontSize: 30,
              position: "absolute",
              right: 20,
              top: 20
            }}
          />
        </Tooltip>

        <MainTitleImgContainer>
          <MainTitleImg dir={"UP"} src={higher} />
          <MainTitleImg dir={"DOWN"} src={lower} />
        </MainTitleImgContainer>
        <ExplainTitle>
          어떤 것이 검색이 <span style={{ color: "lightgreen" }}>더 많이</span>{" "}
          됐을까요?
        </ExplainTitle>
        <ExplainSubtitle>
          구글 검색량을 이용한 중독성 넘치는 검색량 비교 게임입니다!
          <br />
        </ExplainSubtitle>
        <ExplainAdditional>
          * 모든 검색량은 구글 한국어 웹에서의 2018년 11월 기준입니다. *
        </ExplainAdditional>
        <Link to={"/game"}>
          <StartButton>게임 시작!</StartButton>
        </Link>
        <script
          async={true}
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9994255438328666"
          data-ad-slot="2297036333"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        <script
          async={true}
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9994255438328666"
          data-ad-slot="8939424166"
          data-ad-format="link"
          data-full-width-responsive="true"
        />
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        <SuggestionButton
          onClick={() =>
            window.open(
              "mailto:leegun2003@gmail.com?subject=주제어 제안&body=보내시는 분: 건의 내용: 관심 가져주셔서 감사합니다."
            )
          }
        >
          검색어 제안, 오류 신고, 건의 사항은 여기로 보내주세요.
        </SuggestionButton>
      </HomeContainer>
    );
  }
}

export default Home;
