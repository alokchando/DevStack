import bannerStack from "../../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.12] tracking-tight bg-(image:--brand-gradient) bg-clip-text text-transparent">
              Build Your Ideal
              <br />
              Development Stack
            </h1>

            <p className="text-sm sm:text-base text-slate-500 leading-7 max-w-xl">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
              <button className="w-full sm:w-52 rounded-xl px-6 py-3.5 text-white font-semibold bg-(image:--brand-gradient) shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-1 transition-all duration-300">
                Explore Technologies
              </button>

              <button className="w-full sm:w-52 rounded-xl border border-slate-200 px-6 py-3.5 text-slate-700 font-semibold hover:border-sky-400 hover:text-sky-500 hover:bg-sky-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={bannerStack}
              alt="Development technology stack"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
