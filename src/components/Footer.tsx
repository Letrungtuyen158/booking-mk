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
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.594727"
                    y="0.112305"
                    width="25.19"
                    height="25.19"
                    rx="12.595"
                    fill="#0E47AB"
                  />
                  <g clip-path="url(#clip0_2021_2958)">
                    <g clip-path="url(#clip1_2021_2958)">
                      <path
                        d="M18.2855 11.5784C18.1882 11.5848 18.0906 11.5848 17.9933 11.5784C17.4659 11.5789 16.9469 11.448 16.483 11.1975C16.0191 10.947 15.6251 10.5848 15.3367 10.1437V15.032C15.3367 15.7459 15.1248 16.4438 14.728 17.0373C14.3312 17.6309 13.7671 18.0936 13.1072 18.3668C12.4473 18.6399 11.7212 18.7114 11.0206 18.5721C10.3201 18.4329 9.67661 18.0891 9.17154 17.5843C8.66648 17.0795 8.32251 16.4363 8.18316 15.7362C8.04382 15.036 8.11534 14.3103 8.38868 13.6507C8.66202 12.9912 9.1249 12.4275 9.7188 12.0309C10.3127 11.6343 11.0109 11.4226 11.7252 11.4226H11.9461V13.2013C11.8726 13.1946 11.7987 13.1946 11.7252 13.2013C11.236 13.2013 10.7668 13.3956 10.4208 13.7413C10.0749 14.0871 9.88053 14.556 9.88053 15.045C9.88053 15.534 10.0749 16.0029 10.4208 16.3487C10.7668 16.6944 11.236 16.8887 11.7252 16.8887C12.2199 16.8957 12.6977 16.7087 13.056 16.3677C13.4142 16.0266 13.6244 15.5587 13.6413 15.0645V6.77441H15.3431C15.4217 7.51358 15.7573 8.20175 16.2914 8.71898C16.8255 9.23622 17.5243 9.54973 18.266 9.60485V11.5524"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_2021_2958">
                      <rect
                        width="14.39"
                        height="13.55"
                        fill="white"
                        transform="translate(5.99463 5.93262)"
                      />
                    </clipPath>
                    <clipPath id="clip1_2021_2958">
                      <rect
                        width="14.41"
                        height="13.55"
                        fill="white"
                        transform="translate(5.99463 5.93262)"
                      />
                    </clipPath>
                  </defs>
                </svg>
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
