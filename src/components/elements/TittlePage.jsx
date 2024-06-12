const TittlePage = ({ tittleText }) => {
  return (
    <div className="flex items-center">
      <div className="items-center ">
        <img
          className="w-5 h-[18] md:w-7 md:h-7 lg:w-10 lg:h-10"
          src="logo-2.svg"
          alt=""
        />
      </div>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-medium pl-2">
        {tittleText}
      </h1>
    </div>
  );
};

export default TittlePage;
