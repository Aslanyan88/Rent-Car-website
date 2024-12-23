import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-[90%] sm:w-[85%] lg:w-3/4 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Image 
              src="/logo.svg" 
              alt="Company Logo" 
              width={120} 
              height={40}
              className="mb-4"
            />
            <p className="text-sm">
              Experience the ultimate in car rentals with our premium fleet and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#5937E0] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-[#5937E0] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-[#5937E0] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-[#5937E0] transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our Fleet</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-semibold text-white">Address:</p>
                <p>123 Rental Street, City, Country</p>
              </li>
              <li>
                <p className="font-semibold text-white">Email:</p>
                <a href="mailto:info@carental.com" className="hover:text-white transition-colors">
                  info@carrental.com
                </a>
              </li>
              <li>
                <p className="font-semibold text-white">Phone:</p>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} CarRental. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}