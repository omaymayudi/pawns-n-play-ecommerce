import BoxPage from "@/components/elements/BoxPage";
import LinePage from "@/components/elements/LinePage";
import TittlePage from "@/components/elements/TittlePage";
import { CardOurTeam } from "@/components/fragments/CardOurTeam";

const OurTeamPage = () => {
  return (
    <>
      <BoxPage>
        <div>
          <TittlePage
            tittleText={"Our Team"}
            color={"black"}
            logo={"logo-2.svg"}
          />
        </div>

        <LinePage color={"bg-gray-200"} />
        <div className="grid grid-cols-2 md:grid-cols-4 mb-10 lg:mb-16">
          <CardOurTeam
            avatar={"team-1.png"}
            name={"Dr. Olivia Rhye"}
            position={"Senior Veterinarian"}
          />
          <CardOurTeam
            avatar={"team-2.png"}
            name={"Phoenix Baker"}
            position={"Asst. Veterinarian"}
          />
          <CardOurTeam
            avatar={"team-3.png"}
            name={"Lana Steiner"}
            position={"Resident Veterinarian"}
          />
          <CardOurTeam
            avatar={"team-4.png"}
            name={"Demi Wilkinson"}
            position={"Intern Veterinarian"}
          />
        </div>
      </BoxPage>
    </>
  );
};

export default OurTeamPage;
