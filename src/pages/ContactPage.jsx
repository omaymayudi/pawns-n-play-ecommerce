import BoxPage from "@/components/elements/BoxPage";
import TittlePage from "@/components/elements/TittlePage";
import LinePage from "@/components/elements/LinePage";
import { MdOutlineEmail } from "react-icons/md";
import CardContact from "@/components/fragments/CardContact";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import FormContact from "@/components/fragments/FormContact";
import CardContact2 from "@/components/fragments/CardContact2";

const ContactPage = () => {
  return (
    <div className="bg-[rgb(16,24,40)] w-full">
      <BoxPage>
        <div>
          <TittlePage
            tittleText={"Get in touch"}
            color={"white"}
            logo={"logo.png"}
          />
        </div>
        <LinePage color={"bg-gray-200"} />
        <div className="md:flex md:p-4 justify-center items-center">
          <div className="hidden md:flex md:w-1/2">
            <FormContact />
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2">
              <CardContact
                icon={<MdOutlineEmail />}
                text1={"Email"}
                text2={"Our friendly team is here to help."}
                text3={"hello@pawsnplay.com"}
              />
              <CardContact
                icon={<IoChatbubbleOutline />}
                text1={"Live chat"}
                text2={"Our friendly team is here to help."}
                text3={"Start new chat"}
              />
              <CardContact
                icon={<IoLocationOutline />}
                text1={"Office"}
                text2={"Come say hello at our office HQ."}
                text3={"123, Yaya Abatan st, Ogba Lagos."}
              />
              <CardContact
                icon={<BsTelephone />}
                text1={"Phone"}
                text2={"Mon-Fri from 8am to 5pm."}
                text3={"+234 901234 384"}
              />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <FormContact />
        </div>
        <hr className="w-full h-0.5 my-10 bg-gray-200 border-0 rounded mb-5 lg:mb-12" />
        <div className="md:flex justify-center items-center">
          <div className="mb-8 md:w-1/2">
            <h2 className="text-xl font-medium leading-[160%] text-white">
              Join our newsletter
            </h2>
            <p className="text-xs leading-[160%] text-white/70">
              Be the first to receive latest updates on promo, sales and offers
            </p>
          </div>
          <div className="md:w-1/2">
            <form className="mx-auto mb-10 md:flex justify-end items-center md:space-x-2">
              <div className="mb-5 md:mb-0 md:w-2/4">
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="md:w-1/4">
                <button
                  type="submit"
                  className="bg-white rounded-lg py-[10px]  text-black/70 border-spacing-1 hover:cursor-pointer  text-sm w-full"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:flex space-x-12 lg:mt-16 md:mt-8">
          <div className="md:w-1/4">
            <div className="flex items-center">
              <div className="items-center ">
                <img
                  className="w-5 h-[18] md:w-7 md:h-7 "
                  src="/logo.png"
                  alt=""
                />
              </div>
              <h1 className={`text-xl   font-medium pl-2 text-white`}>
                Paws n’ Play
              </h1>
            </div>
            <p className="text-sm leading-[160%] text-white/70 pt-5 pb-7">
              Where wagging tails and purring hearts reign supreme!
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-5">
              <CardContact2
                textTitle={"Shop"}
                text1={"Pet Adoption"}
                text2={"Nutrition"}
                text3={"Pet Care"}
                text4={"Pet Food"}
                text5={"Pricing"}
              />

              <CardContact2
                textTitle={"Company"}
                text1={"About us"}
                text2={"Careers"}
                text3={"Press"}
                text4={"News"}
                text5={"Contact"}
              />

              <CardContact2
                textTitle={"Services"}
                text1={"Grooming"}
                text2={"Boarding"}
                text3={"Traaining"}
                text4={"Vetinary"}
                text5={"Support"}
              />
              <CardContact2
                textTitle={"Social"}
                text1={"Twitter"}
                text2={"Linkedln"}
                text3={"Facebook"}
                text4={"AngelList"}
                text5={"Dribble"}
              />
              <CardContact2
                textTitle={"Legal"}
                text1={"Teams"}
                text2={"Privacy"}
                text3={"Cookies"}
                text4={"Licenses"}
                text5={"Settings"}
              />
            </div>
          </div>
        </div>
      </BoxPage>
    </div>
  );
};

export default ContactPage;
