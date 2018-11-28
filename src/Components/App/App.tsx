import * as React from "react";
import Game from "../../Routes/Game";
import Home from "../../Routes/Home";
// import Fix from "../../Routes/Fix";
import Result from "../../Routes/Result";
import Advertisement from "../Advertisement";
import { GlobalStyle } from "../../global-styles";
import { Switch, Route } from "react-router";
import { ApolloProvider } from "react-apollo";
import client from "../../withApollo";
import styled from "styled-components";
import { media } from "src/config/_mixin";

const AppContainer = styled.div`
  position: absolute;
  top: 90px;
  bottom: 90px;
  right: 0;
  left: 0;
  overflow: hidden;
  ${media.phone`
    top: 50px;
    bottom: 50px;
  `}
`;

const RealAppContainer = styled.div`
  position: relative;
  height: 100%;
`;

class App extends React.Component {
  public render() {
    return (
      <>
        <ApolloProvider client={client}>
          <Advertisement position="TOP" />
          <AppContainer>
            <RealAppContainer>
              <GlobalStyle />
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route
                  path="/game"
                  exact={true}
                  render={({ history }) => {
                    return <Game history={history} />;
                  }}
                />
                <Route path="/result" exact={true} component={Result} />
              </Switch>
            </RealAppContainer>
            <Advertisement position="BOTTOM" />
          </AppContainer>
        </ApolloProvider>
      </>
    );
  }
}

export default App;
