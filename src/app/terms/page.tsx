// app/terms-of-service/page.tsx
export default function TermsOfService() {
    return (
      <div className="flex justify-center w-full py-16">
        <div className="w-[90%] sm:w-[85%] lg:w-3/4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using our car rental services, you agree to be bound by these Terms of Service. If you do not agree to all these terms, you may not use our services.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Rental Requirements</h2>
              <p className="text-gray-600">
                To rent a vehicle, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Be at least 21 years of age</li>
                <li>possess a valid driving license</li>
                <li>Have a valid credit card in your name</li>
                <li>Provide proof of insurance</li>
                <li>Meet our eligibility requirements</li>
              </ul>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Booking and Cancellation</h2>
              <p className="text-gray-600">
                Reservations must be canceled at least 24 hours before the pickup time to receive a full refund. Late cancellations or no-shows may result in charges.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Vehicle Use</h2>
              <p className="text-gray-600">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the vehicle only for lawful purposes</li>
                <li>Not smoke in the vehicle</li>
                <li>Return the vehicle with the same fuel level</li>
                <li>Report any damages immediately</li>
                <li>Not use the vehicle for commercial purposes</li>
              </ul>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Insurance and Liability</h2>
              <p className="text-gray-600">
                Basic insurance is included in the rental price. Additional coverage options are available. You are responsible for any damages not covered by insurance.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Payment Terms</h2>
              <p className="text-gray-600">
                We accept major credit cards for payment. A security deposit will be held during the rental period. Additional charges may apply for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Late returns</li>
                <li>Fuel replacement</li>
                <li>Cleaning fees</li>
                <li>Traffic violations</li>
                <li>Damage repairs</li>
              </ul>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Modifications to Service</h2>
              <p className="text-gray-600">
                We reserve the right to modify or discontinue our service at any time. We will notify users of any material changes to these terms.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Dispute Resolution</h2>
              <p className="text-gray-600">
                Any disputes arising from these terms will be resolved through arbitration in accordance with local laws.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="text-gray-600">
                <p>Email: legal@carrental.com</p>
                <p>Phone: +1 (234) 567-890</p>
                <p>Address: 123 Legal Street, City, Country</p>
              </div>
            </section>
  
            <p className="text-sm text-gray-500 mt-8">
              Last updated: December 23, 2024
            </p>
          </div>
        </div>
      </div>
    );
  }