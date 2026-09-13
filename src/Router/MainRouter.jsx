import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage";
import AboutPageContent from "../Components/AboutPageContent";
import ContactPage from "../Components/ContactPage";
import CabinCrewCoursePage from "../Components/CabinCrewCoursePage";
import AirportGroundOperationsPage from "../Components/AirportGroundOperationsPage";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route
          path="/courses/aviation-hospitality-travel-management"
          element={<CabinCrewCoursePage />}
        />
        <Route
          path="/courses/airport-ground-services"
          element={<AirportGroundOperationsPage />}
        />
        <Route path="/aboutus" element={<AboutPageContent />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
