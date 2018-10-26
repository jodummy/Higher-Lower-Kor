import React from "react";
import styled from "styled-components";
import AnimatedNumber from "react-animated-number";
import { data } from "./keywordData";

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
`;

const InnerGameContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 66.666%;
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
  font-size: 40px;
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
`;

const KeywordSubtitle = styled.div`
  font-size: 21px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

// const Source = styled.div``;

const HighScore = styled.div`
  color: white;
  position: absolute;
  font-size: 21px;
  font-weight: bolder;
  top: 15px;
  left: 15px;
`;

const CurrentScore = styled.div`
  color: white;
  position: absolute;
  font-size: 21px;
  font-weight: bolder;
  top: 15px;
  right: 20px;
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
`;
let keywordData = data;

interface IProps {
  history: any;
}

interface IState {
  currentScore: number;
  highScore: number;
  keywords: any;
  index: number;
  state: "START" | "CLICKANSWER" | "ANSWERRESULT" | "SLIDEMOVE";
  answerResult: "STANDBY" | "RIGHT" | "WRONG";
  answerClick: boolean;
}

class Game extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    keywordData = this.shuffle(keywordData);
    this.state = {
      currentScore: 0,
      highScore: localStorage.getItem("higherlowerkorhighscore")
        ? parseInt(localStorage.getItem("higherlowerkorhighscore")!, 10)
        : 0,
      keywords: [keywordData[0], keywordData[1], keywordData[2]],
      index: 0,
      state: "START",
      answerResult: "STANDBY",
      answerClick: false
    };
    console.log(keywordData.length);
  }
  public render() {
    const { keywords, state, answerClick, answerResult } = this.state;
    return (
      <GameContainer>
        <InnerGameContainer>
          <HighScore>최고 점수 : {this.state.highScore}</HighScore>
          <CurrentScore>현재 점수 : {this.state.currentScore}</CurrentScore>
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
                <KeywordContainer url={keyword.url} key={i}>
                  <KeywordInfoContainer>
                    <KeywordTitle>"{keyword.name}"</KeywordTitle>
                    <KeywordSubtitle>
                      {keyword.count.toLocaleString()}회
                    </KeywordSubtitle>
                    <div>검색 됨</div>
                  </KeywordInfoContainer>
                  {/* <Source>{keyword.source}</Source> */}
                </KeywordContainer>
              );
            } else if (i === 1) {
              return (
                <KeywordContainer url={keyword.url} key={i}>
                  <KeywordInfoContainer>
                    <KeywordTitle>"{keyword.name}"</KeywordTitle>
                    <ButtonContainer>
                      {!answerClick && (
                        <React.Fragment>
                          <AnswerButton
                            onClick={() =>
                              this.onClickAnswer(
                                keywords[0].count <= keywords[1].count
                              )
                            }
                          >
                            <span>더 많이</span>{" "}
                            <ArrowIconUp className="fas fa-caret-up fa-2x" />
                          </AnswerButton>
                          <AnswerButton
                            onClick={() => {
                              console.log(keywords[0], keywords[1]);
                              this.onClickAnswer(
                                keywords[0].count > keywords[1].count
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
                            component="text"
                            value={keyword.count}
                            style={{
                              transition: "1s ease",
                              fontWeight: "bolder"
                            }}
                            duration={1000}
                            formatValue={(n: any) => n.toLocaleString()}
                            stepPrecision={0}
                          />{" "}
                          회
                        </KeywordSubtitle>
                      )}
                      <div>검색 됨</div>
                    </ButtonContainer>
                  </KeywordInfoContainer>
                  {/* <Source>{keyword.source}</Source> */}
                </KeywordContainer>
              );
            } else {
              return (
                <KeywordContainer url={keyword.url} key={i}>
                  <KeywordInfoContainer>
                    <KeywordTitle>"{keyword.name}"</KeywordTitle>
                    <ButtonContainer>
                      <AnswerButton
                        onClick={() =>
                          this.onClickAnswer(
                            keywords[0].count <= keywords[1].count
                          )
                        }
                      >
                        <span>더 많이</span>{" "}
                        <ArrowIconUp className="fas fa-caret-up fa-2x" />
                      </AnswerButton>
                      <AnswerButton
                        onClick={() =>
                          this.onClickAnswer(
                            keywords[0].count > keywords[1].count
                          )
                        }
                      >
                        <span>더 적게</span>{" "}
                        <ArrowIconDown className="fas fa-caret-down fa-2x" />
                      </AnswerButton>
                      <div>검색 됨</div>
                    </ButtonContainer>
                  </KeywordInfoContainer>
                  {/* <Source>{keyword.source}</Source> */}
                </KeywordContainer>
              );
            }
          })}
        </KeywordList>
      </GameContainer>
    );
  }

  public loadKeywords = (index: number) => {
    console.log(index);
    setTimeout(() => {
      this.setState({
        keywords: [
          keywordData[index + 1],
          keywordData[index + 2],
          keywordData[index + 3]
        ],
        state: "START",
        answerClick: false,
        answerResult: "STANDBY"
      });
    }, 1000);
  };

  public onClickAnswer = (right: boolean) => {
    console.log(this.state.keywords, right);
    this.setState({
      answerClick: true,
      state: "CLICKANSWER"
    });
    if (right) {
      setTimeout(() => {
        this.setState({ state: "ANSWERRESULT", answerResult: "RIGHT" });
        this.rightAnswer();
      }, 2000);
    } else {
      setTimeout(() => {
        this.setState({ state: "ANSWERRESULT", answerResult: "WRONG" });
        this.wrongAnswer();
      }, 2000);
    }
  };

  public rightAnswer = () => {
    setTimeout(() => {
      this.setState({
        index: this.state.index + 1,
        state: "SLIDEMOVE",
        currentScore: this.state.currentScore + 1
      });
      this.loadKeywords(this.state.index - 1);
    }, 1000);
  };

  public wrongAnswer = () => {
    setTimeout(() => {
      localStorage.getItem("higherlowerkorhighscore")
        ? parseInt(localStorage.getItem("higherlowerkorhighscore")!, 10) <
          this.state.currentScore
          ? localStorage.setItem(
              "higherlowerkorhighscore",
              this.state.currentScore.toString()
            )
          : localStorage.getItem("higherlowerkorhighscore")
        : localStorage.setItem(
            "higherlowerkorhighscore",
            this.state.currentScore.toString()
          );
      this.props.history.push({
        pathname: `/result`,
        state: {
          score: this.state.currentScore
        }
      });
    }, 1000);
  };

  public shuffle = (a: any) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
}

export default Game;
