import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail, MdOutlineBusinessCenter } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import CALogo from "./CALogo";
import { Link } from "react-router-dom";

const Footer = () => {
  const primaryColor = "#274584";
  const primaryLight = "#E8EBF5";

  const socialIcons = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      url: "https://facebook.com/cayashshukla",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      url: "https://twitter.com/cayashshukla",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      url: "https://linkedin.com/in/cayashshukla",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://instagram.com/cayashshukla",
    },
  ];

  const quickLinks = [
    { label: "About Us", path: "/about#us" },
    { label: "Our Services", path: "/services/tax" },
    { label: "Our Mission", path: "/about#mission" },
    { label: "Leadership", path: "/about#leadership" },
    { label: "Blogs", path: "/blogs" },
  ];

  const services = [
    { label: "Tax Planning & Advisory", path: "/services/tax" },
    { label: "Audit & Assurance", path: "/services/audit" },
    { label: "Legal Compliance", path: "/services/legal" },
    { label: "Business Consulting", path: "/services/consulting" },
    { label: "Specialised Services", path: "/services/specialised" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <div className="mb-6">
            <CALogo />
          </div>
          <p className="text-gray-300 mb-6">
            CA SAY & CO LLP provides comprehensive financial and business
            advisory services with expertise in tax planning, audit, compliance,
            and strategic consulting.
          </p>
          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, label, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#274584] hover:bg-[#1d3566] p-2 rounded-full text-white transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="text-lg font-semibold mb-6"
            style={{ color: primaryColor }}
          >
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                <span style={{ color: primaryColor }} className="mr-2">
                  •
                </span>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3
            className="text-lg font-semibold mb-6"
            style={{ color: primaryColor }}
          >
            Our Services
          </h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <span style={{ color: primaryColor }} className="mr-2">
                  •
                </span>
                <Link
                  to={service.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-lg font-semibold mb-6"
            style={{ color: primaryColor }}
          >
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <IoLocationOutline
                size={20}
                style={{ color: primaryColor }}
                className="mt-1 flex-shrink-0"
              />
              <span>
                Office Address: 401, Siddhi Pooja Business Center, Sharanpur Rd,
                near Lians Club, above Kabra Fashnista, New Pandit Colony,
                Nashik, Maharashtra 422002
              </span>
            </li>
            <li className="flex items-start gap-3">
              <IoLocationOutline
                size={20}
                style={{ color: primaryColor }}
                className="mt-1 flex-shrink-0"
              />
              <span>
                B-501, Business Galaxy, Opp. Gokul Hotel, Mumbai Naka, Nashik –
                422001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineEmail size={20} style={{ color: primaryColor }} />
              <a
                href="mailto:info@sayandco.in"
                className="hover:text-white transition-colors"
              >
                info@sayandco.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IoCallOutline size={20} style={{ color: primaryColor }} />
              <a
                href="tel:+919876543210"
                className="hover:text-white /transition-colors"
              >
                +91 9158578603
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineBusinessCenter
                size={20}
                style={{ color: primaryColor }}
              />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-800 pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">SAY & CO LLP</span>. All
          Rights Reserved By Rich System Solutions.{" "}
          <Link
            to="/"
            style={{ color: primaryColor }}
            className="hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            to="/"
            style={{ color: primaryColor }}
            className="hover:underline"
          >
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
