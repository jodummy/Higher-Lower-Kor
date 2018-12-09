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
import F3 from "../../img/grade/F3.gif";
import F4 from "../../img/grade/F4.gif";
import E1 from "../../img/grade/E1.gif";
import E2 from "../../img/grade/E2.gif";
import E3 from "../../img/grade/E3.gif";
import E4 from "../../img/grade/E4.gif";
import D1 from "../../img/grade/D1.gif";
import D2 from "../../img/grade/D2.gif";
import D3 from "../../img/grade/D3.gif";
import D4 from "../../img/grade/D4.gif";
import C1 from "../../img/grade/C1.gif";
import C2 from "../../img/grade/C2.gif";
import B1 from "../../img/grade/B1.gif";
import B2 from "../../img/grade/B2.gif";
import A1 from "../../img/grade/A1.gif";
import A2 from "../../img/grade/A2.gif";
import A3 from "../../img/grade/A3.gif";
import A4 from "../../img/grade/A4.gif";
import S1 from "../../img/grade/S1.gif";
import S2 from "../../img/grade/S2.gif";
import { Mutation } from "react-apollo";
import { CREATE_OPINION } from "./ResultQueries";
import { Button, Modal, message as antMessage, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import GoogleAd from "../../Components/GoogleAd";

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  transition: 1s ease;
  ${media.desktop`
    width: 150px;
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

const Signature = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-weight: bolder;
  background-color: black;
  padding: 6px 12px;
  box-shadow: 7px 7px 0px 0px white;
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
    this.state = {
      loading: false,
      visible: false,
      text: ""
    };
    if (score <= 0) {
      url =
        Math.random() > 0.5
          ? Math.random() > 0.5
            ? F1
            : F2
          : Math.random() > 0.5
          ? F3
          : F4;
      message = "🙀 네? 잘못 누른거죠? 🙀";
    } else if (score <= 7) {
      (url =
        Math.random() > 0.5
          ? Math.random() > 0.5
            ? E1
            : E2
          : Math.random() > 0.5
          ? E3
          : E4),
        (message = "🙈 못 본 걸로 할게요, 평균은 넘겨보자고요. 🙈");
    } else if (score <= 15) {
      (url =
        Math.random() > 0.5
          ? Math.random() > 0.5
            ? D1
            : D2
          : Math.random() > 0.5
          ? D3
          : D4),
        (message = "😉 괜찮은 점수네요. 😉");
    } else if (score <= 24) {
      (url = Math.random() > 0.5 ? C1 : C2),
        (message = "🤗 네이버보다 구글을 많이 쓰시는 타입이시네요. 🤗");
    } else if (score <= 34) {
      (url = Math.random() > 0.5 ? B1 : B2),
        (message = "구글링의 달인이시네요!");
    } else if (score <= 45) {
      (url =
        Math.random() > 0.5
          ? Math.random() > 0.5
            ? A1
            : A2
          : Math.random() > 0.5
          ? A3
          : A4),
        (message = `🤯 대단해요! 인터넷 짬밥 좀 드셨군요! 🤯`);
    } else if (score <= 100) {
      (url = Math.random() > 0.5 ? S1 : S2),
        (message = `😎 신기록! 대단합니다! 😎`);
    }
  }

  success = () => {
    antMessage.success("🙏🏻 메시지가 개발자에게 전달되었습니다. 감사합니다. 🙏🏻");
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
    const { score } = this.props.location.state;
    const { visible, loading, text } = this.state;
    return (
      <ResultContainer url={url}>
        <Signature>
          Made by <span style={{ color: "#0000ff" }}>Paris</span>Taxi
          <span style={{ color: "#ff0000" }}>Driver</span>
        </Signature>
        <ResultTitle>당신의 점수는</ResultTitle>
        <Score>{score}점</Score>
        <ResultSubtitle>{message}</ResultSubtitle>
        <Info style={{ marginBottom: 15 }}>* 유저 평균 7.2점 *</Info>
        {/* <Info style={{ marginBottom: 15, opacity: 1 }}>
          🤔 뭔가 사야할 게 생각나셨나요? 🤔
        </Info>
        <div style={{ marginBottom: 15 }}>
          <iframe
            src="//partners.coupang.com/cdn/redirect?url=customjs%2Faffiliate%2Fsearch-bar%2F0.0.4%2Ffavicon-02.html%3FtrackingCode%3DAF5897602"
            width="250px"
            height="36"
            scrolling="no"
          />
        </div> */}
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
          <Tooltip placement="right" title={`🙏 광고 클릭 부탁드립니다 🙏`}>
            <Link to={"/game"}>
              <RetryButton>재도전</RetryButton>
            </Link>
          </Tooltip>
        </ButtonContainer>
        <Mutation mutation={CREATE_OPINION}>
          {createOpinion => {
            return (
              <div>
                <Button type="primary" onClick={this.showModal}>
                  👉 여러분이 제안해주신 키워드가 게임에 반영됩니다. 👈
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
                      loading={loading}
                      onClick={() => {
                        this.setState({ loading: true });
                        setTimeout(() => {
                          this.setState({ loading: false, visible: false });
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
                    placeholder={`광고 클릭시, 키워드 반영이 빨라집니다!`}
                    value={text}
                    onChange={this.handleOnChange}
                  />
                </Modal>
              </div>
            );
          }}
        </Mutation>

        <GoogleAd />
      </ResultContainer>
    );
  }
}

export default Result;
