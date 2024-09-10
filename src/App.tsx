import { Home } from "./components/pages/Home.tsx";
import { InputTextProvider } from "./providers/InputTextProvider.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme.ts";
import PatientVisitSummary from "./test.tsx";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <InputTextProvider>
          <Home />
          <PatientVisitSummary />
        </InputTextProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
