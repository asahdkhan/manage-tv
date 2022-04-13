import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { HashRouter } from "react-router-dom";
import Route from "../routes/appRoutes";
import theme from "../theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Route />
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
