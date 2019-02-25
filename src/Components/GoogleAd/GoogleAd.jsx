import React from "react";
import styled from "styled-components";
import { media } from "src/config/_mixin";
import AdSense from "react-adsense";
import { withRouter } from "react-router";

const AdvertisementContainer = styled.div`
  position: absolute;
  top: 0px;
  height: 90px;
  width: 100%;
  background-color: transparent;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
  ${media.phone`
    height: 50px; 
  `}
`;

class GoogleAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      env: "PC"
    };
  }
  componentWillMount = () => {
    if (window.innerWidth <= 420) {
      this.setState({ env: "MOBILE" });
    }
  };
  componentDidMount() {
    // googletag.cmd.push(function() {
    //   googletag.display("div-gpt-ad-1547876944150-0");
    // });

    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    const { adKey } = this.props;
    const { env } = this.state;
    return (
      <AdvertisementContainer>
        {env === "PC" ? (
          <AdSense.Google
            key={adKey}
            client="ca-pub-9994255438328666"
            slot="2197737401"
            style={{ width: 970, height: 90, display: "inline-block" }}
            format=""
          />
        ) : (
          <AdSense.Google
            key={adKey}
            client="ca-pub-9994255438328666"
            slot="5883376132"
            style={{ width: 320, height: 50, display: "inline-block" }}
            format=""
          />
        )}
      </AdvertisementContainer>
    );
  }
}

export default withRouter(GoogleAd);
