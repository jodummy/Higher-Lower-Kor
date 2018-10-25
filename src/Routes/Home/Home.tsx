import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

class Home extends React.Component<any, any> {
  public render() {
    return <HomeContainer />;
  }
}

export default Home;
