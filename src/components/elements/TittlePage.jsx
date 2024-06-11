import logo from "../../assets/logo-2.svg";

const TittlePage = ({ tittleText }) => {
  return (
    <div className="flex items-center">
      <div className="items-center ">
        <img className="w-5 h-[18]" src={logo} alt="" />
      </div>
      <h1 className="text-xl font-medium pl-2">{tittleText}</h1>
    </div>
  );
};

export default TittlePage;
