import LinePage from "@/components/elements/LinePage";
import TittlePage from "@/components/elements/TittlePage";
import CradProduct from "@/components/fragments/CradProduct";
import { FaSearch } from "react-icons/fa";

export const ShopPage = () => {
  return (
    <div className="pt-10 mx-4">
      <div className="flex w-full justify-between items-center">
        <div className="w-1/2">
          <TittlePage tittleText={"Shop"} />
        </div>
        <div className="w-1/2">
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
      <LinePage />
      <h2 className="text-base font-medium mb-5 text-black">
        Featured Products
      </h2>
      <div>
        <ul className="grid grid-cols-5 text-xs text-center font-semibold items-center">
          <li className="bg-gradient-to-l from-slate-700 to-slate-900 rounded-lg py-[10px] text-white border-spacing-1">
            Random
          </li>
          <li className="text-black/80">Cat</li>
          <li className="text-black/80">Dogs</li>
          <li className="text-black/80">Fish</li>
          <li className="text-black/80">Birds</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 mt-5 md:grid-cols-3 lg:grid-cols-3 gap-[15px]">
        <CradProduct img="product-1.png" />
        <CradProduct img="product-2.png" />
        <CradProduct img="product-2.png" />
      </div>
    </div>
  );
};
