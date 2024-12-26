// app/privacy-policy/page.tsx
export default function PrivacyPolicy() {
    return (
      <main className="flex justify-center w-full py-16">
        <div className="w-[90%] sm:w-[85%] lg:w-3/4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
              <p className="text-gray-600">
                We collect information that you provide directly to us, including your name, email address, phone number, and other information you choose to provide when using our car rental services.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Process and manage your car rental bookings</li>
                <li>Communicate with you about your reservations</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Information Sharing</h2>
              <p className="text-gray-600">
                We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our platform and providing our services.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Your Rights</h2>
              <p className="text-gray-600">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Cookies</h2>
              <p className="text-gray-600">
                We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-gray-600">
                <p>Email: privacy@carrental.com</p>
                <p>Phone: +1 (234) 567-890</p>
                <p>Address: 123 Privacy Street, City, Country</p>
              </div>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the last updated date.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: December 23, 2024
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  }