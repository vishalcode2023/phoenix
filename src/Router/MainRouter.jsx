import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
