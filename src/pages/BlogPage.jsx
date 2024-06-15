import BoxPage from "@/components/elements/BoxPage";
import LinePage from "@/components/elements/LinePage";
import TittlePage from "@/components/elements/TittlePage";
import Paragraf from "@/components/elements/Paragraf";

const BlogPage = () => {
  return (
    <>
      <BoxPage>
        <div>
          <TittlePage tittleText={"Blog"} color={"black"} logo={"logo-2.svg"} />
        </div>
        <LinePage color={"bg-gray-200"} />

        <div className="md:flex">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-xl lg:text-3xl font-semibold md:mb-4 lg:mb-12">
              Milestone: 20,000 Pets Treated
            </h2>
            <Paragraf text="Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat." />
            <h3 className="hidden md:block text-lg lg:text-2xl font-semibold lg:mt-8 lg:mb-4 md:mt-4">
              Renewed target
            </h3>
            <Paragraf text="Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac." />
            <button className="bg-gradient-to-l from-slate-700 to-slate-900 rounded-lg py-[10px] px-[15px] lg:py-5 lg:px-6 text-white border-spacing-1 hover:cursor-pointer my-4 md:mt-6 lg:mt-12 md:text-xl">
              Read More
            </button>
          </div>
          <div className="hidden md:flex w-1/2 items-center">
            <img
              className="w-full justify-center  pl-4 lg:pl-10 xl:pl-16"
              src="/blog-1.png"
              alt=""
            />
          </div>
        </div>
      </BoxPage>
    </>
  );
};

export default BlogPage;
