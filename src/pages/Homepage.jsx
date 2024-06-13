const Homepage = () => {
  return (
    <>
      <div className="">
        <div className="bg-[url('/Hero-Section-mobile.png')] md:bg-[url('/Hero-bg-home.png')] bg-cover  h-screen w-full flex flex-wrap">
          <div className="pt-[112px] px-7 md:px-16 lg:px-20 xl:pt-28">
            <div className="justify-start text-white">
              <div className="xl:pr-[530px] lg:pr-[400px] md:pr-[250px] mb-7 lg:pt-32 md:pt-12">
                <h1 className="font-semibold leading-[130%] text-3xl xl:text-6xl">
                  {`Pawsitively Perfect: Where Every Pet's Dream Comes True!`}
                </h1>
                <p className="text-sm lg:text-base leading-[120%] pt-[10px] pb-[50px]">
                  {`Welcome to Paws n’ Play, the ultimate destination for pet
                  lovers! Explore a world of tail-wagging joy and furry
                  companionship with our wide range of products and services.
                  From pampering essentials to playful toys, we're here to make
                  every moment with your pet pawsitively perfect!"`}
                </p>
              </div>
              <button
                type="button"
                className="py-3 text-center px-7 lg:py-[10px] lg:px-[18px] text-sm font-medium text-white focus:outline-none bg-transparent rounded-3xl border border-gray-200 hover:bg-slate-300  focus:z-10 focus:ring-4 focus:ring-gray-100  "
              >
                <div className="items-center flex justify-center">
                  <span className="">Shop Now</span>
                  <span className="inline-block pl-3">
                    <img className="h-6 w-6" src="logo.png" alt="" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
