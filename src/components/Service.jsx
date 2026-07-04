import { services } from "../data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            My Services
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Here are the services I can provide using modern web technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8"
              >
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl mb-6">
                  <Icon />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;