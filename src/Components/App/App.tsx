import * as React from "react";
import Game from "../../Routes/Game";
import Home from "../../Routes/Home";
import Result from "../../Routes/Result";
import { GlobalStyle } from "../../global-styles";
import { Switch, Route, Redirect } from "react-router";

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
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
          <Redirect from={"*"} to={"/"} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
