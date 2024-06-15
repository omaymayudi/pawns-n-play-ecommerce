const TittlePage = ({ tittleText, logo, color }) => {
  return (
    <div className="flex items-center">
      <div className="items-center ">
        <img
          className="w-5 h-[18] md:w-7 md:h-7 lg:w-10 lg:h-10"
          src={logo}
          alt=""
        />
      </div>
      <h1
        className={`text-xl md:text-2xl lg:text-4xl font-medium pl-2 text-${color}`}
      >
        {tittleText}
      </h1>
    </div>
  );
};

export default TittlePage;
