import React from "react";
import styled from "styled-components";

import { media } from "src/config/_mixin";
const ErrorContainer = styled.div`
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

const ErrorTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class GameError extends React.Component {
  public render() {
    return (
      <ErrorContainer>
        <ErrorTitle>
          <div style={{ marginBottom: 15 }}>
            😭 구글 키워드 데이터를 가지고 오는 데 실패했습니다 😭
          </div>
        </ErrorTitle>
      </ErrorContainer>
    );
  }
}

export default GameError;
