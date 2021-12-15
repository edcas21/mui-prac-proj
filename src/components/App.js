import React from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import { Box } from "@mui/system";

// theme
import theme from "./ui/theme";

import Header from "./ui/header.component";


// Dummy components
const DummyEl = ({ name }) => {
  return(
    <div>{name}</div>
  );
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <Header />
          <Routes>
            <Route exact path="/" element={<DummyEl name="Home" />}/>
            <Route exact path="/services" element={<DummyEl name="Services" />}/>
            <Route exact path="/customsoftware" element={<DummyEl name="Custom Software" />}/>
            <Route exact path="/mobile" element={<DummyEl name="Mobile" />}/>
            <Route exact path="/websites" element={<DummyEl name="Websites" />}/>
            <Route exact path="/revolution" element={<DummyEl name="The Revolution" />}/>
            <Route exact path="/about" element={<DummyEl name="About Us" />}/>
            <Route exact path="/contact" element={<DummyEl name="Contact Us" />}/>
            <Route exact path="/estimate" element={<DummyEl name="Estimate" />}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
