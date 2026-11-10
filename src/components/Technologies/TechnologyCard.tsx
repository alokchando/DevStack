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
  return (
    <div className="flex flex-col h-full min-h-[340px] rounded-2xl border border-slate-200 bg-white p-5 gap-5 text-slate-500 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 hover:border-sky-200 hover:-translate-y-1 transition-all duration-300">
      {/* Icon and Badge */}
      <div className="flex items-center justify-between gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100">
          <img
            className="w-8 h-8 object-contain"
            src={technology.icon}
            alt={technology.name}
          />
        </div>

        <p
          className="rounded-full px-3 py-1 text-xs font-semibold border"
          style={{
            color: technology.color,
            borderColor: technology.color,
            backgroundColor: `color-mix(in srgb, ${technology.color} 15%, white)`,
          }}
        >
          {technology.badge}
        </p>
      </div>

      {/* Technology Information */}
      <div className="flex flex-col gap-2 flex-grow">
        <h2 className="font-bold text-lg text-slate-900">{technology.name}</h2>

        <p className="text-sm text-slate-500 leading-6">
          {technology.description}
        </p>
      </div>

      {/* Technology Details */}
      <div className="flex flex-wrap items-center gap-2">
        <p className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
          {technology.category}
        </p>

        <p className="rounded-lg bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-600">
          {technology.difficulty}
        </p>

        <p className="ml-auto text-sm font-bold text-slate-800">
          ⭐ {technology.rating}
        </p>
      </div>

      {/* Add Button */}
      <button
        onClick={() => addToStack(technology)}
        className={`w-full rounded-xl py-3 px-4 text-sm font-semibold transition-all duration-300 ${
          isAdded
            ? "bg-sky-50 text-sky-600 border border-sky-200"
            : "bg-(image:--brand-gradient) text-white shadow-md shadow-sky-500/15 hover:shadow-sky-500/30 hover:-translate-y-0.5"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
