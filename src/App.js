import React from "react";
import NestedAccordion from "./components/NestedAccordion";
import { Box } from "@mui/material";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
