import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import CALogo from "../../components/CALogo";

const ContactUsPage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact SAY & CO LLP
        </h1>
        <div className="w-24 h-1 bg-[#274584] mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Get in touch for expert financial advice, tax consultation, or audit
          services
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Form */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#274584] focus:border-[#274584]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#274584] focus:border-[#274584]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#274584] focus:border-[#274584]"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Service Interested In *
              </label>
              <select
                id="service"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#274584] focus:border-[#274584]"
                required
              >
                <option value="">Select a service</option>
                <option value="tax">Tax Planning & Advisory</option>
                <option value="audit">Audit & Assurance</option>
                <option value="legal">Legal Compliance</option>
                <option value="consulting">Business Consulting</option>
                <option value="special">Specialised Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#274584] focus:border-[#274584]"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#274584] hover:bg-[#1d3557] text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div variants={fadeIn("left", "spring", 0.2, 1)}>
          {/* Contact Details */}
          <div className="bg-[#f8fafc] p-8 rounded-xl shadow-sm mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#274584] p-2 rounded-full text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 98505 33663</p>
                  <p className="text-gray-600">+91 22 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#274584] p-2 rounded-full text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@sayandco.in</p>
                  <p className="text-gray-600">consult@sayandco.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#274584] p-2 rounded-full text-white">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">+91 98505 33663</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#274584] p-2 rounded-full text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9AM to 6PM</p>
                  <p className="text-gray-600">Saturday: 9AM to 1PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#274584] p-2 rounded-full text-white">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Branch Addresses
              </h3>
            </div>

            {/* Branch 1 */}
            <div className="flex items-center gap-3 mb-2 mt-2">
              <h4 className="text-lg font-medium text-gray-700 pl-8">
                Branch 1 (Head Office)
              </h4>
            </div>
            <address className="text-gray-600 not-italic pl-11">
              401, Siddhi Pooja Business Center, Sharanpur Rd, near Lians Club,
              above Kabra Fashnista, New Pandit Colony, Nashik, Maharashtra
              422002
            </address>
            <div className="text-gray-600 pl-11 mt-1 mb-4">
              <a href="tel:+91XXXXXXXXXX" className="hover:text-[#274584]">
                Mobile: +91 9158578603
              </a>
              <br />
              <a href="tel:+91XXXXXXXXXX" className="hover:text-[#274584]">
                Mobile: +91 9168578603
              </a>
            </div>

            <div className="border-t border-gray-200 my-4"></div>

            {/* Branch 2 */}
            <div className="flex items-center gap-3 mb-2 mt-4">
              <h4 className="text-lg font-medium text-gray-700 pl-8">
                Branch 2
              </h4>
            </div>
            <address className="text-gray-600 not-italic pl-11">
              B-501, Business Galaxy, Opp. Gokul Hotel, Mumbai Naka, Nashik –
              422001
            </address>
            <div className="text-gray-600 pl-11 mt-1">
              <a href="tel:+91XXXXXXXXXX" className="hover:text-[#274584]">
                Mobile: +91 9850533663
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Google Map Section */}
      <motion.section
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="mt-16 bg-[#f8fafc] rounded-xl overflow-hidden border border-gray-200"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Our Location
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our office for a consultation
          </p>
        </div>
        <div className="h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59987.78299323822!2d73.71543216953123!3d19.99858904609098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb4f0375fb19%3A0xe119519fc3fd621c!2sBusiness%20bay!5e0!3m2!1sen!2sin!4v1753099531024!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59987.73122724812!2d73.71543216953125!3d19.998724899437235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba05c4498c5%3A0x65332d0cb2d651df!2sCa.%20Yogesh%20Tatar!5e0!3m2!1sen!2sin!4v1753099803557!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="SAY & CO LLP Office Location"
          ></iframe>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactUsPage;
