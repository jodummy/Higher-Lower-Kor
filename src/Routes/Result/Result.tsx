import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { grade } from "./grade";
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
  font-size: 40px;
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

// const ShareButton = styled.div`
//   width: 80px;
//   height: 40px;
//   font-size: 15px;
//   padding: 5px 15px;
//   border-radius: 10px;
//   margin: 15px 0;
//   transition: 0.2s ease;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   cursor: pointer;
//   &:hover {
//     box-shadow: 0px 5px 0px rgba(0, 0, 0, 1);
//   }
// `;

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
      url = grade[0].url;
      message = grade[0].message;
    } else if (score <= 3) {
      url = grade[1].url;
      message = grade[1].message;
    } else if (score <= 7) {
      url = grade[2].url;
      message = grade[2].message;
    } else if (score <= 12) {
      url = grade[3].url;
      message = grade[3].message;
    } else if (score <= 18) {
      url = grade[4].url;
      message = grade[4].message;
    } else if (score <= 25) {
      url = grade[5].url;
      message = grade[5].message;
    }
  }

  public render() {
    console.log(this.props, this.state);
    const { score } = this.props.location.state;
    return (
      <ResultContainer url={url}>
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
