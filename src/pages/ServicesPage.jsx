import LinePage from "@/components/elements/LinePage";
import TittlePage from "@/components/elements/TittlePage";
import CradServices from "@/components/fragments/CradServices";

const ServicesPage = () => {
  return (
    <div className="pt-10 mx-4">
      <div>
        <TittlePage tittleText={"Services"} />
      </div>
      <LinePage />
      <div className="grid grid-cols-2 mt-5 gap-[7px]">
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
        <div className="w-full col-span-2 ">
          <CradServices img="services-5.png" text="Adoption" />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
