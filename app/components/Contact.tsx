export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-700">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-4">
          We'd love to hear from you. Get in touch with WE3 INTERNATIONAL.
        </p>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">

          <div className="space-y-6 text-lg">

            <div>
              <h3 className="font-bold text-green-700">📍 Address</h3>
              <p>
                No. 9, Srinivasa Illam,<br />
                Narayanan Nagar,<br />
                Gobichettipalayam, Tamil Nadu, India.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-green-700">📧 Email</h3>
              <p>we3intl@gmail.com</p>
            </div>

            <div>
              <h3 className="font-bold text-green-700">📞 Phone</h3>
              <p>+91 9003788941</p>
              <p>+91 74184 85677</p>
            </div>

            <a
              href="https://wa.me/919003789441"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}