import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import higher from "../../img/logo/higher.png";
import lower from "../../img/logo/lower.png";
import { media } from "src/config/_mixin";
import { Icon, Tooltip, Modal, Button, Input, message } from "antd";
import { Mutation, Query } from "react-apollo";
import { CREATE_OPINION, KEYWORDS } from "./HomeQueries";
const { TextArea } = Input;

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
  font-size: 30px;
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

const LoadingButton = styled.div`
  font-size: 25px;
  padding: 15px 25px;
  border-radius: 100px;
  border: 2px solid white;
  margin: 15px 0;
  transition: 0.2s ease;
  color: white;
  ${media.desktop`  
    font-size: 15px;
    padding: 10px 15px;
    border: 1px solid white;
    margin: 10px 0;
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

const Signature = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-weight: bolder;
  background-color: black;
  padding: 6px 12px;
  box-shadow: 7px 7px 0px 0px white;
`;

// const SuggestionButton = styled.div`
//   cursor: pointer;
//   animation: floatbutton 3s ease-in-out infinite;
//   @keyframes floatbutton {
//     0% {
//       transform: translatey(0px);
//     }
//     50% {
//       transform: translatey(5px);
//     }
//     100% {
//       transform: translatey(0px);
//     }
//   }
//   transition: 1s ease;
//   font-size: 15px;
//   text-align: center;
//   line-height: 20px;
//   ${media.desktop`
//     font-size: 12px;
//   `};
// `;

class Home extends React.Component {
  state = {
    loading: false,
    visible: false,
    text: ""
  };

  success = () => {
    message.success("메시지가 개발자에게 전달되었습니다. 감사합니다.");
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleOnChange = (e: any) => {
    this.setState({ text: e.target.value });
  };

  public render() {
    const { visible, text } = this.state;
    return (
      <HomeContainer>
        <Tooltip
          placement="bottomRight"
          title={"크롬 브라우저를 사용하셔야 정상적으로 게임이 진행됩니다."}
        >
          <Icon
            type="chrome"
            style={{
              fontSize: 30,
              position: "absolute",
              right: 20,
              top: 20
            }}
          />
        </Tooltip>
        <Signature
          onClick={() =>
            window.open(
              "mailto:higherlowerkorea@gmail.com?subject=제작자에게...&body=보내시는 분: 건의 내용: 광고문의, 건의사항, 키워드 제안"
            )
          }
        >
          Made by <span style={{ color: "#0000ff" }}>Paris</span>Taxi
          <span style={{ color: "#ff0000" }}>Driver</span>
        </Signature>
        <MainTitleImgContainer>
          <MainTitleImg dir={"UP"} src={higher} alt="더 많이" />
          <MainTitleImg dir={"DOWN"} src={lower} alt="더 적게" />
        </MainTitleImgContainer>
        <ExplainTitle>
          🤔 어떤 키워드가 <span style={{ color: "lightgreen" }}>더 많이</span>{" "}
          검색됐을까요? 🤔
        </ExplainTitle>
        <ExplainSubtitle>
          구글 검색량을 이용한 중독성 넘치는 검색량 비교 게임입니다!
        </ExplainSubtitle>
        <ExplainSubtitle>
          매주 업데이트되는 1000개가 넘는 키워드들을 비교해보세요!
        </ExplainSubtitle>
        <ExplainAdditional>
          * 모든 검색량은{" "}
          <span style={{ fontWeight: "bolder" }}>구글 한국어 웹</span>
          에서의
          <span
            style={{ fontWeight: "bolder" }}
          >{` 2019년 ${new Date().getMonth()}월 기준 `}</span>
          입니다. *
        </ExplainAdditional>
        <Query
          query={KEYWORDS}
          notifyOnNetworkStatusChange={true}
          fetchPolicy={"cache-and-network"}
        >
          {({ loading, error, data }: any) => {
            if (loading)
              return (
                <LoadingButton>
                  로딩중 <Icon type="loading" />
                </LoadingButton>
              );
            if (error) {
              console.log(error.message);
              return <LoadingButton>😰 문제가 생겼습니다. 😰</LoadingButton>;
            }
            const { length } = data.keywords;
            return (
              <Link
                to={{
                  pathname: "/game",
                  state: {
                    length
                  }
                }}
              >
                <StartButton>게임 시작!</StartButton>
              </Link>
            );
          }}
        </Query>
        <Mutation mutation={CREATE_OPINION}>
          {createOpinion => {
            return (
              <div>
                <Button type="primary" onClick={this.showModal}>
                  👉 키워드를 제안해주세요 👈
                </Button>
                <Modal
                  visible={visible}
                  title={<div style={{ fontWeight: "bolder" }}>의견</div>}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  width={500}
                  footer={[
                    <Button key="back" onClick={this.handleCancel}>
                      돌아가기
                    </Button>,
                    <Button
                      key="submit"
                      type="primary"
                      onClick={() => {
                        this.setState({ loading: true });
                        setTimeout(() => {
                          this.setState({
                            loading: false,
                            visible: false
                          });
                          createOpinion({ variables: { text } });
                          this.success();
                        }, 3000);
                      }}
                    >
                      보내기
                    </Button>
                  ]}
                >
                  <TextArea
                    placeholder={`광고 클릭시, 키워드 반영이 빨라집니다.`}
                    value={text}
                    onChange={this.handleOnChange}
                  />
                </Modal>
              </div>
            );
          }}
        </Mutation>
        <script
          async={true}
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <ins
          className="adsbygoogle"
          style={{ display: "inline-block", width: 728, height: 90 }}
          data-ad-client="ca-pub-8487254106636373"
          data-ad-slot="2893681527"
        />
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </HomeContainer>
    );
  }
}

export default Home;
