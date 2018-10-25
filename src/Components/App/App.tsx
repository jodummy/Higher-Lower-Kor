import * as React from "react";
import Game from "../../Routes/Game";
import { GlobalStyle } from "../../global-styles";

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Game />
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default App;
