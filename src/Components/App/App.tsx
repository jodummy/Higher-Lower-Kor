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

const AppContainer = styled.div`
  position: absolute;
  top: 90px;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
`;

const RealAppContainer = styled.div`
  position: relative;
  height: 100%;
`;

class App extends React.Component {
  state = {
    key: Math.random()
      .toString(36)
      .substring(7)
  };
  public keyChanger = () => {
    this.setState({
      key: Math.random()
        .toString(36)
        .substring(7)
    });
  };
  public render() {
    const { key } = this.state;
    return (
      <>
        <ApolloProvider client={client}>
          <Advertisement key={key} />
          <AppContainer>
            <RealAppContainer>
              <GlobalStyle />
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route
                  path="/game"
                  exact={true}
                  render={({ history }) => {
                    return (
                      <Game history={history} keyChanger={this.keyChanger} />
                    );
                  }}
                />
                <Route path="/result" exact={true} component={Result} />
              </Switch>
            </RealAppContainer>
            {/* <Advertisement /> */}
          </AppContainer>
        </ApolloProvider>
      </>
    );
  }
}

export default App;
