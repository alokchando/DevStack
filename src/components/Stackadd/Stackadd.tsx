import type { Technology } from "../../type/type";

export interface StackaddProps {
  stack: Technology[];
  removeAll: () => void;
  removeStack: (name: string) => void;
}

const StackAdd = ({ stack, removeAll, removeStack }: StackaddProps) => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>

          {stack.length === 0 ? (
            <p className="text-sm text-slate-500 mt-1">
              No technologies selected yet.
            </p>
          ) : (
            <p className="text-sm text-slate-500 mt-1">
              {stack.length} Technology Selected
            </p>
          )}
        </div>

        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-50 text-sky-600 font-bold">
          {stack.length}
        </div>
      </div>

      {/* Stack Items */}
      <div>
        {stack.length === 0 ? (
          <div className="flex flex-col justify-center items-center rounded-xl min-h-32 border border-dashed border-slate-300 bg-slate-50 text-center px-4">
            <p className="text-sm font-medium text-slate-500">
              Your stack is empty.
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Select technologies to build your stack.
            </p>
          </div>
        ) : (
          stack.map((technology) => (
            <div
              className="flex items-center justify-between gap-3 p-3 border border-slate-200 rounded-xl mb-3 hover:border-sky-200 hover:bg-sky-50/40 transition-all duration-200"
              key={technology.name}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100">
                  <img
                    className="w-7 h-7 object-contain"
                    src={technology.icon}
                    alt={technology.name}
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-sm text-slate-800 truncate">
                    {technology.name}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    {technology.badge}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeStack(technology.name)}
                className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              >
                ✕
              </button>
            </div>
          ))
        )}

        {/* Remove All Button */}
        {stack.length === 0 ? (
          <div></div>
        ) : (
          <div className="flex justify-center mt-5">
            <button
              className="h-11 w-full border border-red-200 text-red-500 font-semibold text-sm rounded-xl hover:bg-red-50 hover:border-red-300 transition-colors"
              onClick={removeAll}
              disabled={stack.length === 0}
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StackAdd;
