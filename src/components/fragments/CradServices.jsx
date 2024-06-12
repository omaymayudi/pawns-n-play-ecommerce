const CradServices = ({ img, text }) => {
  return (
    <>
      <div className="relative ">
        <div className="absolute inset-0 bg-gray-700 opacity-30 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl font-medium absolute text-white">{text}</h1>
        </div>
        <div className="w-full overflow-hidden h-[168px]">
          <img
            src={`src/assets/services/${img}`}
            alt=""
            className="w-full rounded-md h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default CradServices;