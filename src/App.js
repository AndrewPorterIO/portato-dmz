import React from "react";
import NestedAccordion from "./components/NestedAccordion";
import { Box, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          m: 2,
        }}
      >
        <NestedAccordion
          title="Parent Accordion 1"
          content="This is the parent accordion content."
        >
          <Box mt={2}>
            <NestedAccordion
              title="Child Accordion 1.1"
              content="This is the nested accordion content."
            />
            <NestedAccordion
              title="Child Accordion 1.2"
              content="This is another nested accordion content."
            />
          </Box>
        </NestedAccordion>

        <NestedAccordion
          title="Parent Accordion 2"
          content="Another parent accordion content."
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
