import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";
import {
  FaChartLine,
  FaHandshake,
  FaUsers,
  FaAward,
  FaArrowRight,
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaRegLightbulb,
  FaShieldAlt,
} from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import {
  FileText,
  Handshake,
  Shield,
  Landmark,
  Briefcase,
  Globe,
  PieChart,
  TrendingUp,
  UserCheck,
  ClipboardCheck,
  BadgeDollarSign,
} from "lucide-react";

const AboutUsPage = () => {
  const navigate = useNavigate();
  const whyChooseRef = useRef(null);
  const expertiseRef = useRef(null);
  const leadershipRef = useRef(null);
  const aboutusRef = useRef(null);
  const location = useLocation();

  // State for image carousel
  const [current, setCurrent] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  // Handle section scrolling based on URL hash
  useEffect(() => {
    const scrollToSection = (ref) => {
      if (ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop - 100,
          behavior: "smooth",
        });
      }
    };

    if (location.hash === "#why-choose") {
      scrollToSection(whyChooseRef);
    } else if (location.hash === "#expertise") {
      scrollToSection(expertiseRef);
    } else if (location.hash === "#leadership") {
      scrollToSection(leadershipRef);
    } else if (location.hash === "#us") {
      scrollToSection(aboutusRef);
    }
  }, [location]);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Hero Section with Image Carousel */}
        <motion.section
          ref={aboutusRef}
          id="us"
          variants={staggerContainer}
          className="relative h-[80vh] rounded-xl overflow-hidden mb-16"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 1 }}
              className={`absolute inset-0 bg-cover bg-center ${
                index === current ? "z-10" : "z-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/20 z-20 flex items-center justify-center">
            <div className="text-center px-4">
              <motion.h1
                variants={fadeIn("up", "spring", 0.1, 1)}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                About Our CA Firm
              </motion.h1>
              <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
              <motion.p
                variants={fadeIn("up", "spring", 0.2, 1)}
                className="text-white mt-4 max-w-3xl mx-auto text-lg"
              >
                Providing exceptional financial expertise and strategic advice
                to businesses and individuals since 1995.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          variants={fadeIn("up", "spring", 0.3, 1)}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-blue-800 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaBalanceScale className="mr-2 text-blue-400" /> Our Mission
            </h2>
            <p className="mb-6 text-blue-100">
              To deliver exceptional financial services that empower our clients
              to achieve their business goals while maintaining the highest
              standards of integrity and professionalism.
            </p>
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Mission"
              className="rounded-lg h-48 w-full object-cover"
            />
          </div>
          <div className="bg-blue-700 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <TrendingUp className="mr-2 text-blue-400" /> Our Vision
            </h2>
            <p className="mb-6 text-blue-100">
              To be recognized as the most trusted financial advisor for
              businesses navigating India's complex regulatory and tax
              landscape.
            </p>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Vision"
              className="rounded-lg h-48 w-full object-cover"
            />
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          ref={whyChooseRef}
          id="why-choose"
          variants={fadeIn("up", "spring", 0.4, 1)}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Firm
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We combine technical expertise with practical business acumen to
              deliver solutions that drive financial success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: FaAward,
                title: "Proven Excellence",
                description:
                  "Recognized by ICAI for audit quality and ethical standards",
                details:
                  "Our firm has received multiple awards for professional excellence.",
              },
              {
                icon: ClipboardCheck,
                title: "Comprehensive Services",
                description: "Full-spectrum financial solutions under one roof",
                details:
                  "From compliance to strategic consulting, we've got you covered.",
              },
              {
                icon: Handshake,
                title: "Client Partnership",
                description:
                  "We view every engagement as a long-term partnership",
                details:
                  "Your success is our success - we're invested in your growth.",
              },
              {
                icon: FaShieldAlt,
                title: "Risk Management",
                description:
                  "Protecting your interests through rigorous compliance",
                details:
                  "We help mitigate financial and regulatory risks effectively.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.1, 1)}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600 h-full flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      <Icon className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-gray-500 mt-auto">{item.details}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Professional Standards
                </h3>
                <p className="text-gray-700 mb-4">
                  As members of the Institute of Chartered Accountants of India,
                  we adhere to the highest professional standards and ethical
                  guidelines.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team undergoes continuous professional development to stay
                  current with evolving regulations and best practices.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Schedule a Consultation
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Professional meeting"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-600/30"></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Expertise */}
        <motion.section
          ref={expertiseRef}
          id="expertise"
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Expertise
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Specialized knowledge across industries and financial disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Briefcase className="text-blue-500 mr-2" /> Industries We Serve
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Manufacturing & Industrial
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Technology & Startups
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Financial Services & Banking
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Healthcare & Pharmaceuticals
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Real Estate & Construction
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FileText className="text-blue-500 mr-2" /> Specialized Services
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  International Taxation & Transfer Pricing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Mergers & Acquisitions Advisory
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  GST Implementation & Compliance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Forensic Accounting & Fraud Detection
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Business Valuation & Due Diligence
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-800 text-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Financial expertise"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Technical Capabilities
                </h3>
                <p className="mb-4 text-blue-100">
                  Our team maintains expertise in the latest accounting
                  standards (Ind AS), tax regulations, and financial
                  technologies to provide cutting-edge solutions.
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="flex items-center font-medium text-blue-300 hover:text-white"
                >
                  Explore our services <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          variants={fadeIn("up", "spring", 0.6, 1)}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Professional Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Audit & Assurance",
                description:
                  "Comprehensive audit services including statutory, internal, and tax audits",
              },
              {
                title: "Tax Planning",
                description:
                  "Strategic tax planning for businesses and individuals to optimize liabilities",
              },
              {
                title: "Business Advisory",
                description:
                  "Expert guidance for business growth and financial management",
              },
              {
                title: "Financial Consulting",
                description:
                  "Specialized services including valuations, due diligence, and forensic accounting",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 1)}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-xl shadow-sm border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Tailored Financial Solutions
                </h3>
                <p className="text-gray-700 mb-4">
                  We understand that each client has unique financial needs. Our
                  services are customized to your specific requirements, whether
                  you're an individual, small business, or large corporation.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Request a personalized consultation{" "}
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Consultation meeting"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Future Plans */}
        <motion.section
          variants={fadeIn("up", "spring", 0.8, 1)}
          className="bg-blue-50 rounded-xl p-8 mb-16 shadow-sm border border-blue-100"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <FaAward className="mr-2 text-blue-600" /> Firm Growth & Innovation
          </h2>
          <p className="text-gray-700 mb-4">
            We are continuously expanding our expertise and adopting new
            technologies to better serve our clients in an evolving financial
            landscape.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-blue-200">
              Digital Transformation
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-blue-200">
              ESG Advisory
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-blue-200">
              AI in Accounting
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-blue-200">
              International Expansion
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-blue-200">
              Blockchain Solutions
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-blue-200">
              Startup Ecosystem
            </span>
          </div>
        </motion.section>

        {/* Client Testimonials */}
        <motion.section
          variants={fadeIn("up", "spring", 0.9, 1)}
          className="bg-blue-800 text-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-blue-700/80 p-6 rounded-lg">
              <p className="italic mb-4 text-blue-100">
                "Their tax strategy saved us ₹28 lakhs annually while
                maintaining full compliance. Truly exceptional service."
              </p>
              <p className="font-medium text-blue-300">
                - Manufacturing Company CFO
              </p>
            </div>
            <div className="bg-blue-700/80 p-6 rounded-lg">
              <p className="italic mb-4 text-blue-100">
                "The audit process was thorough yet efficient. Their insights
                helped streamline our financial operations significantly."
              </p>
              <p className="font-medium text-blue-300">
                - Tech Startup Founder
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/case-studies")}
            className="bg-white text-blue-800 px-6 py-2 rounded-md font-medium hover:bg-gray-100"
          >
            Read more case studies
          </button>
        </motion.section>
      </motion.div>

      {/* Leadership Section */}
      <motion.div>
        <motion.section
          ref={leadershipRef}
          variants={fadeIn("up", "spring", 0.7, 1)}
          className="mb-16 mt-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Our Leadership Team
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Guiding your financial success with expertise and integrity
          </p>

          <div className="grid gap-8 max-w-6xl mx-auto px-4">
            {[
              {
                name: "Lead Partner",
                role: "Chartered Accountant with 25+ years experience",
                expertise:
                  "Specializes in corporate taxation, mergers & acquisitions, and financial strategy",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
                contributions: [
                  "Led 50+ successful M&A transactions",
                  "Expert in GST implementation strategies",
                  "Advised 100+ businesses on tax optimization",
                ],
                icon: RiTeamFill,
              },
              {
                name: "Senior Partners",
                role: "Experienced Chartered Accountants",
                expertise:
                  "Specializations in audit, international taxation, and financial compliance",
                image:
                  "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                contributions: [
                  "Managed audits for Fortune 500 companies",
                  "International tax structuring experts",
                  "Regulatory compliance specialists",
                ],
                icon: FaUsers,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.2, 1)}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <member.icon className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{member.expertise}</p>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {member.contributions.map((contribution, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-600">
                              {contribution}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Professional Commitment
            </h3>
            <p className="text-gray-600 mb-6">
              As Chartered Accountants, we are dedicated to upholding the
              highest standards of professional ethics while delivering
              innovative financial solutions tailored to our clients' needs.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <p className="text-blue-800 italic">
                "We measure our success by our clients' financial achievements
                and the trust they place in our expertise."
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default AboutUsPage;
