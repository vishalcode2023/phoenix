import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import MainRouter from "./Router/MainRouter";
import LoadingScreen from "./Components/LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <MainRouter />
    </HelmetProvider>
  );
};

export default App;
