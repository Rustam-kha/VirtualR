import codeImg from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <section id="workflow" className="py-20 ">
      <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
            Coding Workflow
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-12 mt-10">
          <div className="w-full lg:w-1/2">
            <img src={codeImg} alt="code" className="rounded-lg shadow-md" />
          </div>
          <div className="w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-green-400 bg-neutral-700 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div className="ml-4">
                  <h5 className="mt-1 mb-2 text-xl text-white">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
