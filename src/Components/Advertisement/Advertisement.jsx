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

class Advertisement extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   (window.adsbygoogle = window.adsbygoogle || []).push({});
  // }
  render() {
    const { key } = this.props;
    return (
      <AdvertisementContainer>
        <ins
          className="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit="DAN-1jeqht4x568h2"
          data-ad-width="728"
          data-ad-height="90"
        />
        {/* <ins
          key={document.URL + key}
          class="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit="DAN-1jeqht4x568h2"
          data-ad-width="728"
          data-ad-height="90"
        /> */}
        <ins
          className="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit="DAN-uv5u23x5aele"
          data-ad-width="728"
          data-ad-height="90"
        />
        {/* <ins
          key={document.URL + key}
          class="adsbygoogle"
          style={{
            display: "inline-block",
            height: 90,
            width: 728
          }}
          data-ad-client="ca-pub-9994255438328666"
          data-ad-slot="1255763851"
        /> */}
      </AdvertisementContainer>
    );
  }
}

export default Advertisement;
