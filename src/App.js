import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServicesData from "./components/ServicesData";
import Success from "./components/Success";
import Portfolio from "./components/Portfolio";
import PortfolioData from "./components/PortfolioData";
import AboutUs from "./components/AboutUS";
import Feature from "./components/Feature";
import FeatureData from "./components/FeatureData";
import MyWeb from "./components/MyWeb";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <div class="services">
        {ServicesData.map((val) => {
          return (
            <Services
              key={val.key}
              imgSrc={val.imgSrc}
              heading={val.heading}
              paragraph={val.paragraph}
            />
          );
        })}
      </div>
      <Success />

      <div class="portfolio">
        <div class="portfolio-main">
          {PortfolioData.map((val) => {
            return (
              <Portfolio
                imgSrc={val.imgSrc}
                heading={val.heading}
                paragraph={val.paragraph}
              />
            );
          })}
        </div>
      </div>
      <AboutUs />
      <div class="feature">
        {FeatureData.map((val) => {
          return (
            <Feature
              imgSrc={val.imgSrc}
              heading={val.heading}
              paragraph={val.paragraph}
            />
          );
        })}
      </div>
      <MyWeb />
      <Footer />
    </>
  );
};

export default App;
