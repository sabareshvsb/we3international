import { ShieldCheck, Leaf, Globe, Truck } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Leaf className="text-green-600 w-10 h-10" />,
      title: "100% Natural",
      desc: "Made from real fruits with no additives.",
    },
    {
      icon: <ShieldCheck className="text-green-600 w-10 h-10" />,
      title: "No Preservatives",
      desc: "Healthy snacks with no artificial preservatives.",
    },
    {
      icon: <Globe className="text-green-600 w-10 h-10" />,
      title: "Export Quality",
      desc: "International quality standards and packaging.",
    },
    {
      icon: <Truck className="text-green-600 w-10 h-10" />,
      title: "Fast Delivery",
      desc: "Reliable shipping across India and export markets.",
    },
  ];

  return (
    <section className="py-24 bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Why Choose WE3?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white text-black rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}