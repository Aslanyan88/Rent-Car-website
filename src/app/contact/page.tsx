import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div className="w-full bg-[#5937E0] text-white py-16">
        <div className="w-[90%] sm:w-[85%] lg:w-3/4 mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Have questions about our services? We are here to help. Contact us
            through any of the channels below or fill out the form.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="w-[90%] sm:w-[85%] lg:w-3/4 mx-auto -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <Mail className="w-6 h-6 text-[#5937E0] mb-4" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">info@carrental.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <Phone className="w-6 h-6 text-[#5937E0] mb-4" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm">+1 (234) 567-890</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <MapPin className="w-6 h-6 text-[#5937E0] mb-4" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600 text-sm">123 Rental Street, City</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <Clock className="w-6 h-6 text-[#5937E0] mb-4" />
            <h3 className="font-semibold mb-2">Working Hours</h3>
            <p className="text-gray-600 text-sm">Mon - Fri: 9:00 - 18:00</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="w-[90%] sm:w-[85%] lg:w-3/4 mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">
                What documents do I need to rent a car?
              </h3>
              <p className="text-gray-600">
              You will need valid ID, credit card, and verification documents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">
                Can I modify or cancel my reservation?
              </h3>
              <p className="text-gray-600">
                Yes, you can modify or cancel your reservation up to 24 hours
                before pickup.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">
                Is there a security deposit?
              </h3>
              <p className="text-gray-600">
                Yes, we require a refundable security deposit that varies by
                vehicle type.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">
                Do you offer airport pickup?
              </h3>
              <p className="text-gray-600">
                Yes, we offer pickup and drop-off services at major airports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
