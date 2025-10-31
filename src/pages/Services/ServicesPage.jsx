import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, ChevronRight } from "lucide-react";

// Service data
const services = {
  tax: {
    title: "Tax Services",
    description:
      "We provide comprehensive tax solutions for businesses of all sizes.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80",
    details: [
      "Direct Tax planning and compliance",
      "International Tax advisory",
      "GST implementation and filing",
      "Tax risk assessment",
      "Transfer pricing documentation",
    ],
  },
  audit: {
    title: "Audit & Assurance",
    description:
      "Professional audit services to ensure compliance and financial integrity.",
    image:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80",
    details: [
      "Statutory Audit",
      "Risk Based Internal Audit",
      "Stock Audit",
      "Special Audit",
      "Certifications (under various Statues)",
      "Grant Audit (NGOs, Trusts etc.)",
    ],
  },
  legal: {
    title: "Legal Compliance",
    description: "Ensuring your business meets all regulatory requirements.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80",
    details: [
      "Corporate Laws compliance",
      "Tax Laws advisory",
      "FEMA regulations",
      "RBI compliance",
      "Regulatory filings",
    ],
  },
  consulting: {
    title: "Business Consulting",
    description: "Strategic advisory to help your business grow and thrive.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80",
    details: [
      "Company and LLP formation",
      "Business setup advisory",
      "Inbound/Outbound investment",
      "Corporate restructuring",
      "Succession planning",
    ],
  },
  specialised: {
    title: "Specialised Services",
    description: "Custom solutions for unique business challenges.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80",
    details: [
      "Financial Management & Analysis",
      "Capital Structuring",
      "Fund Raising",
      "Investment Management",
      "Forex & Treasury Management",
      "Valuations Services",
      "Merger & Acquisition and Restructuring",
    ],
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServicesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceRefs = useRef({});
  const overviewRef = useRef(null);

  // Scroll to service when hash changes
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = serviceRefs.current[hash] || overviewRef.current;
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  const scrollToService = (serviceId) => {
    navigate(`/services#${serviceId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Service Navigation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16 sticky top-20 bg-white py-4 z-10"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h1>
        <div className="flex flex-wrap gap-2">
          {Object.keys(services).map((serviceKey) => (
            <motion.button
              key={serviceKey}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToService(serviceKey)}
              className={`px-4 py-2 rounded-md ${
                location.hash === `#${serviceKey}`
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {services[serviceKey].title}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Overview Section */}
      <motion.section
        ref={overviewRef}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-20"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Comprehensive Professional Services
        </h2>
        <p className="text-gray-600 mb-6">
          At CBV & Associates, we offer a wide range of professional services
          designed to meet the diverse needs of modern businesses. Our team of
          experts provides tailored solutions to help your organization navigate
          complex financial and regulatory landscapes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(services).map(([key, service]) => (
            <motion.div
              key={key}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white border border-gray-200 p-6 rounded-md cursor-pointer"
              onClick={() => scrollToService(key)}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-blue-600 flex items-center">
                Learn more <ChevronRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Detailed Service Sections */}
      {Object.entries(services).map(([key, service]) => (
        <motion.section
          key={key}
          ref={(el) => (serviceRefs.current[key] = el)}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          id={key}
          className="mb-20 scroll-mt-20"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "300px" }}
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Service Offerings:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.details.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-blue-50 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our team of experts is ready to help you navigate your financial and
          regulatory challenges. Contact us today to discuss how we can support
          your business goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="tel:+919850533663"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <Phone size={18} /> Call Us Now
          </motion.a>
          <motion.a
            href="mailto:info@sayandco.in"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <Mail size={18} /> Email Us
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
