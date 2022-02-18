import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./theme";
import Progress from "./components/Progress";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";

function App(): JSX.Element {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters>
        <Progress />
        <Header />
        <Box
          sx={{
            minHeight: "calc(100vh - 75px)",
            marginTop: "75px",
            backgroundColor: "secondary.main",
          }}
        >
          <Routes />
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
