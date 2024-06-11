import Homepage from "./Homepage";
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
      </div>
    </>
  );
};
