import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";
import Homepage from "./Homepage";
import OurTeamPage from "./OurTeamPage";
import ServicesPage from "./ServicesPage";
import { ShopPage } from "./ShopPage";

export const IndexPage = () => {
  return (
    <>
      <div className="container">
        <section>
          <Homepage />
        </section>
        <div className="container">
          <section>
            <ShopPage />
          </section>
        </div>
        <div className="container">
          <section>
            <ServicesPage />
          </section>
        </div>
        <div className="container">
          <section>
            <AboutPage />
          </section>
        </div>
        <div className="container">
          <section>
            <BlogPage />
          </section>
        </div>
        <div className="container">
          <section>
            <OurTeamPage />
          </section>
        </div>
        <div className="container">
          <section>
            <ContactPage />
          </section>
        </div>
      </div>
    </>
  );
};
