import { features } from "../constants";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 ">
      <div className="py-16 bg-neutral-900 text-white">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Build{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
              with Ease
            </span>
          </h2>
          <p className="text-neutral-400 mt-4 text-lg">
            Explore features designed to simplify your workflow.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 p-3 bg-neutral-700 rounded-full text-orange-500">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold">{feature.text}</h3>
              <p className="text-neutral-400 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
