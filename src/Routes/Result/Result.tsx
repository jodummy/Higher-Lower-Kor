import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";
import { media } from "src/config/_mixin";

import F1 from "../../img/grade/F1.gif";
import F2 from "../../img/grade/F2.gif";
import E1 from "../../img/grade/E1.gif";
import E2 from "../../img/grade/E2.gif";
import D1 from "../../img/grade/D1.gif";
import D2 from "../../img/grade/D2.gif";
import C1 from "../../img/grade/C1.gif";
import C2 from "../../img/grade/C2.gif";
import B1 from "../../img/grade/B1.gif";
import B2 from "../../img/grade/B2.gif";
import A1 from "../../img/grade/A1.gif";
import A2 from "../../img/grade/A2.gif";

interface IResultContainerProps {
  url: string;
}

const ResultContainer = styled<IResultContainerProps, any>("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${props => props.url});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: 100% auto;
  background-position: 50% 50%;
  transition: 1s ease;
  ${media.desktop`
    background-size: auto 100% ;
  `};
`;

const ResultTitle = styled.div`
  font-size: 35px;
  margin-bottom: 10px;
  transition: 1s ease;
  ${media.desktop`
  font-size: 30px;
  margin-bottom: 6px;  
  `};
`;

const Score = styled.div`
  font-size: 70px;
  font-weight: bolder;
  color: goldenrod;
  margin-bottom: 10px;
  transition: 1s ease;
  ${media.desktop`
  font-size: 50px;
  margin-bottom: 6px;  
  `};
`;

const ResultSubtitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 10px;
  transition: 1s ease;
  ${media.desktop`
  font-size: 15px;
  margin-bottom: 6px;  
  `};
`;

const SocialContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  transition: 1s ease;
  ${media.desktop`
    width: 150px;

  margin-top: 6px;
  `};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RetryButton = styled.div`
  font-size: 20px;
  font-weight: bolder;
  padding: 15px 25px;
  border-radius: 20px;
  border: 2px solid white;
  margin: 15px 5px;
  transition: 0.2s ease;
  &:hover {
    color: black;
    background-color: white;
  }
  transition: 1s ease;
  ${media.desktop`
font-size: 18px;
  font-weight: bolder;
  padding: 10px 20px;  `};
`;

const Info = styled.div`
  font-size: 15px;
  opacity: 0.5;
  transition: 1s ease;
  ${media.desktop`
font-size: 12px; `};
`;

interface IProps {
  location: {
    state: {
      score: number;
    };
  };
}

let url: any = null;
let message: any = null;

class Result extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    const { score } = this.props.location.state;
    this.state = {};
    if (score <= 0) {
      url = Math.random() > 0.5 ? F1 : F2;
      message = "네? 잘못 누른거죠?";
    } else if (score <= 3) {
      (url = Math.random() > 0.5 ? E1 : E2),
        (message = "못 본 걸로 할게요. 평균은 넘겨보자고요");
    } else if (score <= 7) {
      (url = Math.random() > 0.5 ? D1 : D2), (message = "괜찮은 점수네요");
    } else if (score <= 12) {
      (url = Math.random() > 0.5 ? C1 : C2),
        (message = "네이버보다 구글을 많이 쓰시는 타입?");
    } else if (score <= 18) {
      (url = Math.random() > 0.5 ? B1 : B2),
        (message = "구글링의 달인이시네요!");
    } else if (score <= 25) {
      (url = Math.random() > 0.5 ? A1 : A2),
        (message = `대단해요! 인터넷 짬밥 좀 드셨군요!`);
    } else if (score <= 160) {
      (url = Math.random() > 0.5 ? A1 : A2),
        (message = `대단해요! 인터넷 짬밥 좀 드셨군요!`);
    }
  }

  public render() {
    console.log(this.props, this.state);
    const { score } = this.props.location.state;
    return (
      <ResultContainer url={url}>
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
        <ResultTitle>당신의 점수는</ResultTitle>
        <Score>{score}점</Score>
        <ResultSubtitle>{message}</ResultSubtitle>
        <Info>* 유저 평균 3.2점</Info>
        <SocialContainer>
          <FacebookShareButton url={"https://higherlowerkorea.com"}>
            <FacebookIcon
              size={32}
              round={true}
              iconBgStyle={{ cursor: "pointer", transition: "0.5s ease" }}
            />
          </FacebookShareButton>
          <TwitterShareButton url={"https://higherlowerkorea.com"}>
            <TwitterIcon
              size={32}
              round={true}
              iconBgStyle={{ cursor: "pointer", transition: "0.5s ease" }}
            />
          </TwitterShareButton>
          <RedditShareButton url={"https://higherlowerkorea.com"}>
            <RedditIcon
              size={32}
              round={true}
              iconBgStyle={{ cursor: "pointer", transition: "0.5s ease" }}
            />
          </RedditShareButton>
          <EmailShareButton url={"https://higherlowerkorea.com"}>
            <EmailIcon
              size={32}
              round={true}
              iconBgStyle={{ cursor: "pointer", transition: "0.5s ease" }}
            />
          </EmailShareButton>
        </SocialContainer>
        <ButtonContainer>
          <Link to={"/"}>
            <RetryButton>메인</RetryButton>
          </Link>
          <Link to={"/game"}>
            <RetryButton>재도전</RetryButton>
          </Link>
        </ButtonContainer>
      </ResultContainer>
    );
  }
}

export default Result;
