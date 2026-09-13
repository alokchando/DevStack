import type { Technology } from "../../type/type";

export interface StackaddProps {
  stack: Technology[];
  removeAll: () => void;
  removeStack: (name: string) => void;
}

const Stackadd = ({ stack, removeAll, removeStack }: StackaddProps) => {
  return (
    <div className="flex flex-col gap-8 w-95 p-5 border border-[#F1F5F9] ">
      <div>
        <h2 className="font-bold">Your Stack</h2>
        {stack.length === 0 ? (
          <p className="text-gray-500">No technologies selected yet.</p>
        ) : (
          <p className="text-[#64748B]">{stack.length} Technology Selected</p>
        )}
      </div>
      <div>
        {stack.length === 0 ? (
          <div className="flex justify-center items-center rounded-3xl h-20  border border-[#F1F5F9] text-center " >
            <p className="">Your stack is empty.</p>
          </div>
        ) : (
          stack.map((technology) => (
            <div className="flex justify-between p-2 border border-[#F1F5F9] rounded-sm mb-3.5 "key={technology.name}>
              <div>
                <img className="w-8" src={technology.icon} alt="" />
                <p className="font-bold ">{technology.name}</p>
                <p className="font-light text-[10px]">{technology.badge}</p>
              </div>
              <button onClick={() => removeStack(technology.name)}>✕</button>
            </div>
          ))
        )
        
      }
      {(stack.length===0?<div></div>:
      <div className="flex justify-center">
        <button
          className="h-10 w-full border font-extrabold border-[#D82C20] text-[#D82C20] rounded-md"
          onClick={removeAll}
          disabled={stack.length === 0}
        >
          Remove All
        </button>
      </div>)}
      </div>
    </div>
  );
};

export default Stackadd;
