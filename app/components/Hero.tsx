export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-green-700 to-green-500 text-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Premium Freeze-Dried Fruits
          </h1>

          <p className="mt-6 text-xl text-green-100">
            Healthy • Natural • Export Quality
          </p>

          <p className="mt-6 text-lg leading-8">
            WE3 INTERNATIONAL delivers premium freeze-dried fruits that
            preserve natural taste, colour and nutrients. Perfect for
            healthy snacking and global export.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#products"
              className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              View Products
            </a>

            <a
              href="#contact"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="WE3 INTERNATIONAL"
            className="w-96 rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
     
  );
}
<section
  id="home"
  className="pt-24 bg-gradient-to-r from-green-700 to-green-500 text-white min-h-screen flex items-center"
></section>
