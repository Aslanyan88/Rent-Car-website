// app/faq/page.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What documents do I need to rent a car?",
    answer: "To rent a car, you'll need a valid driver's license, a credit card in your name, and proof of insurance. International renters may need additional documentation like a passport or international driving permit."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Reservations can be cancelled free of charge up to 24 hours before the scheduled pickup time. Late cancellations or no-shows may incur charges equal to one day's rental fee."
  },
  {
    question: "Is insurance included in the rental price?",
    answer: "Basic insurance coverage is included in the rental price. Additional coverage options are available for purchase. We recommend reviewing our insurance options to ensure you have adequate coverage for your needs."
  },
  {
    question: "Can I add an additional driver?",
    answer: "Yes, additional drivers can be added to the rental agreement. They must meet our age requirements and present a valid driver's license. Additional fees may apply."
  },
  {
    question: "What is your fuel policy?",
    answer: "Our vehicles are provided with a full tank of fuel and should be returned with the same fuel level. If the vehicle is returned with less fuel, a refueling charge will be applied."
  },
  {
    question: "Do you offer pickup and drop-off services?",
    answer: "Yes, we offer pickup and drop-off services at major airports and select locations. Please check availability and fees for your specific location when booking."
  },
  {
    question: "What happens if I return the car late?",
    answer: "Late returns may incur additional charges. We provide a grace period of 29 minutes, after which an additional day's rental fee may be charged."
  },
  {
    question: "Is there a security deposit?",
    answer: "Yes, a security deposit is required and will be held on your credit card. The amount varies depending on the vehicle type. The deposit is fully refundable upon return of the vehicle in its original condition."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-center w-full py-16">
      <div className="w-[90%] sm:w-[85%] lg:w-3/4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-6 bg-[#5937E0] text-white rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <p className="mb-4">
            Can not find the answer you are looking for? Please reach out to our customer support team.
          </p>
          <div className="space-y-2">
            <p>Email: support@carrental.com</p>
            <p>Phone: +1 (234) 567-890</p>
          </div>
        </div>
      </div>
    </div>
  );
}