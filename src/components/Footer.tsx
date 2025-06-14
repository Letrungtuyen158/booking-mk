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
    <footer>
      <img src="/images/home/footer-bg.png" alt="" />
      <div className="container mx-auto px-4 py-16 text-[#6E7070] relative top-[-150px] md:top-[-250px] lg:top-[-350px] xl:top-[-400px] 2xl:top-[-550px]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 max-w-[158px]">
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
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 text-white bg-[#0E47AB] rounded-full flex items-center justify-center hover:bg-[rgb(14,71,171)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 text-white bg-[#0E47AB] rounded-full flex items-center justify-center hover:bg-[rgb(14,71,171)] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 text-white bg-[#0E47AB] rounded-full flex items-center justify-center hover:bg-[rgb(14,71,171)] transition-colors"
              >
                <img src="/icons/tiktok.svg" alt="" />
              </a>
            </div>
          </div>

          {/* Mekong Delta Tours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#0E47AB]">
              Asia Pacific Travel
            </h4>
            {/* Contact Info */}

            <div>
              <p className="font-medium mb-2 text-black">Hanoi Head Office</p>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <span className="">
                    85-87 Hoang Quoc Viet street, Cau Giay District, Hanoi
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <div className="">
                    <div>+84 24 38364212</div>
                    <div>+84 24 37568868</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className=" mt-4 font-medium mb-4 text-black">
                Hochiminh City Office:
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <span className="">
                    Room 3A2, First floor, Toong Office, 126 Nguyen Thi Minh
                    Khai Street, Distric 3, Ho chi minh City
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                  <div className="">
                    <div>+84 28 38 3333 88</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* General */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">General</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className=" hover:text-[#0E47AB] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#0E47AB] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#0E47AB] transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#0E47AB] transition-colors">
                  Price policy
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#0E47AB] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#0E47AB] transition-colors">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>

          {/* General */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">Tour</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className=" hover:text-[#0E47AB] transition-colors">
                  Cruise & Boat tours
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#0E47AB] transition-colors">
                  Explore Floating Market
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#0E47AB] transition-colors">
                  Nature & Adventure
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#0E47AB] transition-colors">
                  Private Tours
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#0E47AB] transition-colors">
                  Multiday trips
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Sign up for our newsletter
            </h4>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className=" text-white placeholder-gray-400"
              />
              <Button className="w-full bg-[rgb(14,71,171)] hover:bg-[rgb(14,71,171)]/90">
                Subscribe
              </Button>
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
              className="text-gray-400 hover:text-[#0E47AB] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#0E47AB] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#0E47AB] transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#0E47AB] transition-colors"
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
