import React from "react";
import styled from "styled-components";

const AdvertisementContainer = styled.div`
  position: relative;
  height: 90px;
  width: 100%;
  background-color: transparent;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

class GoogleAd extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    const { key } = this.props;
    return (
      <AdvertisementContainer>
        <ins
          key={document.URL + key}
          class="adsbygoogle"
          style={{
            display: "inline-block",
            height: 90,
            width: 728
          }}
          data-ad-client="ca-pub-9994255438328666"
          data-ad-slot="1255763851"
        />
      </AdvertisementContainer>
    );
  }
}

export default GoogleAd;
