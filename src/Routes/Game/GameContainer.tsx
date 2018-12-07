import React from "react";
import { Query, Mutation } from "react-apollo";
// import { data } from "./keywordData";
import { KEYWORDS, CREATE_RESULT } from "./GameQueries";
import GamePresenter from "./GamePresenter";
// const correct = new Audio("../../sound/correct.wav");
// const wrong = new Audio("../../sound/wrong.mp3");

const length = 730;
const orderArray: any = [];
for (let i = 0; i < length; i++) {
  orderArray.push(i);
}
let shuffledArray: any = [];

interface IProps {
  history: any;
}

interface IState {
  currentScore: number;
  highScore: number;
  index: number;
  state: "START" | "CLICKANSWER" | "ANSWERRESULT" | "SLIDEMOVE";
  answerResult: "STANDBY" | "RIGHT" | "WRONG";
  answerClick: boolean;
  keywordData: any;
}

class Game extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.loadKeywords = this.loadKeywords.bind(this);
    this.onClickAnswer = this.onClickAnswer.bind(this);
    this.rightAnswer = this.rightAnswer.bind(this);
    this.wrongAnswer = this.wrongAnswer.bind(this);
    this.shuffle = this.shuffle.bind(this);
    shuffledArray = this.shuffle(orderArray);
    this.state = {
      currentScore: 0,
      highScore: 0,
      index: 0,
      state: "START",
      answerResult: "STANDBY",
      answerClick: false,
      keywordData: []
    };
  }

  public componentWillMount = () => {
    this.setState({
      highScore: localStorage.getItem("higherlowerkorhighscore")
        ? parseInt(localStorage.getItem("higherlowerkorhighscore")!, 10)
        : 0
    });
  };

  public render() {
    const {
      index,
      //   keywords,
      highScore,
      state,
      answerClick,
      answerResult,
      currentScore
      // keywordData
    } = this.state;
    return (
      <Query
        query={KEYWORDS}
        notifyOnNetworkStatusChange={true}
        fetchPolicy={"cache-and-network"}
      >
        {({ loading, error, data }: any) => {
          if (loading) return "Loading";
          if (error) return "Error";
          const keywordData = data.keywords;
          return (
            <Mutation mutation={CREATE_RESULT}>
              {createResult => {
                return (
                  <>
                    <GamePresenter
                      keywords={[
                        keywordData[shuffledArray[index]],
                        keywordData[shuffledArray[index + 1]],
                        keywordData[shuffledArray[index + 2]]
                      ]}
                      highScore={highScore}
                      currentScore={currentScore}
                      answerResult={answerResult}
                      answerClick={answerClick}
                      state={state}
                      onClickAnswer={this.onClickAnswer}
                      createResult={createResult}
                    />
                  </>
                );
              }}
            </Mutation>
          );
        }}
      </Query>
    );
  }

  public loadKeywords = () => {
    setTimeout(() => {
      this.setState({
        index: this.state.index + 1,
        state: "START",
        answerClick: false,
        answerResult: "STANDBY"
      });
    }, 1000);
  };

  public onClickAnswer = (right: boolean, createResult: any) => {
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
        this.wrongAnswer(createResult);
      }, 2000);
    }
  };

  public rightAnswer = () => {
    // correct.play();
    setTimeout(() => {
      this.setState({
        state: "SLIDEMOVE",
        currentScore: this.state.currentScore + 1
      });
      this.loadKeywords();
    }, 1000);
  };

  public wrongAnswer = (createResult: any) => {
    // wrong.play();
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
      createResult({ variables: { score: this.state.currentScore } });
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
