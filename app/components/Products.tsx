import Image from "next/image";

export default function Products() {
  const products = [
    { name: "Freeze Dried Mango 25G", image: "mango.jpg", price: "₹70" },
    { name: "Freeze Dried Strawberry 25G", image: "strawberry.jpg", price: "₹100" },
    { name: "Freeze Dried Kiwi 25G", image: "kiwi.jpg", price: "₹120" },
    { name: "Freeze Dried Jackfruit 25G", image: "jackfruit.jpg", price: "₹90" },
    { name: "Freeze Dried Banana 25G", image: "banana.jpg", price: "₹40" },
    { name: "Freeze Dried Papaya 25G", image: "papaya.jpg", price: "₹70" },
    { name: "Freeze Dried Pineapple 25G", image: "pineapple.jpg", price: "₹75" },
  ];

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-green-700">
          Our Products
        </h2>

        <p className="text-center text-gray-600 mt-4">
          100% Natural • No Preservatives • No Added Sugar
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <Image
                src={`/fruits/${product.image}`}
                alt={product.name}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />

              <div className="p-5" >
                <h3 className="text-black text-xl font-bold">
                  {product.name}
                </h3>

                <p className="text-700 font-bold mt-2 text-black">
                  {product.price}
                </p>

               <a
  href={`https://wa.me/919003788941?text=${encodeURIComponent(
    `Hi WE3 International, I'm interested in ${product.name}. Please share more details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-5"
>
  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
    Enquire Now
  </button>
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
