"use client";

import { useState } from "react";
import { Search, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "register">("login");
  const pathname = usePathname();

  const navItems = [
    { name: "About Us", path: "/about" },
    { name: "Hostel", path: "/hostel" },
    { name: "Tours", path: "/tours" },
    { name: "Travel Destinations", path: "/destinations" },
    { name: "FAQS", path: "/faqs" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm font-medium transition-colors px-2 py-1 ${
                                    pathname === item.path
                  ? "text-[rgb(14,71,171)] border-b-2 border-[rgb(14,71,171)]"
                  : "text-[oklch(0.373_0.034_259.733)] hover:text-[rgb(14,71,171)]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Login/Register */}
          <Dialog open={openAuth} onOpenChange={setOpenAuth}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-[rgb(14,71,171)] border-[rgb(14,71,171)] font-semibold px-4 py-2"
                onClick={() => setAuthTab("login")}
              >
                Login / Register
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <div className="flex justify-center mb-4">
                  <button
                    className={`px-4 py-2 font-semibold rounded-t-md focus:outline-none transition-colors ${authTab === "login" ? "bg-[rgb(14,71,171)] text-white" : "bg-gray-100 text-gray-700"}`}
                    onClick={() => setAuthTab("login")}
                  >
                    Login
                  </button>
                  <button
                    className={`px-4 py-2 font-semibold rounded-t-md focus:outline-none transition-colors ${authTab === "register" ? "bg-[rgb(14,71,171)] text-white" : "bg-gray-100 text-gray-700"}`}
                    onClick={() => setAuthTab("register")}
                  >
                    Register
                  </button>
                </div>
                <DialogTitle className="text-center">
                  {authTab === "login"
                    ? "Sign in to your account"
                    : "Create a new account"}
                </DialogTitle>
              </DialogHeader>
              {authTab === "login" ? (
                <form className="space-y-4 mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded px-3 py-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded px-3 py-2"
                  />
                  <Button className="w-full bg-[rgb(14,71,171)] text-white font-semibold">
                    Login
                  </Button>
                  <div className="text-center text-sm mt-2">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="text-[rgb(14,71,171)] underline"
                      onClick={() => setAuthTab("register")}
                    >
                      Register
                    </button>
                  </div>
                </form>
              ) : (
                <form className="space-y-4 mt-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border rounded px-3 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded px-3 py-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded px-3 py-2"
                  />
                  <Button className="w-full bg-[rgb(14,71,171)] text-white font-semibold">
                    Register
                  </Button>
                  <div className="text-center text-sm mt-2">
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="text-[rgb(14,71,171)] underline"
                      onClick={() => setAuthTab("login")}
                    >
                      Login
                    </button>
                  </div>
                </form>
              )}
            </DialogContent>
          </Dialog>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-lg font-medium transition-colors py-2 ${
                      pathname === item.path
                        ? "text-[rgb(14,71,171)] font-semibold"
                        : "text-[oklch(0.373_0.034_259.733)] hover:text-[rgb(14,71,171)]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
