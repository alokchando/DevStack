import { use, useState } from "react";
import type { Technology } from "../../type/type";
import TechnologyCard from "./TechnologyCard";
import Stackadd from "../Stackadd/Stackadd";
import { toast } from "react-toastify";

export interface TechnologiesProps {
  technologiePromise: Promise<Technology[]>;
}

const Technologies = ({ technologiePromise }: TechnologiesProps) => {
  const technologies = use(technologiePromise);
  const [stack, setStack] = useState<Technology[]>([]);

  // add
  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.name === technology.name);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    toast.success(`${technology.name} added to stack!`);

    setStack((w) => {
      return [...w, technology];
    });
  };

  // remove
  const removeStack = (name: string) => {
    setStack((e) => e.filter((technology) => technology.name !== name));
    toast.info(`${name} removed from stack!`);
  };

  // removeAll
  const removeAll = () => {
    setStack([]);
    toast.warning("Remove all!");
  };

  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Explore the{" "}
            <span className="bg-(image:--brand-gradient) bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-7 max-w-2xl">
            Pick one technology per category to build your ideal stack. Explore
            different tools and find the right combination for your next
            project.
          </p>
        </div>

        {/* Technologies and Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Technology Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 content-start">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                addToStack={addToStack}
                isAdded={stack.some((item) => item.name === technology.name)}
              />
            ))}
          </div>

          {/* Your Stack */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <Stackadd
                stack={stack}
                removeAll={removeAll}
                removeStack={removeStack}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
