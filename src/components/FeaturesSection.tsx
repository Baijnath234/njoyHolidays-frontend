import {
    FaInfoCircle,
    FaClipboardCheck,
    FaLeaf,
    FaHandsHelping,
  } from "react-icons/fa";
  
  export default function FeaturesSection() {
    const features = [
      {
        icon: <FaInfoCircle className="text-red-500 text-4xl mb-4" />,
        title: "Guidance",
        subtitle: "Expert insight & travel knowledge",
      },
      {
        icon: <FaClipboardCheck className="text-red-500 text-4xl mb-4" />,
        title: "Value",
        subtitle: "Irresistible rates, offers & benefits",
      },
      {
        icon: <FaLeaf className="text-red-500 text-4xl mb-4" />,
        title: "Peace of Mind",
        subtitle: "Reassurance to book with confidence",
      },
      {
        icon: <FaHandsHelping className="text-red-500 text-4xl mb-4" />,
        title: "Service",
        subtitle: "Beside you every step of the way",
      },
    ];
  
    return (
      <section className="relative z-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-xl shadow-sm hover:shadow-lg p-6 text-center transition duration-300 ease-in-out cursor-pointer group"
            >
              {/* Icon Centered */}
              <div className="flex justify-center">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-1 text-gray-900 group-hover:text-red-600">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  