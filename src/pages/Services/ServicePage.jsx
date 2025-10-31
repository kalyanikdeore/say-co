import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  FileText,
  ClipboardCheck,
  Scale,
  PieChart,
  Award,
  Building2,
  Receipt,
  Globe,
  Users,
  Map,
  TrendingUp,
  Settings,
  Search,
  DollarSign,
  Merge,
  ZoomIn,
} from "lucide-react";
import { servicesData } from "../../constants/serviceData";

const iconComponents = {
  FileText,
  ClipboardCheck,
  Scale,
  PieChart,
  Award,
  Building2,
  Receipt,
  Globe,
  Users,
  Map,
  TrendingUp,
  Settings,
  Search,
  DollarSign,
  Merge,
  ZoomIn,
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service)
    return <div className="text-center py-20">Service not found</div>;

  // Get icon component for the service
  const ServiceIcon = iconComponents[service.icon];

  return (
    <div className="bg-gray-50 min-h-screen mt-20">
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="container mx-auto relative h-full flex items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              {ServiceIcon && (
                <ServiceIcon size={24} className="text-primary-300" />
              )}
              <span className="font-medium">Professional Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl">{service.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-12">
          {/* About Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-6 md:p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {service.aboutContent.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3 space-y-4">
                {service.aboutContent.content.map((para, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <div className="md:w-1/3">
                <img
                  src={service.aboutContent.image}
                  alt="About this service"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.section>

          {/* Features Section */}
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Service Offerings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => {
                const FeatureIcon = iconComponents[feature.icon];
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary-100 p-3 rounded-full">
                        {FeatureIcon && (
                          <FeatureIcon size={20} className="text-primary-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="bg-primary-50 rounded-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <svg
                    className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0"
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
                  <span className="text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* FAQ Section */}
          {service.faqs && service.faqs.length > 0 && (
            <section className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {service.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-6 sticky top-6"
          >
            <h3 className="font-bold text-xl mb-6 text-gray-900">
              Our {service.title}
            </h3>
            <ul className="space-y-3 mb-8">
              {service.sidebarData.services.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <svg
                    className="h-4 w-4 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-xl mb-4 text-gray-900">
                Contact Our Experts
              </h3>
              <div className="space-y-4 text-gray-600 mb-6">
                <p className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {service.sidebarData.contactInfo.phone}
                </p>
                <p className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {service.sidebarData.contactInfo.email}
                </p>
                {service.sidebarData.contactInfo.hours && (
                  <p className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {service.sidebarData.contactInfo.hours}
                  </p>
                )}
              </div>

              <a
                href={service.cta.buttonLink}
                className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
              >
                {service.cta.buttonText}
              </a>
            </div>
          </motion.div>

          {/* Resources Section */}
          {service.sidebarData.resources &&
            service.sidebarData.resources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {service.sidebarData.resources.map((resource, index) => (
                    <li key={index}>
                      <a
                        href={resource.link}
                        className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <svg
                          className="h-5 w-5 text-primary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        {resource.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-400 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">{service.cta.title}</h2>
            <p className="text-xl mb-8">{service.cta.description}</p>
            <a
              href={service.cta.buttonLink}
              className="inline-block bg-white text-gray-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-medium transition-colors"
            >
              {service.cta.buttonText}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
