import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#47B5FF",
      main: "#1363DF",
      dark: "#06283D",
      contrastText: "#DFF6FF",
    },
    secondary: {
      light: "#EE6983",
      main: "#850E35",
      dark: "#45071c",
      contrastText: "#FFC4C4",
    },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
