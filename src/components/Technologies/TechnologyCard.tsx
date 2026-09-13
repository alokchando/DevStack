import { useState } from "react";
import type { Technology } from "../../type/type";

export interface TechnologyCardProps {
  technology: Technology;
  addToStack: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  addToStack,
  isAdded,
}: TechnologyCardProps) => {
  // const [btn, setBtn] = useState(true);
  return (
    <div className="flex flex-col  border border-[#F1F5F9] w-100 h-85 p-5 gap-5 text-[#64748B] justify-around">
      <div className="flex gap-50">
        <img className="w-7 h-7" src={technology.icon} alt="" />
        <p
          className="rounded-full  px-3 py-1 "
          style={{
            color: technology.color,
            borderColor: technology.color,
            backgroundColor: `color-mix(in srgb, ${technology.color} 30%, white)`,
          }}
        >
          {technology.badge}
        </p>
      </div>
      <h2 className="font-bold text-black">{technology.name}</h2>
      <p>{technology.description}</p>
      <div className="flex gap-1 justify-around">
        <p className=" rounded-lg bg-[#F1F5F9] px-3 py-1 text-sm text-gray-600">
          {technology.category}
        </p>
        <p>{technology.difficulty}</p>
        <p className="font-bold text-black">⭐{technology.rating}</p>
      </div>
      <button
        onClick={() => addToStack(technology)}
        disabled={isAdded}
        className="btn bg-black text-white border-black"
      >
        {isAdded ? "Added" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
