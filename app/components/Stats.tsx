export default function Stats() {
  const stats = [
    { number: "100%", label: "Natural Fruits" },
    { number: "0%", label: "Added Sugar" },
    { number: "0%", label: "Preservatives" },
    { number: "7+", label: "Fruit Varieties" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-4xl font-bold text-green-700">
              {stat.number}
            </h2>
            <p className="mt-2 text-gray-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}