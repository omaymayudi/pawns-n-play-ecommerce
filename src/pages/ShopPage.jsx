import BoxContect from "@/components/elements/BoxContect";
import BoxPage from "@/components/elements/BoxPage";
import LinePage from "@/components/elements/LinePage";
import TittlePage from "@/components/elements/TittlePage";
import CardProduct from "@/components/fragments/CardProduct";
import { FaSearch } from "react-icons/fa";

export const ShopPage = () => {
  return (
    <BoxPage>
      <div className="flex w-full justify-between items-center">
        <div className="w-1/2">
          <TittlePage tittleText={"Shop"} color={"black"} logo={"logo-2.svg"} />
        </div>
        <div className="w-1/2 md:hidden">
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
                <FaSearch className="w-5 h-5 text-slate-500" />
              </div>
              <input
                type="text"
                className="w-full text-sm py-2 focus:border-b-2 border-blue-500 focus:outline-none"
                placeholder=""
              />
            </div>
          </form>
        </div>
      </div>
      <LinePage color={"bg-gray-200"} />

      <BoxContect>
        <div className="justify-between flex mb-5 md:mb-7 lg:mb-10">
          <div className=" w-1/2 ">
            <h2 className="text-base  md:text-2xl lg:text-4xl font-medium text-black">
              Featured Products
            </h2>
          </div>
          <div className="hidden md:flex md:w-1/2">
            <form className="w-full">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaSearch className="w-5 h-5 text-slate-500" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 text-sm py-2 focus:border-b-2 border-blue-500 focus:outline-none md:text-xl xl:text-2xl"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ul className="grid grid-cols-5 text-xs md:text-xl xl:text-2xl text-center font-semibold items-center w-full md:w-[492px] lg:w-[592px]">
            <li className="bg-gradient-to-l from-slate-700 to-slate-900 rounded-lg py-[10px] text-white border-spacing-1 hover:cursor-pointer">
              Random
            </li>
            <li className="text-black/80 hover:cursor-pointer">Cat</li>
            <li className="text-black/80 hover:cursor-pointer">Dogs</li>
            <li className="text-black/80 hover:cursor-pointer">Fish</li>
            <li className="text-black/80 hover:cursor-pointer">Birds</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 mt-5 md:grid-cols-3 lg:grid-cols-3 gap-[15px]">
          <CardProduct img="product-1.png" />
          <CardProduct img="product-2.png" />
          <CardProduct img="product-2.png" />
        </div>
        <div className="hidden md:flex justify-end lg:pt-9 md:pt-5">
          <a href="#" className="text-blue-500 underline lg:text-lg">
            {"View More >>"}
          </a>
        </div>
      </BoxContect>
    </BoxPage>
  );
};
