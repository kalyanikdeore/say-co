import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  BookOpen,
} from "lucide-react";
import CALogo from "./CALogo";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about#us",
  },
  {
    label: "Sectors",
    path: "/sectors",
  },
  // {
  //   label: "Services",
  //   submenu: [
  //     { label: "Tax Planning", path: "/services/tax" },
  //     { label: "Audit & Assurance", path: "/services/audit" },
  //     { label: "Legal Compliance", path: "/services/legal" },
  //     { label: "Business Consulting", path: "/services/consulting" },
  //     { label: "Specialised Services", path: "/services/specialised" },
  //   ],
  // },

  {
    label: "Services",
    path: "/Services",
  },



  {
    label: "Resources",
    icon: <BookOpen size={16} className="mr-1" />,
    path: "/resources",
    submenu: [
      { label: "Acts & Regulations", path: "/resources#acts" },
      { label: "Important Forms", path: "/resources#forms" },
      { label: "Useful Links", path: "/resources#links" },
    ],
  },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleNavItemClick = (item, index) => {
    if (item.submenu) {
      toggleDropdown(index);
    } else {
      navigate(item.path);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryColor = "#274584";

  return (
    <header className="relative z-50 mt-26">
      {/* Top Contact Bar (unchanged) */}
      <div className="bg-[#274584] text-white text-sm px-4 fixed top-0 left-0 w-full z-[100]">
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@sayandco.in"
              className="hover:text-blue-200 text-xs md:text-sm transition-colors flex items-center"
            >
              <Mail size={14} className="mr-1" />
              info@sayandco.in
            </a>
            <a
              href="tel:+919850533663"
              className="hover:text-blue-200 text-xs md:text-sm transition-colors flex items-center"
            >
              <Phone size={14} className="mr-1" />
              +91 98505 33663
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {/* Optional: Business hours */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full left-0 transition-all duration-300 z-[90] ${
          scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
        }`}
        style={{ top: scrolled ? "0" : "30px" }}
      >
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between">
            <div onClick={() => navigate("/")} className="cursor-pointer py-6">
              <CALogo />
            </div>

            {/* Contact Info Blocks (unchanged) */}
            <div className="gap-10 hidden md:flex">
              <div className="text-gray-700 hover:text-[#274584] flex items-center gap-2 font-bold">
                <div
                  className="border rounded-full p-4"
                  style={{ borderColor: primaryColor }}
                >
                  <Mail size={16} style={{ color: primaryColor }} />
                </div>
                <div>
                  <p className="text-center">Leave a message</p>
                  <a
                    href="mailto:info@sayandco.in"
                    className="text-gray-700 hover:text-[#274584] flex items-center"
                  >
                    info@sayandco.in
                  </a>
                </div>
              </div>
              <div className="text-gray-700 hover:text-[#274584] flex items-center gap-2 font-bold">
                <div
                  className="border rounded-full p-4"
                  style={{ borderColor: primaryColor }}
                >
                  <Phone size={16} style={{ color: primaryColor }} />
                </div>
                <div>
                  <p className="text-center">Call Us On</p>
                  <a
                    href="tel:+91 98505 33663"
                    className="text-gray-700 hover:text-[#274584] flex items-center"
                  >
                    +91 98505 33663
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden self-end lg:flex space-x-1 font-medium text-gray-800 relative">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDropdown(index)}
                onMouseLeave={() => item.submenu && setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavItemClick(item, index)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-all ${
                    openDropdown === index
                      ? `text-[#274584] bg-[#E8EBF5]`
                      : "hover:text-[#274584] hover:bg-[#E8EBF5]/50"
                  }`}
                >
                  {item.icon && item.icon}
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {openDropdown === index && item.submenu && (
                  <div className="absolute top-8 left-0 bg-white rounded-lg shadow-xl py-2 min-w-[220px] z-[120] border border-gray-100">
                    {item.submenu.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        onClick={() => {
                          navigate(subItem.path);
                          setOpenDropdown(null);
                        }}
                        className="px-4 py-2 text-sm text-gray-700 cursor-pointer transition-all hover:bg-[#E8EBF5] hover:text-[#274584] hover:pl-5"
                      >
                        {subItem.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button (unchanged) */}
            <button
              onClick={() => navigate("/contact")}
              className="ml-4 px-4 py-2 text-white rounded-lg hover:bg-[#1d3566] transition-colors"
              style={{ backgroundColor: primaryColor }}
            >
              Get Consultation
            </button>
          </div>

          {/* Mobile Menu Button (unchanged) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-[#274584] p-2 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-[110] shadow-xl p-6 space-y-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <CALogo />
              <div className="h-1 w-16 bg-[#274584] mx-auto mt-1" />
            </div>
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-[#274584] p-2"
            >
              <X size={28} />
            </button>
          </div>

          <div className="space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => handleNavItemClick(item, index)}
                  className={`w-full text-left font-medium text-gray-800 py-3 flex justify-between items-center ${
                    item.submenu ? "" : "hover:text-[#274584]"
                  }`}
                >
                  <div className="flex items-center">
                    {item.icon && item.icon}
                    {item.label}
                  </div>
                  {item.submenu && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {/* Mobile Submenu */}
                {item.submenu && openDropdown === index && (
                  <div className="ml-4 space-y-2 mb-2">
                    {item.submenu.map((sub, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          navigate(sub.path);
                          setIsMenuOpen(false);
                        }}
                        className="pl-3 py-2 text-gray-700 hover:text-[#274584] cursor-pointer flex items-center"
                      >
                        <span style={{ color: primaryColor }} className="mr-2">
                          •
                        </span>
                        {sub.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Button (unchanged) */}
            <button
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 px-4 py-3 text-white rounded-lg hover:bg-[#1d3566] transition-colors"
              style={{ backgroundColor: primaryColor }}
            >
              Get Consultation
            </button>
          </div>

          {/* Mobile Contact Info (unchanged) */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@sayandco.in"
                className="text-gray-700 hover:text-[#274584] flex items-center"
              >
                <Mail size={16} className="mr-2" />
                info@sayandco.in
              </a>
              <a
                href="tel:+91 98505 33663"
                className="text-gray-700 hover:text-[#274584] flex items-center"
              >
                <Phone size={16} className="mr-2" />
                +91 98505 33663
              </a>
              <div className="text-gray-700 flex items-center">
                <Clock size={16} className="mr-2" />
                Mon-Sat: 9:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
