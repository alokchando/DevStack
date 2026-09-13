import bannerStack from "../../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-[#FFFFFF] text-cyan-400 flex justify-between items-center px-40 ">
      <div className="w-1/2 flex flex-col items-start gap-6">
        <h1 className="text-[50px] font-bold leading-none bg-(image:--brand-gradient) bg-clip-text text-transparent">
          Build Your Ideal
          <br />
          Development Stack
        </h1>
        <p className="text-[#475569]">
          Explore frontend, backend, database, and tooling options, compare them
          side
          <br />
          by side, and put together the stack that fits your
          <br />
          next project.
        </p>
        <div className="flex gap-7">
          <button className=" w-52 rounded-lg  px-6 py-3 text-[#FFFFFF] bg-(image:--brand-gradient)">
            Explore Technologies
          </button>
          <button className=" w-52 rounded-lg border border-[#E5E7EB] px-6 py-3 text-[#374151]">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src={bannerStack} alt="" />
      </div>
    </section>
  );
};

export default Hero;
