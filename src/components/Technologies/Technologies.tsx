import { use, useState } from "react";
import type { Technology } from "../../type/type";
import TechnologyCard from "./TechnologyCard";
import Stackadd from "../Stackadd/Stackadd";

export interface TechnologiesProps {
  technologiePromise: Promise<Technology[]>;
}
const Technologies = ({ technologiePromise }: TechnologiesProps) => {
  const technologies = use(technologiePromise);
  const [stack, setStack] = useState<Technology[]>([]);
  // console.log(stack)

  const addToStack = (technology: Technology) => {
    setStack((w) => {
      const alreadyAdded = w.some((item) => item.id === technology.id);
      if (alreadyAdded) {
        return w;
      }
      return [...w, technology];
    });
  };

  const removeStack = (name: string) => {
    setStack((e) => e.filter((technology) => technology.name !== name));
  };
  const removeAll = () => {
    setStack([]);
  };

  return (
    <div className="flex p-20 flex-col gap-5 bg-[#FFFFFF] text-[#0F172A]">
      <div className=" flex flex-col gap-5">
        <h2 className="font-bold text-4xl">
          {" "}
          <span>Explore the Technologies</span>
        </h2>
        <p className="text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-20">
        {/* card */}
        <div className="col-span-2 grid grid-cols-3 gap-5">
          {technologies.map((technology) => (
            <TechnologyCard
              // key={technology.id}
              technology={technology}
              addToStack={addToStack}
              isAdded={stack.some((item) => item.name === technology.name)}
            />
          ))}
        </div>
        {/* add to stack */}
        <div className="col-span-1">
          <Stackadd
            stack={stack}
            removeAll={removeAll}
            removeStack={removeStack}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
