import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import aa from "../../assets/aa.jpg";
import account from "../../assets/account.jpg";
import bussiness from "../../assets/bussiness.jpg";
import company from "../../assets/company.jpg";
import erp from "../../assets/erp.jpg";
import tax from "../../assets/tax.jpg";
import service from "../../assets/service.jpg";
import statutory from "../../assets/statutory.jpg";

const services = [
  {
    title: "AUDIT & ASSURANCE",
    image: aa,
    items: [
      "Statutory Audit",
      "Risk Based Internal Audit",
      "Stock Audit",
      "Special Audit",
      "Certifications (under various Statutes)",
      "Grant Audit (NGOs, Trusts, etc.)",
    ],
  },
  {
    title: "STATUTORY COMPLIANCES",
    image: statutory,
    items: ["Corporate Laws", "Tax Laws", "FEMA", "RBI"],
  },
  {
    title: "ERP IMPLEMENTATION",
    image: erp,
    items: [
      {
        title: "Advisory Services in Customized ERP solution",
        subpoints: ["Consultancy in On-boarding ERP", "Project Management", "Training"],
      },
      "Implementation Support for Standard Accounting/ERP Packages",
    ],
  },
  {
    title: "BUSINESS ADVISORY",
    image: bussiness,
    items: [
      "Risk Assessment",
      "EIM",
      "Development of SOPs / DOAs",
      "Diagnostic Reviews",
      "Market Research",
      "Cost Analysis / Calculations",
      "Business Succession Planning",
      "Corporate and Legal Drafting Services",
    ],
  },
  {
    title: "ACCOUNTS OUTSOURCING",
    image: account,
    items: [
      {
        title: "Book Keeping Services",
        subpoints: ["Domestic", "International (UAE)"],
      },
      "Preparation of Financial Statements",
      "GAAP / IFRS",
    ],
  },
  {
    title: "COMPANY FORMATION",
    image: company,
    items: [
      "Partnership Firms",
      "Private Limited / LLP",
      "Public Companies",
      "Trusts / Section 8 Companies",
    ],
  },
  {
    title: "SPECIALISED SERVICES",
    image: service,
    items: [
      "Financial Management & Analysis",
      "Capital Structuring",
      "Fund Raising",
      "Investment Management",
      "Forex & Treasury Management",
      "Valuation Services",
      "Merger & Acquisition and Restructuring",
      "Strategic Management",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-14">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-4xl font-extrabold pt-24 text-center text-gray-800 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        {/* Service Cards */}
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-500 overflow-hidden ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image Side */}
            <div className="md:w-1/2 w-full relative rounded-xl overflow-hidden group">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-90 transition-all duration-500"></div>
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 w-full bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-100 pb-2">
                {service.title}
              </h3>

              <ul className="space-y-2 text-gray-700">
                {service.items.map((item, i) =>
                  typeof item === "string" ? (
                    <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                      <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ) : (
                    <li key={i} className="text-sm md:text-base">
                      <div className="flex items-start gap-2">
                        <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <ul className="ml-8 mt-1 text-gray-600 space-y-1">
                        {item.subpoints.map((sub, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )
                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
