const CradServices = ({ img, text }) => {
  return (
    <>
      <div className="relative hover:cursor-pointer">
        <div className="absolute inset-0 bg-gray-700 opacity-30 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium absolute text-white">
            {text}
          </h1>
        </div>
        <div className="w-full overflow-hidden h-[168px] md:h-[190px] lg:h-[350px]">
          <img
            src={`/services/${img}`}
            alt=""
            className="w-full rounded-md h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default CradServices;
