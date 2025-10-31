import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import {
  Building2,
  Factory,
  Code2,
  ShoppingBag,
  Banknote,
  Syringe,
  School2,
  Plane,
  Truck,
  Leaf,
  Building,
  ClipboardCheck,
  Scale,
  Cpu,
  Lightbulb,
  BookOpen,
  Receipt,
  PieChart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const sectorsData = [
  {
    id: 1,
    title: "Audit & Assurance",
    description:
      "Comprehensive audit services ensuring compliance and enhancing financial credibility for businesses of all sizes.",
    challenges: [
      "Meeting statutory audit requirements",
      "Implementing risk-based audit approaches",
      "Managing stock audit complexities",
      "Addressing NGO/trust grant compliance",
    ],
    services: [
      "Statutory Audit",
      "Risk Based Internal Audit",
      "Stock Audit",
      "Special Audit",
      "Certifications (under various Statutes)",
      "Grant Audit (NGOs, Trusts etc.)",
    ],
    icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    id: 2,
    title: "Statutory Compliances",
    description:
      "Ensuring full compliance with corporate, tax, and regulatory requirements to keep your business protected.",
    challenges: [
      "Keeping up with changing corporate laws",
      "Navigating complex tax regulations",
      "FEMA compliance for international transactions",
      "Meeting RBI guidelines",
    ],
    services: [
      "Corporate Laws compliance",
      "Tax Laws advisory",
      "FEMA guidance",
      "RBI compliance",
    ],
    icon: <Scale className="w-8 h-8 text-green-600" />,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
  },
  {
    id: 3,
    title: "ERP Implementation",
    description:
      "End-to-end ERP solutions tailored to your business needs for improved efficiency and data management.",
    challenges: [
      "Selecting the right ERP solution",
      "Managing implementation projects",
      "Training staff on new systems",
      "Integrating with existing processes",
    ],
    services: [
      "Advisory Services for Customized ERP",
      "Consultancy in On-boarding ERP",
      "Project Management",
      "Training",
      "Implementation Support for Standard Accounting/ERP Packages",
    ],
    icon: <Cpu className="w-8 h-8 text-orange-600" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    id: 4,
    title: "Business Advisory",
    description:
      "Strategic guidance to optimize operations, manage risks, and drive business growth.",
    challenges: [
      "Identifying operational risks",
      "Developing effective SOPs",
      "Conducting market research",
      "Planning business succession",
    ],
    services: [
      "Risk Assessment",
      "Enterprise Risk Management (ERM)",
      "Development of SOPs/DOAs",
      "Diagnostic Reviews",
      "Market Research",
      "Cost Analysis/Calculations",
      "Business Succession Planning",
      "Corporate and Legal Drafting Services",
    ],
    icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
  },
  {
    id: 5,
    title: "Process Outsourcing",
    description:
      "Professional bookkeeping and financial statement preparation services for domestic and international clients.",
    challenges: [
      "Maintaining accurate books",
      "Meeting local GAAP/IFRS requirements",
      "Managing international accounting standards",
      "Ensuring timely financial reporting",
    ],
    services: [
      "Book keeping Services ",
      "Data Processing Services",
      "Claim Processing",
      "Document Management Systems",
      "Customised Reports",
    ],
    icon: <BookOpen className="w-8 h-8 text-yellow-600" />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  },
  {
    id: 6,
    title: "Taxation",
    description:
      "Comprehensive tax solutions including compliance, advisory, and planning services.",
    challenges: [
      "Navigating complex tax laws",
      "Managing GST compliance",
      "Handling tax assessments/appeals",
      "Optimizing tax planning",
    ],
    services: [
      "Tax Compliance (Returns Filing, Audits, Assessments/Appeals)",
      "GST advisory",
      "Income Tax planning",
      "Tax Advisory and Planning",
    ],
    icon: <Receipt className="w-8 h-8 text-red-600" />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  },
  {
    id: 7,
    title: "Company Formation",
    description:
      "Expert guidance in setting up various business entities with complete legal compliance.",
    challenges: [
      "Choosing the right business structure",
      "Navigating incorporation processes",
      "Meeting regulatory requirements",
      "Establishing trusts/Section 8 companies",
    ],
    services: [
      "Partnership Firm formation",
      "Private Limited/LLP incorporation",
      "Public Companies setup",
      "Trusts/Section 8 Companies formation",
    ],
    icon: <Building className="w-8 h-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
  },
  {
    id: 8,
    title: "Specialised Services",
    description:
      "Advanced financial solutions to support strategic decision-making and business growth.",
    challenges: [
      "Capital structuring and fund raising",
      "Managing mergers and acquisitions",
      "Conducting business valuations",
      "Forex and treasury management",
    ],
    services: [
      "Financial Management & Analysis",
      "Capital Structuring",
      "Fund Raising",
      "Investment Management",
      "Forex & Treasury Management",
      "Valuations Services",
      "Merger & Acquisition and Restructuring",
      "Strategic Management",
    ],
    icon: <PieChart className="w-8 h-8 text-teal-600" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
];

const SectorPage = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20"
    >
      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Industry Specializations
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Tailored financial solutions addressing the unique challenges of your
          industry
        </p>
      </motion.div>

      {/* Sectors Grid */}
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {sectorsData.map((sector, index) => (
          <motion.div
            key={sector.id}
            variants={fadeIn("up", "spring", index * 0.1, 1)}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={sector.image}
                alt={sector.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  {sector.icon}
                </div>
                <h2 className="ml-3 text-xl font-bold text-white">
                  {sector.title}
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-4">{sector.description}</p>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Key Challenges
                </h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {sector.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Our Services
                </h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {sector.services.map((service, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-1">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Explore {sector.title} Solutions
              </motion.button> */}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.4, 1)}
        className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white"
      >
        <h2 className="text-2xl font-bold mb-4">
          Need specialized solutions for your industry?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-blue-100">
          Our sector specialists combine deep industry knowledge with financial
          expertise to deliver tailored solutions.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate("/contact");
          }}
          className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          Schedule a Consultation
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SectorPage;
