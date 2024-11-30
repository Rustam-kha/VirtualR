import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 ">
      <div className="py-16 bg-neutral-900 text-white">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <p className="text-neutral-300 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.user}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">{testimonial.user}</h3>
                  <p className="text-neutral-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
