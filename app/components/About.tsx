export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-r from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-5xl font-bold text-green-700">
            About WE3 INTERNATIONAL
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            WE3 INTERNATIONAL is a trusted exporter of premium freeze-dried
            fruits from India. We are committed to delivering healthy,
            nutritious and export-quality products while preserving the
            natural taste, colour and nutrients of fresh fruits.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-3xl font-bold text-green-700">
                100%
              </h3>
              <p>Natural Fruits</p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-3xl font-bold text-green-700">
                0%
              </h3>
              <p>Added Sugar</p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-3xl font-bold text-green-700">
                0%
              </h3>
              <p>Preservatives</p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-3xl font-bold text-green-700">
                ✓
              </h3>
              <p>Export Quality</p>
            </div>

          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/logo.jpeg"
            alt="WE3"
            className="rounded-3xl shadow-2xl w-96"
          />
        </div>

      </div>
    </section>
  );
}