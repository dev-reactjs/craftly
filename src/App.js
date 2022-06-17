import React from "react";
import Header from "./components/header/Header";
import Blog from "./pages/Blog";
import { ThemeProvider } from "styled-components";
import "./css/common.css";

/* styled component customisation */
const theme = {
  dark: {
    primary: "#9979FD",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#9979FD",
  },
};

/* main App*/
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Blog />
    </ThemeProvider>
  );
}

export default App;
