import BoxContect from "@/components/elements/BoxContect";
import BoxPage from "@/components/elements/BoxPage";
import LinePage from "@/components/elements/LinePage";
import TittlePage from "@/components/elements/TittlePage";
import CradServices from "@/components/fragments/CradServices";

const ServicesPage = () => {
  return (
    <BoxPage>
      <div>
        <TittlePage tittleText={"Services"} />
      </div>
      <LinePage />

      <BoxContect>
        <div className="">
          <div className="grid grid-cols-2 lg:grid-cols-3 mt-5 gap-[7px] md:gap-4">
            <div className="w-full">
              <CradServices img="services-1.png" text="Grooming" />
            </div>
            <div className="w-full">
              <CradServices img="services-2.png" text="Boarding" />
            </div>
            <div className="w-full ">
              <CradServices img="services-3.png" text="Veterinary" />
            </div>
            <div className="w-full ">
              <CradServices img="services-4.png" text="Training" />
            </div>
            <div className="w-full col-span-2 lg:row-span-3">
              <CradServices img="services-5.png" text="Adoption" />
            </div>
          </div>
        </div>
      </BoxContect>
    </BoxPage>
  );
};

export default ServicesPage;
