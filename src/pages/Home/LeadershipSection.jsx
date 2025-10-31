import { motion } from "framer-motion";
import { Award, BookOpen, Calendar, UserCheck } from "lucide-react";

const LeadershipSection = () => {
  const stats = [
    { icon: Calendar, value: "15+", label: "Years Experience" },
    { icon: BookOpen, value: "500+", label: "Cases Handled" },
    { icon: UserCheck, value: "200+", label: "Satisfied Clients" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Our <span className="text-blue-600">Leadership</span>
          </motion.h2>
          <motion.div
            className="h-1 w-16 bg-yellow-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Meet the experienced professionals guiding your financial success.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="CA Yash Shukla"
                className="w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-blue-900 p-4 rounded-lg shadow-lg">
                <Award size={32} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              CA Yash Shukla
            </h3>
            <p className="text-blue-600 font-medium mb-6">
              Founder & Managing Director
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className="text-blue-600" size={20} />
                    <span className="text-2xl font-bold text-gray-800">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 mb-6">
              With over 15 years of experience in financial advisory and
              compliance, CA Yash Shukla leads our team with expertise and
              vision. A member of the Institute of Chartered Accountants of
              India, he specializes in strategic tax planning and business
              consulting.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors">
                View Full Profile
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-2 rounded-lg transition-colors">
                Meet The Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
