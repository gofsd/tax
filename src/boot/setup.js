import * as React from "react";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import Main from "../container/Main";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";


export default class Setup extends React.Component{
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false }))
    };
  }

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <Main />
        </Provider>
      </StyleProvider>
    );
  }
}
