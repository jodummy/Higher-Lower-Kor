import React from "react";
import { Query, Mutation } from "react-apollo";
import { KEYWORDS, CREATE_RESULT } from "./GameQueries";
import GamePresenter from "./GamePresenter";
import GameLoading from "../../Components/GameLoading";
import GameError from "src/Components/GameError";
// const correct = new Audio("../../sound/correct.wav");
// const wrong = new Audio("../../sound/wrong.mp3");

let shuffledArray: any = [];

interface IProps {
  location: {
    state: {
      length: number;
    };
  };
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
    const length = this.props.location.state.length;
    const orderArray: any = [];
    for (let i = 0; i < length; i++) {
      shuffledArray = this.shuffle(orderArray);
      orderArray.push(i);
    }
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

  componentWillMount = () => {
    this.setState({
      highScore: localStorage.getItem("higherlowerkorhighscore")
        ? parseInt(localStorage.getItem("higherlowerkorhighscore")!, 10)
        : 0
    });
  };

  public render() {
    const {
      index,
      highScore,
      state,
      answerClick,
      answerResult,
      currentScore
    } = this.state;
    return (
      <Query
        query={KEYWORDS}
        notifyOnNetworkStatusChange={true}
        fetchPolicy={"cache-and-network"}
      >
        {({ loading, error, data }: any) => {
          if (loading) return <GameLoading />;
          if (error) {
            return <GameError />;
          }
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

  loadKeywords = () => {
    setTimeout(() => {
      this.setState({
        index: this.state.index + 1,
        state: "START",
        answerClick: false,
        answerResult: "STANDBY"
      });
    }, 1000);
  };

  onClickAnswer = (right: boolean, createResult: any) => {
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

  /* correct answer */
  rightAnswer = () => {
    setTimeout(() => {
      this.setState({
        state: "SLIDEMOVE",
        currentScore: this.state.currentScore + 1
      });
      this.loadKeywords();
    }, 1000);
  };

  /* wrong answer */
  wrongAnswer = (createResult: any) => {
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
          score: this.state.currentScore,
          length: this.props.location.state.length
        }
      });
    }, 1000);
  };

  shuffle = (a: any) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
}

export default Game;
