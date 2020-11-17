import React from "react";
import "./App.css";
import SideMenu from "./Component/SideMenu";
import Content from "./Component/Content";
import Header from "./Component/Header";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Employees from "./Pages/Employees/Employees";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <Header />
      {/* <Content /> */}
      <Employees />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
