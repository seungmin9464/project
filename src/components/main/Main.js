import MainLayout from "./MainLayout";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import Footer from "./include/Footer";
import Contact from "./Contact";
import Header from "./include/Header";

const Main = () => {
  return (
    <MainLayout>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Contact />
      <Footer/>
    </MainLayout>
  );
};

export default Main;