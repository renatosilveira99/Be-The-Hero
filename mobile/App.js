import React, { Component } from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import Routes from "./src/routes";

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
