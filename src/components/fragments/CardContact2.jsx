const CardContact2 = ({ textTitle, text1, text2, text3, text4, text5 }) => {
  return (
    <div className="mb-6">
      <ul className="space-y-2 ">
        <li className="text-white text-sm font-bold lg:text-base xl:text-xl">
          {textTitle}
        </li>
        <li className="text-white/80 text-sm lg:text-sm xl:text-base   font-semibold">
          {text1}
        </li>
        <li className="text-white/80 text-sm lg:text-sm xl:text-base  font-semibold">
          {text2}
        </li>
        <li className="text-white/80 text-sm lg:text-sm xl:text-base  font-semibold">
          {text3}
        </li>
        <li className="text-white/80 text-sm lg:text-sm xl:text-base  font-semibold">
          {text4}
        </li>
        <li className="text-white/80 text-sm lg:text-sm xl:text-base  font-semibold">
          {text5}
        </li>
      </ul>
    </div>
  );
};

export default CardContact2;
