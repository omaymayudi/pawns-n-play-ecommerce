const CradProduct = ({ img }) => {
  return (
    <img
      src={`/prodcts/${img}`}
      alt=""
      className="w-full hover:cursor-pointer"
    />
  );
};

export default CradProduct;
