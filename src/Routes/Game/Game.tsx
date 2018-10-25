import React from "react";
import styled from "styled-components";
import AnimatedNumber from "react-animated-number";

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
  font-size: 40px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const KeywordSubtitle = styled.div`
  font-size: 21px;
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
  top: 5px;
  left: 5px;
`;

const CurrentScore = styled.div`
  color: white;
  position: absolute;
  font-size: 21px;
  top: 5px;
  right: 10px;
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

let keywordData = [
  {
    url:
      "https://static1.squarespace.com/static/595ff73ef5e2315e45b9f239/t/5b16b94088251b408d6352d0/1528215875466/NS_RD_Drake2.jpg?format=1500w",
    source: "Naver",
    name: "드레이크",
    count: 1610000
  },
  {
    url:
      "https://www.grammy.com/sites/com/files/styles/news_detail_header/public/gettyimages-877192122.jpg?itok=gW_QMOgT",

    source: "Naver",
    name: "방탄소년단",
    count: 92300000
  },
  {
    url:
      "https://image.fmkorea.com/files/attach/new/20180830/486616/403814545/1242160460/ff51296b67bb6310e4304603dbde3c1f.jpg",
    name: "퍼스트 맨",
    count: 11100000
  },
  {
    url:
      "http://esquirekorea.co.kr/wp-content/uploads/2017/09/esq201709_fashion_screen_001.jpg",
    name: "라이언 고슬링",
    count: 703000
  },
  {
    url:
      "http://www.hawtcelebs.com/wp-content/uploads/2017/08/emma-stone-on-the-set-of-maniac-in-new-york-08-14-2017_4.jpg",
    name: "엠마 스톤",
    count: 1740000
  },
  {
    url:
      "http://file3.instiz.net/data/file3/2018/02/07/9/3/a/93a0dc003b2ae93364a3ebdb57e8843d.jpg",
    name: "침착맨",
    count: 7530000
  },
  {
    url:
      "http://mblogthumb4.phinf.naver.net/MjAxNjEwMjRfMTE5/MDAxNDc3Mjk1NDA1OTM0.2fMLbAyHQjMpAAlQ8L-mIGNw9wssdObjo95iZgQnm34g.v_TiDzuwOEoQI9nCd07i5LhEPQbkT3eNzWBwj9R5o5og.PNG.kyungchul87/2_%281%29.png?type=w800",
    name: "최민식",
    count: 1590000
  },
  {
    url:
      "https://yt3.ggpht.com/a-/AN66SAw-3Llae2Od5S-4BuuqcF5VnZ034EsXvr_zbg=s900-mo-c-c0xffffffff-rj-k-no",
    name: "송강호",
    count: 1760000
  },
  {
    url: "http://c.huv.kr/c/fd/fd4f369ff1d7513cf0e849253c3a69e0e97b02a5.jpg",
    name: "서든어택2",
    count: 5750000
  },
  {
    url: "https://t1.daumcdn.net/cfile/tistory/265D513458FF68A518",
    name: "트위치",
    count: 38400000
  },
  {
    url:
      "https://vignette.wikia.nocookie.net/genesis/images/4/49/Genesis_3_p2_pack.jpg/revision/latest?cb=20131215122228&path-prefix=ko",
    name: "창세기전",
    count: 1670000
  },
  {
    url: "https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png",
    name: "유튜브",
    count: 74900000
  },
  {
    url:
      "http://extmovie.maxmovie.com/xe/files/attach/images/174/860/935/fab88bc5687819ff482c3cef05f7d5df.jpg",
    name: "DJ 앙꼬",
    count: 2160000
  },
  {
    url:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3393f738210507.575900b317fb4.png",
    name: "네이버",
    count: 329000000
  },
  {
    url: "https://thumbs.gfycat.com/SoftGrandioseCod-poster.jpg",
    name: "아이유",
    count: 46200000
  },
  {
    url: "http://foodingbox.com/web/product/big/201709/87_shop1_881146.jpg",
    name: "뼈해장국",
    count: 1090000
  },
  {
    url:
      "http://file3.instiz.net/data/cached_img/upload/2018/05/02/9/094727cdce8c9a3e030814a80fefb33e.jpg",
    name: "김치피자탕수육",
    count: 658000
  }
];

interface IState {
  currentScore: number;
  highScore: number;
  keywords: any;
  index: number;
  state: "START" | "CLICKANSWER" | "ANSWERRESULT" | "SLIDEMOVE";
  answerResult: "STANDBY" | "RIGHT" | "WRONG";
  answerClick: boolean;
}

class Game extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    keywordData = this.shuffle(keywordData);
    this.state = {
      currentScore: 0,
      highScore: 0,
      keywords: [keywordData[0], keywordData[1], keywordData[2]],
      index: 0,
      state: "START",
      answerResult: "STANDBY",
      answerClick: false
    };
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
                            style={{ transition: "1s ease" }}
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
    console.log("wrong!");
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
