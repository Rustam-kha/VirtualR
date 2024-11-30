import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="py-16 bg-neutral-900 text-white">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold">
          Pricing Plans
        </h2>
        <p className="text-center text-neutral-400 mt-4 text-lg">
          Choose the plan that fits your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
              <p className="text-5xl font-bold text-orange-500">
                {option.price}
              </p>
              <p className="text-neutral-400 text-lg mt-2">/Month</p>
              <ul className="mt-6 space-y-3">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-300">
                    <CheckCircle2 className="text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-800 text-white rounded hover:from-orange-600 hover:to-orange-900 transition"
                aria-label={`Subscribe to ${option.title}`}
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
