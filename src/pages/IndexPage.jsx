import AboutPage from "./AboutPage";
import Homepage from "./Homepage";
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
      </div>
    </>
  );
};
