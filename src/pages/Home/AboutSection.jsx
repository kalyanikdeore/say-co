import { motion } from "framer-motion";
import { Target, Users, ShieldCheck, Award, Handshake } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="SAY & CO LLP Team"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6">
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={24} />
                  <span className="text-white font-medium">
                    Recognized by ICAI for Excellence
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-600">SAY & CO</span> LLP
            </h2>
            <motion.div
              className="h-1 w-16 bg-yellow-500 mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <p className="text-gray-600 mb-6">
              SAY & CO LLP is a Limited Liability Partnership firm incorporated
              in India, founded by a team of experienced Chartered Accountants
              including CA Yogesh Tatar, CA Abhishek Khankari, CA Yash Shukla,
              CA Yash Kadam, and CA Shahu Ahire. We provide comprehensive
              financial and business advisory services with a focus on strategic
              growth and regulatory compliance.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Handshake,
                  title: "Client-Centric Approach",
                  description:
                    "We prioritize your business goals and tailor solutions to your specific needs.",
                },
                {
                  icon: ShieldCheck,
                  title: "Ethical Practices",
                  description:
                    "Uncompromising integrity in all our services and advice.",
                },
                {
                  icon: Users,
                  title: "Diverse Expertise",
                  description:
                    "Our team includes CAs, MBAs, CISAs, CFAs, CPAs, and other specialists.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
