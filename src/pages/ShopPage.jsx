import TittlePage from "@/components/elements/TittlePage";
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
      <hr className="w-full h-1 my-8 bg-gray-200 border-0 rounded " />
      <h2></h2>
    </div>
  );
};
