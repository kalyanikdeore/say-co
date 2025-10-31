// pages/Services/TaxPlanning.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TaxPlanning = () => {
  const services = [
    {
      title: "Corporate Tax Planning",
      description:
        "Strategic planning to optimize your corporate tax structure and minimize liabilities.",
    },
    {
      title: "Personal Tax Advisory",
      description:
        "Comprehensive planning for individuals to maximize savings and ensure compliance.",
    },
    {
      title: "International Taxation",
      description:
        "Expert guidance on cross-border transactions and tax treaties.",
    },
    {
      title: "Tax Litigation Support",
      description:
        "Representation and advisory services for tax disputes and appeals.",
    },
    {
      title: "GST Advisory",
      description: "End-to-end GST compliance and strategic planning services.",
    },
    {
      title: "Tax Health Check",
      description:
        "Comprehensive review of your tax position to identify risks and opportunities.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tax Planning & Advisory
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Strategic tax solutions to minimize liabilities and maximize
            compliance
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-700 mb-6">
                Comprehensive Tax Solutions
              </h2>
              <p className="text-gray-600 mb-4">
                In today's complex regulatory environment, effective tax
                planning is essential for both businesses and individuals. Our
                tax advisory services are designed to help you navigate the
                complexities of tax laws while optimizing your tax position.
              </p>
              <p className="text-gray-600 mb-4">
                We combine deep technical knowledge with practical business
                understanding to deliver tax strategies that align with your
                financial goals.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
              Our Tax Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600"
                >
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Why Choose Our Tax Services?
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
              <li>15+ years of specialized tax experience</li>
              <li>Proactive planning rather than reactive compliance</li>
              <li>Customized solutions tailored to your specific situation</li>
              <li>Continuous monitoring of legislative changes</li>
              <li>
                Practical advice that balances compliance with optimization
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Tax Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Explore Our Other Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link
              to="/services/audit-assurance"
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-blue-600 text-2xl mb-2">🔍</div>
              <h3 className="font-semibold text-gray-800">Audit & Assurance</h3>
            </Link>
            <Link
              to="/services/legal-compliance"
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-blue-600 text-2xl mb-2">⚖️</div>
              <h3 className="font-semibold text-gray-800">Legal Compliance</h3>
            </Link>
            <Link
              to="/services/business-consulting"
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-blue-600 text-2xl mb-2">📈</div>
              <h3 className="font-semibold text-gray-800">
                Business Consulting
              </h3>
            </Link>
            <Link
              to="/services/specialized-services"
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-blue-600 text-2xl mb-2">✨</div>
              <h3 className="font-semibold text-gray-800">
                Specialized Services
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxPlanning;
