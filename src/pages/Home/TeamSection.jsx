import { motion } from "framer-motion";
import { User, Award, BookOpen, Briefcase, CheckCircle } from "lucide-react";
import { caabhishek, cakadam, cashahu, catatar, cayash } from "../../assets";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "CA Yogesh Tatar",
      role: "Partner",
      //expertise: "Taxation & Compliance",
      image: "",
    },
    {
      name: "CA Abhishek Khankari",
      role: "Partner",
      //expertise: "Audit & Assurance",
      image: caabhishek,
    },
    {
      name: "CA Yash Shukla",
      role: "Partner",
      //expertise: "Business Consulting",
      image: cayash,
    },
    {
      name: "CA Yash Kadam",
      role: "Partner",
      //expertise: "International Taxation",
      image: cakadam,
    },
    {
      name: "CA Shahu Ahire",
      role: "Partner",
      //expertise: "Regulatory Compliance",
      image: cashahu,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Our <span className="text-blue-600">Team</span>
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
            Each of our team members is carefully selected through a rigorous
            recruitment process and trained to deliver exceptional service.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 w-9/12 md:w-auto"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase size={14} />
                  <span>{member.expertise}</span>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-blue-50 rounded-xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Expertise
              </h3>
              <p className="text-gray-600 mb-4">
                We invest in our team's growth through continuous learning and
                development programs, ensuring they remain best-in-class
                professionals.
              </p>
              <p className="text-gray-600">
                Our team strikes a balance between energetic young talent and
                seasoned experts, creating a dynamic and well-rounded workforce.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Professionals
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Chartered Accountants",
                  "Company Secretaries",
                  "ICMAs",
                  "LLBs",
                ].map((profession, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600" size={16} />
                    <span className="text-sm text-gray-600">{profession}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
