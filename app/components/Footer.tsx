export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-2xl font-bold">WE3 INTERNATIONAL</h3>
          <p className="mt-3 text-green-100">
            Exporting Quality, Delivering Trust.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Contact</h4>
          <p className="mt-3">📞 +91 9003788941</p>
          <p>📧 we3intl@gmail.com</p>
          <p className="mt-2">
            Gobichettipalayam, Tamil Nadu, India
          </p>
        </div>

      </div>

      <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-200">
        © {new Date().getFullYear()} WE3 INTERNATIONAL. All Rights Reserved.
      </div>
    </footer>
  );
}