import React from "react";
import styled from "styled-components";
import { media } from "src/config/_mixin";

interface IAdvertisementContainerProps {
  position: "TOP" | "BOTTOM";
}

const AdvertisementContainer = styled<IAdvertisementContainerProps, any>("div")`
  position: absolute;
  top: ${props => (props.position === "TOP" ? "0px" : null)};
  bottom: ${props => (props.position === "BOTTOM" ? "0px" : null)};
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

interface IProps {
  position: "TOP" | "BOTTOM";
}
interface IState {
  env: "PC" | "MOBILE";
}

class Advertisement extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
  render() {
    const { position } = this.props;
    const { env } = this.state;
    return (
      <AdvertisementContainer position={position}>
        {position === "TOP" ? (
          env === "PC" ? (
            <React.Fragment>
              <ins
                className="kakao_ad_area"
                style={{ display: "none" }}
                data-ad-unit="DAN-1jeqht4x568h2"
                data-ad-width="728"
                data-ad-height="90"
              />
              <ins
                className="kakao_ad_area"
                style={{ display: "none" }}
                data-ad-unit="DAN-uv5u23x5aele"
                data-ad-width="728"
                data-ad-height="90"
              />
            </React.Fragment>
          ) : (
            <ins
              className="kakao_ad_area"
              style={{ display: "none" }}
              data-ad-unit="DAN-vb9m3z5njdd1"
              data-ad-width="320"
              data-ad-height="50"
            />
          )
        ) : env === "PC" ? (
          <React.Fragment>
            <ins
              className="kakao_ad_area"
              style={{ display: "none" }}
              data-ad-unit="DAN-1jecnptzfn589"
              data-ad-width="728"
              data-ad-height="90"
            />
            <ins
              className="kakao_ad_area"
              style={{ display: "none" }}
              data-ad-unit="DAN-t4ct78evdliw"
              data-ad-width="728"
              data-ad-height="90"
            />
          </React.Fragment>
        ) : (
          <ins
            className="kakao_ad_area"
            style={{ display: "none" }}
            data-ad-unit="DAN-t8f4zd8e10zb"
            data-ad-width="320"
            data-ad-height="50"
          />
        )}
      </AdvertisementContainer>
    );
  }
}

export default Advertisement;
