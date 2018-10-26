import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ResultContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://media.giphy.com/media/l1KueaiyeOeDhITsc/giphy.gif");
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: 100% auto;
`;

const ResultTitle = styled.div``;

const ResultSubtitle = styled.div``;

const ShareButton = styled.div``;

const RetryButton = styled.div``;

interface IProps {
  location: {
    state: {
      score: number;
    };
  };
}

class Result extends React.Component<IProps, any> {
  public render() {
    console.log(this.props, this.state);
    const { score } = this.props.location.state;
    return (
      <ResultContainer>
        <ResultTitle>당신의 점수는 {score}점</ResultTitle>
        <ResultSubtitle>당신은 인터넷 폐인!!</ResultSubtitle>
        <ShareButton>Facebook</ShareButton>
        <ShareButton>Twiiter</ShareButton>
        <Link to={"/game"}>
          <RetryButton>재도전</RetryButton>
        </Link>
      </ResultContainer>
    );
  }
}

export default Result;
