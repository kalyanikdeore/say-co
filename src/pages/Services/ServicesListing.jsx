import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, ClipboardCheck, Scale, PieChart, Award } from "lucide-react";
import { servicesData } from "../../constants/serviceData";

const ServicesListing = () => {
  const services = Object.values(servicesData);
  const icons = {
    tax: <FileText size={24} className="text-primary-600" />,
    audit: <ClipboardCheck size={24} className="text-primary-600" />,
    legal: <Scale size={24} className="text-primary-600" />,
    consulting: <PieChart size={24} className="text-primary-600" />,
    specialised: <Award size={24} className="text-primary-600" />,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive financial and business solutions for Indian
              businesses
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <Link to={`/services/${service.slug}`} key={service.slug}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden h-full border border-gray-100 hover:border-primary-200 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                    {icons[service.slug]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {feature.title}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesListing;
