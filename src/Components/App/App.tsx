import * as React from "react";
import Game from "../../Routes/Game";
import Home from "../../Routes/Home";
// import Fix from "../../Routes/Fix";
import Result from "../../Routes/Result";
import { GlobalStyle } from "../../global-styles";
import { Switch, Route } from "react-router";
import { ApolloProvider } from "react-apollo";
import client from "../../withApollo";
import styled from "styled-components";

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Advertisement = styled.div`
  position: relative;
  height: 10%;
  background-color: goldenrod;
  z-index: 10;
`;

const RealAppContainer = styled.div`
  position: relative;
  height: 80%;
`;

class App extends React.Component {
  public render() {
    return (
      <>
        <ApolloProvider client={client}>
          <AppContainer>
            <Advertisement />
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
            <Advertisement />
          </AppContainer>
        </ApolloProvider>
      </>
    );
  }
}

export default App;
