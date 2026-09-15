import SEO from "../seo/SEO";
import { SEO_CONFIG } from "../seo/seoConfig";

import CredentialsSection from "./Credentialssection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import KeyHighlights from "./KeyHighlights";
import RecruitmentSection from "./RecruitmentSection";
import StudentShowcase from "./Studentshowcase";

const LandingPage = () => {
  return (
    <div>
      {/* Homepage SEO */}
      <SEO {...SEO_CONFIG.home} />

      <HeroSection />
      <KeyHighlights />
      <RecruitmentSection />
      <StudentShowcase />
      <CredentialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
