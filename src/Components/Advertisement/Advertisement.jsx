import React from "react";
import styled from "styled-components";

const AdvertisementContainer = styled.div`
  position: relative;
  height: 90px;
  background-color: goldenrod;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Advertisement extends React.Component {
  render() {
    return <AdvertisementContainer />;
  }
}

export default Advertisement;
