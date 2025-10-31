import React from "react";
import { motion } from "framer-motion";
import Team from "./Team";

// Color definitions
const primaryColor = "#274584";
const primaryLight = "#E8EBF5";
const primaryLighter = "#F5F7FC";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function AboutPage() {
  return (
    <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Hero Section */}
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-20"
      >
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          style={{ color: primaryColor }}
        >
          A powerhouse of <span className="text-blue-600">superior talent</span>{" "}
          and sturdy experience
        </h1>
        <h3 className="text-xl text-gray-600 font-medium">
          Committed to Solve, Excel and add Value
        </h3>
        <div className="mt-8 flex justify-center">
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: primaryColor }}
          ></div>
        </div>
      </motion.div> */}

      {/* Image Banner */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8 mb-20"
      >
        <motion.div
          variants={fadeIn}
          className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition-all duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80"
            alt="Financial advisors meeting"
            className="w-full h-full object-cover"
            style={{ height: "400px" }}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <h3 className="text-white text-xl font-semibold">
              Expert Advisory
            </h3>
          </div> */}
        </motion.div>
        <motion.div
          variants={fadeIn}
          className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition-all duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80"
            alt="Tax professionals working"
            className="w-full h-full object-cover"
            style={{ height: "400px" }}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <h3 className="text-white text-xl font-semibold">
              Dedicated Teamwork
            </h3>
          </div> */}
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8 mb-20"
      >
        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
        >
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: primaryLight }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={primaryColor}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            Trust & Integrity
          </h3>
          <p className="text-gray-600">
            We believe the success of a firm is built off of the trust of
            clients and employees. The best way to gain that trust is to
            demonstrate ethics and integrity in our dealings.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
        >
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: primaryLight }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={primaryColor}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            Client Focus
          </h3>
          <p className="text-gray-600">
            "Your success is truly yours; we just play a role in it". Every
            client requirement is different, every requirement is special.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
        >
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: primaryLight }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={primaryColor}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            Growth
          </h3>
          <p className="text-gray-600">
            Growth comes only through continuous effort. We are committed to
            professional training and development of our people.
          </p>
        </motion.div>
      </motion.div>

      {/* About Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mb-20"
      >
        <motion.div variants={fadeIn} className="mb-12">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: primaryColor }}
            >
              About SAY & CO LLP
            </h2>
            <div className="flex justify-center">
              <div
                className="w-16 h-1 rounded-full"
                style={{ backgroundColor: primaryColor }}
              ></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As technology shrinks the world, a lot of peripheral functions
                are now core business functions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In this ever-evolving business landscape, there is a constant
                need for expert advice. This is where SAY & CO LLP steps in, to
                ease the complexities through comprehensive handholding from
                advice to implementation.
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Established in 2025, SAY & CO LLP is building on a
                multi-generation legacy of excellence and goodwill with an array
                of niche professional services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As trusted advisors to organizations of all sizes across
                industries, we are well poised to help our clients overcome
                complex organizational, policy-related, tax and portfolio
                challenges.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="p-10 rounded-xl text-white"
          style={{ backgroundColor: primaryColor }}
        >
          <h3 className="text-2xl font-semibold mb-4">Our Philosophy</h3>
          <p className="text-blue-100 leading-relaxed">
            We have earned our client's trust by delivering a consistently high
            level of professional expertise in the field of Taxation, Corporate
            Advisory, Transaction Advisory Services, and Special Services.
          </p>
        </motion.div>
      </motion.div>

      {/* Pillars Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn} className="text-center mb-12">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: primaryColor }}
          >
            Our Pillars of Excellence
          </h2>
          <div className="flex justify-center">
            <div
              className="w-16 h-1 rounded-full"
              style={{ backgroundColor: primaryColor }}
            ></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              number: 1,
              title: "Knowledge",
              content:
                "Talented pool of highly qualified professionals with deep technical insights for any complex business situation.",
            },
            {
              number: 2,
              title: "Trust",
              content:
                "We take ownership of nurturing long-term, trust–based associations with high assurance and credibility.",
            },
            {
              number: 3,
              title: "Empathy",
              content:
                "We are mindful of the thoughts and feelings of our clients and colleagues at all times.",
            },
          ].map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: primaryLight }}
              >
                <span className="font-semibold" style={{ color: primaryColor }}>
                  {pillar.number}
                </span>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: primaryColor }}
              >
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{pillar.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              number: 4,
              title: "Ownership",
              content:
                "We encourage all colleagues to steer each assignment as if they are the owners.",
            },
            {
              number: 5,
              title: "Agility",
              content:
                "We adapt to changes to continuously remain ahead of the curve in all that we do.",
            },
            {
              number: 6,
              title: "Excellence",
              content:
                "Our hallmark by providing innovative, timely and valuable services that delight clients.",
            },
          ].map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: primaryLight }}
              >
                <span className="font-semibold" style={{ color: primaryColor }}>
                  {pillar.number}
                </span>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: primaryColor }}
              >
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{pillar.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Team />
    </div>
  );
}

export default AboutPage;
