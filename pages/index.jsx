import HeadTag from "../components/HeadTag";
import Header from "../components/Header";
import ShortLinkForm from "./../components/Form";
import SiteFeatures from "./../components/FeatureSection";
import SectionBottom from "./../components/FeatureSection/SectionBottom";
import Footer from "./../components/Footer";

export default function Home() {
  return (
    <>
      <HeadTag />
      <Header />
      <main>
        <ShortLinkForm />
        <SiteFeatures />
        <div className="h-[80px] md:h-[208px]"></div>
        <SectionBottom />
      </main>
      <Footer />
    </>
  );
}
