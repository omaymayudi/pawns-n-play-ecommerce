import BoxContect from "@/components/elements/BoxContect";
import BoxPage from "@/components/elements/BoxPage";
import LinePage from "@/components/elements/LinePage";
import Paragraf from "@/components/elements/Paragraf";
import TittlePage from "@/components/elements/TittlePage";

const AboutPage = () => {
  return (
    <>
      <BoxPage>
        <div>
          <TittlePage
            tittleText={"About Us"}
            color={"black"}
            logo={"logo-2.svg"}
          />
        </div>
        <LinePage color={"bg-gray-200"} />
        <BoxContect>
          <div className="flex">
            <div className="w-full lg:w-1/2">
              <Paragraf text="At Paws n’ Play, our journey began with a simple yet profound love for animals. Inspired by the unwavering companionship and joy they bring to our lives, we embarked on a mission to create a haven where pets and their owners alike could experience unparalleled happiness and care. " />
              <Paragraf text="Driven by our passion for animal welfare, we hand-select each product and service with meticulous attention to quality and sustainability. From nutritious food and enriching toys to expert grooming and healthcare, every offering is carefully curated to meet the unique needs of our beloved furry friends." />
              <Paragraf text="But our commitment doesn't end there. We're dedicated to fostering a community that celebrates the bond between pets and their human companions. Through educational resources, compassionate support, and memorable experiences, we strive to empower pet owners to provide the best possible care for their furry family members. " />
              <Paragraf text="At Paws n’ Play, customer satisfaction isn't just a goal – it's our guiding principle. We go above and beyond to ensure every interaction leaves tails wagging and hearts smiling. From personalized recommendations to attentive service, we're here to make your journey with your pet as joyful and fulfilling as possible. " />
              <Paragraf text="Join us in our mission to create a world where every pet is cherished, every need is met, and every tail wags with happiness. Welcome to Paws n’ Play, where pets are family, and love knows no bounds." />
            </div>
            <div className="hidden lg:flex w-1/2 ">
              <div className="py-6">
                <div className="ml-24 border border-spacing-2 shadow-lg p-2 rounded-lg">
                  <img className="rounded-lg " src="about-1.png" alt="" />
                </div>
                <div className="justify-start bg-white  w-[250px] h-[250px] relative shadow-lg top-[-105px] rounded-lg p-2 border border-spacing-2">
                  <img src="/about-2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </BoxContect>
      </BoxPage>
    </>
  );
};

export default AboutPage;
