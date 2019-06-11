import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./muiTheme";
import Navigation from "./Navigation/Navigation";
import SearchAppBar from "./SearchBar/SearchBar";
import GlobalStyle from "./App.styles";

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <SearchAppBar />
      <Navigation />
    </ThemeProvider>
  </>
);

export default App;
