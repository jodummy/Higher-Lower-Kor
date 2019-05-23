import React from "react";
import { CREATE_OPINION } from "./ModalButtonQueries";
import { Mutation } from "react-apollo";
import { Button, Modal, message as antMessage } from "antd";
import TextArea from "antd/lib/input/TextArea";

interface IProps {}

interface IState {
  visible: boolean;
  loading: boolean;
  text: string;
}

export default class ModalButton extends React.Component<IProps, IState> {
  state = {
    visible: false,
    loading: false,
    text: ""
  };

  showModal = (visible: boolean) => {
    this.setState({
      visible
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  success = () => {
    antMessage.success("🙏🏻 메시지가 개발자에게 전달되었습니다. 감사합니다. 🙏🏻");
  };

  handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { visible, loading, text } = this.state;
    return (
      <Mutation mutation={CREATE_OPINION}>
        {createOpinion => {
          return (
            <div>
              <Button type="primary" onClick={() => this.showModal(true)}>
                👉 키워드를 제안해주세요 👈
              </Button>
              <Modal
                visible={visible}
                title={<div style={{ fontWeight: "bolder" }}>의견</div>}
                onOk={this.handleOk}
                onCancel={() => this.showModal(false)}
                width={500}
                footer={[
                  <Button key="back" onClick={() => this.showModal(false)}>
                    돌아가기
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    loading={loading}
                    onClick={() => {
                      this.setState({ loading: true });
                      setTimeout(() => {
                        this.setState({
                          loading: false,
                          visible: false,
                          text: ""
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
                  placeholder={`키워드 제안, 의견, 버그 신고`}
                  value={text}
                  onChange={this.handleOnChange}
                />
              </Modal>
            </div>
          );
        }}
      </Mutation>
    );
  }
}
