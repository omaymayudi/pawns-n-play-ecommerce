const CardContact = ({ icon, text1, text2, text3 }) => {
  return (
    <div className="flex w-full mb-8">
      <ul className="space-y-1">
        <li className="">
          <a href="" className="text-white text-lg lg:text-xl xl:text-2xl">
            <span>{icon}</span>
          </a>
        </li>
        <li className="font-semibold text-xs lg:text-base xl:text-xl text-white leading-[190%]">
          {text1}
        </li>
        <li className="text-[10px] lg:text-sm xl:text-base  font-legular text-white/60 leading-[160%]">
          {text2}
        </li>
        <li className="text-[10px] lg:text-sm xl:text-base font-semibold text-white leading-[160%]">
          {text3}
        </li>
      </ul>
    </div>
  );
};

export default CardContact;
