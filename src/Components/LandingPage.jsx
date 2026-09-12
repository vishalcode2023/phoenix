import CredentialsSection from "./Credentialssection";
import HeroSection from "./HeroSection";
import KeyHighlights from "./KeyHighlights";
import RecruitmentSection from "./RecruitmentSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <RecruitmentSection />
      <KeyHighlights />
      <CredentialsSection/>
    </div>
  );
};

export default LandingPage;
