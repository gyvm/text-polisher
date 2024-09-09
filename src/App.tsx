import "./App.css";
import { Home } from "./components/pages/Home.tsx";
import { InputTextProvider } from "./providers/InputTextProvider.tsx";

function App() {
  return (
    <>
      <InputTextProvider>
        <Home />
      </InputTextProvider>
    </>
  );
}

export default App;
