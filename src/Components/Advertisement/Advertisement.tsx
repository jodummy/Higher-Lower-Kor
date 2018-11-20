import React from "react";
import styled from "styled-components";

const AdvertisementContainer = styled.div`
  position: relative;
  height: 10%;
  background-color: goldenrod;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Advertisement extends React.Component<any, any> {
  public render() {
    return <AdvertisementContainer>광고</AdvertisementContainer>;
  }
}

export default Advertisement;
