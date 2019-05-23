import React from "react";
import styled from "styled-components";
import AnimatedNumber from "react-animated-number";
import { media } from "../../config/_mixin";

interface IGameContainerProps {
  index: number;
}

const GameContainer = styled<IGameContainerProps, any>("div")`
  position: absolute;
  width: 150%;
  height: 100%;
  display: flex;
  transition: 1s ease;
  transform: ${props => `translateX(${-33.33 * props.index}%)`};
  ${media.desktop`
    width: 100%;
    height: 150%;
  `};
`;

const InnerGameContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 66.666%;

  transition: 1s ease;
  ${media.desktop`
    width: 100%;
  `};
`;

interface IKeywordListProps {
  index: number;
  state: "START" | "CLICKANSWER" | "ANSWERRESULT" | "SLIDEMOVE";
}

const KeywordList = styled<IKeywordListProps, any>("div")`
  width: 150%;
  height: 100%;
  display: flex;
  transition: ${props => {
    switch (props.state) {
      case "START":
        return null;
      case "CLICKANSWER":
        return null;
      case "ANSWERRESULT":
        return null;
      case "SLIDEMOVE":
        return "1s ease";
    }
  }};
  transform: ${props => {
    switch (props.state) {
      case "START":
        return null;
      case "CLICKANSWER":
        return null;
      case "ANSWERRESULT":
        return null;
      case "SLIDEMOVE":
        return `translateX(-33.33%)`;
    }
  }};
  ${media.desktop`
    width: 100%;
    height: 100%;
    flex-direction: column;
    transform: ${(props: any) => {
      switch (props.state) {
        case "START":
          return null;
        case "CLICKANSWER":
          return null;
        case "ANSWERRESULT":
          return null;
        case "SLIDEMOVE":
          return `translateY(-33.33%)`;
        default:
          return null;
      }
    }};
  `};
`;

interface IKeywordContainerProps {
  url: string;
}

const KeywordContainer = styled<IKeywordContainerProps, any>("div")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.url});
  background-size: auto 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  transition: 1s ease;
  ${media.desktop`
  background-size: auto 120%;
  `};
`;

const RightIcon = styled.div`
  transition: 1s ease;
  backface-visibility: hidden;
  position: absolute;
  z-index: 2;
  transform: rotateY(180deg);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: green;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
`;

const WrongIcon = styled.div`
  transition: 1s ease;
  backface-visibility: hidden;
  position: absolute;
  z-index: 2;
  transform: rotateY(180deg);

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: darkred;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
`;

const VersusIcon = styled.div`
  position: absolute;
  transition: 1s ease;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  font-weight: bolder;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
`;

interface IFlipperProps {
  state: "START" | "CLICKANSWER" | "ANSWERRESULT" | "SLIDEMOVE";
}

const Flipper = styled<IFlipperProps, any>("div")`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 33.33%;
  margin-left: -50px;
  margin-top: -50px;
  width: 100px;
  height: 100px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  border-radius: 100%;
  color: white;
  background-color: darkgoldenrod;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: bolder;
  transition: 1s ease;
  transform-style: preserve-3d;
  transform: ${props => {
    switch (props.state) {
      case "START":
        return null;
      case "CLICKANSWER":
        return null;
      case "ANSWERRESULT":
        return "rotateY(180deg)";
      case "SLIDEMOVE":
        return null;
    }
  }};
  ${VersusIcon} {
    ${props => {
      switch (props.state) {
        case "START":
          return null;
        case "CLICKANSWER":
          return null;
        case "ANSWERRESULT":
          return null;
        case "SLIDEMOVE":
          return null;
      }
    }};
  }
  ${RightIcon} {
    ${props => {
      switch (props.state) {
        case "START":
          return null;
        case "CLICKANSWER":
          return null;
        case "ANSWERRESULT":
          return null;
        case "SLIDEMOVE":
          return null;
      }
    }};
  }
  ${WrongIcon} {
    ${props => {
      switch (props.state) {
        case "START":
          return null;
        case "CLICKANSWER":
          return null;
        case "ANSWERRESULT":
          return null;
        case "SLIDEMOVE":
          return null;
      }
    }};
  }
  ${media.desktop`

  font-size: 20px;
  margin-left: -25px;
  margin-top: -25px;
  width: 50px;
  height: 50px;
  top: 33.33%;
  left: 50%;
  `};
`;

const KeywordInfoContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const KeywordTitle = styled.div`
  font-size: 60px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  transition: 1s ease;
  ${media.desktop`  
  font-size: 35px;
  `};
`;

const KeywordSubtitle = styled.div`
  font-size: 30px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  transition: 1s ease;
  ${media.desktop`  
  font-size: 21px;
  `};
`;

const HighScore = styled.div`
  color: white;
  position: absolute;
  font-size: 21px;
  font-weight: bolder;
  top: 15px;
  left: 15px;
  transition: 1s ease;
  ${media.desktop`  
  font-size: 15px;
  `};
`;

const CurrentScore = styled.div`
  color: white;
  position: absolute;
  font-size: 21px;
  font-weight: bolder;
  top: 15px;
  right: 20px;
  transition: 1s ease;
  ${media.desktop`  
  font-size: 15px;
  `};
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ArrowIconUp = styled.i`
  color: white;
  margin-left: 10px;
  transition: 1s ease;
`;

const ArrowIconDown = styled.i`
  color: white;
  margin-left: 10px;
  transition: 1s ease;
`;

const AnswerButton = styled.div`
  font-size: 18px;
  font-weight: bolder;
  padding: 15px 30px;
  color: Cornsilk;
  border: 4px solid white;
  border-radius: 100px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s ease;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: white;
    ${ArrowIconUp} {
      color: black;
      transform: translateY(-5px);
    }
    ${ArrowIconDown} {
      color: black;
      transform: translateY(5px);
    }
  }
  ${media.desktop`

  font-size: 15px;
  font-weight: bolder;
  padding: 5px 15px;
  border: 2px solid white;
  `};
`;

interface IProps {
  onClickAnswer: any;
  keywords: any;
  highScore: number;
  currentScore: number;
  answerResult: any;
  answerClick: boolean;
  state: any;
  createResult: any;
}

class GamePresenter extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  public render() {
    const {
      onClickAnswer,
      keywords,
      highScore,
      currentScore,
      answerResult,
      answerClick,
      state,
      createResult
    } = this.props;
    return (
      <GameContainer>
        <InnerGameContainer>
          <HighScore>최고 점수 : {highScore}</HighScore>
          <CurrentScore>현재 점수 : {currentScore}</CurrentScore>
        </InnerGameContainer>
        <Flipper state={state}>
          <VersusIcon>VS</VersusIcon>
          {answerResult === "RIGHT" && (
            <RightIcon>
              <i className="fas fa-check fa-lg" />
            </RightIcon>
          )}
          {answerResult === "WRONG" && (
            <WrongIcon>
              <i className="fas fa-times fa-lg" />
            </WrongIcon>
          )}
        </Flipper>
        <KeywordList state={state}>
          {keywords.map((keyword: any, i: number) => {
            if (i === 0) {
              return (
                <KeywordContainer url={keyword.image.url} key={i}>
                  <KeywordInfoContainer>
                    <KeywordTitle>"{keyword.name}"</KeywordTitle>
                    <KeywordSubtitle>
                      {keyword.count.toLocaleString()}회
                    </KeywordSubtitle>
                    <div>검색 됨</div>
                  </KeywordInfoContainer>
                </KeywordContainer>
              );
            } else if (i === 1) {
              return (
                <KeywordContainer url={keyword.image.url} key={i}>
                  <KeywordInfoContainer>
                    <KeywordTitle>"{keyword.name}"</KeywordTitle>
                    <ButtonContainer>
                      {!answerClick && (
                        <React.Fragment>
                          <AnswerButton
                            onClick={() =>
                              onClickAnswer(
                                keywords[0].count <= keywords[1].count,
                                createResult
                              )
                            }
                          >
                            <span>더 많이</span>{" "}
                            <ArrowIconUp className="fas fa-caret-up fa-2x" />
                          </AnswerButton>
                          <AnswerButton
                            onClick={() => {
                              onClickAnswer(
                                keywords[0].count > keywords[1].count,
                                createResult
                              );
                            }}
                          >
                            <span>더 적게</span>{" "}
                            <ArrowIconDown className="fas fa-caret-down fa-2x" />
                          </AnswerButton>
                        </React.Fragment>
                      )}
                      {answerClick && (
                        <KeywordSubtitle>
                          <AnimatedNumber
                            component="span"
                            value={keyword.count}
                            style={{
                              transition: "1s ease",
                              fontWeight: "bolder"
                            }}
                            duration={1000}
                            formatValue={(n: any) => n.toLocaleString()}
                            stepPrecision={0}
                          />
                          회
                        </KeywordSubtitle>
                      )}
                      <div>검색 됨</div>
                    </ButtonContainer>
                  </KeywordInfoContainer>
                </KeywordContainer>
              );
            } else {
              return (
                <KeywordContainer url={keyword.image.url} key={i}>
                  <KeywordInfoContainer>
                    <KeywordTitle>"{keyword.name}"</KeywordTitle>
                    <ButtonContainer>
                      <AnswerButton
                        onClick={() =>
                          onClickAnswer(
                            keywords[0].count <= keywords[1].count,
                            createResult
                          )
                        }
                      >
                        <span>더 많이</span>{" "}
                        <ArrowIconUp className="fas fa-caret-up fa-2x" />
                      </AnswerButton>
                      <AnswerButton
                        onClick={() =>
                          onClickAnswer(
                            keywords[0].count >= keywords[1].count,
                            createResult
                          )
                        }
                      >
                        <span>더 적게</span>{" "}
                        <ArrowIconDown className="fas fa-caret-down fa-2x" />
                      </AnswerButton>
                      <div>검색 됨</div>
                    </ButtonContainer>
                  </KeywordInfoContainer>
                </KeywordContainer>
              );
            }
          })}
        </KeywordList>
      </GameContainer>
    );
  }
}

export default GamePresenter;
