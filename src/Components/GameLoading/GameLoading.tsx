import React from "react";
import styled from "styled-components";
import { Icon } from "antd";
import { media } from "src/config/_mixin";

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  font-size: 30px;
  font-weight: bolder;
  ${media.desktop`  
    font-size: 15px;
`}
`;

const LoadingTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class GameLoading extends React.Component {
  public render() {
    return (
      <LoadingContainer>
        <LoadingTitle>
          <div style={{ marginBottom: 15 }}>
            🐣 구글 키워드들을 불러오는 중입니다 🐣
          </div>
          <div style={{ marginBottom: 15 }}>😻 광고 클릭은 사랑입니다 😻</div>
          <Icon type="loading" />
        </LoadingTitle>
      </LoadingContainer>
    );
  }
}

export default GameLoading;
