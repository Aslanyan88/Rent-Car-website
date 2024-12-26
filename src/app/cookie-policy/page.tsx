// app/cookie-policy/page.tsx
export default function CookiePolicy() {
    return (
      <main className="flex justify-center w-full py-16">
        <div className="w-[90%] sm:w-[85%] lg:w-3/4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. What Are Cookies</h2>
              <p className="text-gray-600">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their sites are used.
              </p>
            </section>
   
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. How We Use Cookies</h2>
              <p className="text-gray-600">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To maintain your session while you use our services</li>
                <li>To remember your preferences and settings</li>
                <li>To improve the performance of our website</li>
                <li>To analyze how our website is used</li>
                <li>To personalize your experience</li>
              </ul>
            </section>
   
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Essential Cookies</h3>
                  <p className="text-gray-600">Required for the website to function properly. Cannot be disabled.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Performance Cookies</h3>
                  <p className="text-gray-600">Help us understand how visitors interact with our website.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Functional Cookies</h3>
                  <p className="text-gray-600">Remember your preferences and personalize your experience.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Marketing Cookies</h3>
                  <p className="text-gray-600">Track your activity across websites to deliver targeted advertising.</p>
                </div>
              </div>
            </section>
   
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Managing Cookies</h2>
              <p className="text-gray-600">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>View cookies stored on your device</li>
                <li>Allow, block, or delete cookies</li>
                <li>Set preferences for certain websites</li>
                <li>Enable or disable third-party cookies</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Please note that blocking certain cookies may impact the functionality of our website.
              </p>
            </section>
   
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Third-Party Cookies</h2>
              <p className="text-gray-600">
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. You can check the third-party websites for more information about these cookies and how to manage them.
              </p>
            </section>
   
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>
   
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our Cookie Policy, please contact us:
              </p>
              <div className="text-gray-600">
                <p>Email: privacy@carrental.com</p>
                <p>Phone: +1 (234) 567-890</p>
                <p>Address: 123 Cookie Street, City, Country</p>
              </div>
            </section>
   
            <p className="text-sm text-gray-500 mt-8">
              Last updated: December 23, 2024
            </p>
          </div>
        </div>
      </main>
    );
   }