import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Financial Strategy?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Contact us today for a consultation and discover how we can help
            your business thrive in India and globally.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <a
              href="tel:+919850533663"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex flex-col items-center transition-colors"
            >
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Phone size={20} />
              </div>
              <span className="font-medium">Call Us</span>
              <span className="text-sm text-blue-200">+91 98505 33663</span>
            </a>
            <a
              href="mailto:info@sayandco.in"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex flex-col items-center transition-colors"
            >
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Mail size={20} />
              </div>
              <span className="font-medium">Email Us</span>
              <span className="text-sm text-blue-200">info@sayandco.in</span>
            </a>
            <button className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex flex-col items-center transition-colors">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <MessageSquare size={20} />
              </div>
              <span className="font-medium">Message Us</span>
              <span className="text-sm text-blue-200">Contact Form</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
