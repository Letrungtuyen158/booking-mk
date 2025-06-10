import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link
                href="/"
                className="text-2xl font-bold text-[rgb(14,71,171)] hover:text-[rgb(14,71,171)]/80 transition-colors"
              >
                <img
                  src="/images/home/logo.webp"
                  alt="logo"
                  className="w-20 h-20 object-contain"
                />
              </Link>
              <p className="text-gray-300 mb-6">
                Your reliable travel partner in Vietnam, Laos and Cambodia
              </p>
            </div>

            {/* Contact Info */}

            <div>
              <p className="font-medium mb-2">Hanoi Head Office</p>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <div className="text-gray-300">
                    <div>+84 24 38364212</div>
                    <div>+84 24 37568868</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    85-87 Hoang Quoc Viet Street,
                    <br />
                    Hanoi, Vietnam
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className=" mt-4 font-medium mb-4">Hochiminh City Office:</p>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <div className="text-gray-300">
                    <div>+84 28 38 3333 88</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Room 3A2, First floor, Toong Office, 126 Nguyen Thi Minh
                    Khai Street, Distric 3, Hochiminh City
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[rgb(14,71,171)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[rgb(14,71,171)] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[rgb(14,71,171)] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[rgb(14,71,171)] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mekong Delta Tours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Mekong Delta Tours</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  Floating Market Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  Homestay Experiences
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  Cycling Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  Cooking Classes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  River Cruises
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  Cultural Tours
                </a>
              </li>
            </ul>
          </div>

          {/* General */}
          <div>
            <h4 className="text-lg font-semibold mb-6">General</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  Meet the Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  Press & Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[rgb(255,200,0)] transition-colors"
                >
                  Partner with Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for travel tips, special offers, and
              Vietnam insights.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90">
                Subscribe
              </Button>
            </div>

            {/* Payment Methods */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-3">We Accept</h5>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-semibold">
                  VISA
                </div>
                <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-semibold">
                  MC
                </div>
                <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-semibold">
                  PP
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Mekong Delta Tours. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-[rgb(255,200,0)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[rgb(255,200,0)] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[rgb(255,200,0)] transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[rgb(255,200,0)] transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
