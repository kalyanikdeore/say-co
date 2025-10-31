import React from "react";
import { Link } from "react-router-dom";
import { User, Briefcase, Award, Mail, Phone } from "lucide-react";

const Team = () => {
  // Partner data
  const partners = [
    {
      id: 1,
      name: "CA Yogesh Tatar",
      //position: "Senior Partner",
      //experience: "25+ years",
      specialization: "Corporate Taxation & International Tax",
      bio: "Expert in cross-border taxation with extensive experience in M&A tax structuring. Former IRS officer with deep knowledge of tax treaties.",
      //email: "rajesh@cafirm.com",
      //phone: "+91 9876543210",
    },
    {
      id: 2,
      name: "CA Abhishek Khankari",
      //position: "Tax Partner",
      //experience: "6+ years",
      specialization: "GST & Indirect Taxation",
      bio: "Specialized in GST implementation and compliance for large corporates. Regularly conducts workshops for CBIC and industry associations.",
      //email: "priya@cafirm.com",
      //phone: "+91 9876543211",
    },
    {
      id: 3,
      name: "CA Yash Shukla",
      //position: "Audit Partner",
      //experience: "20 years",
      specialization: "Statutory Audit & Assurance",
      bio: "Leads the audit practice with expertise in financial reporting and internal controls. Serves on several ICAI technical committees.",
      //email: "amit@cafirm.com",
      //phone: "+91 9876543212",
    },
    {
      id: 4,
      name: "CA Yash Kadam",
      //position: "Advisory Partner",
      //experience: "15 years",
      specialization: "Business Advisory & Risk Management",
      bio: "Focuses on strategic business consulting with special emphasis on family businesses and startups. Regular speaker at entrepreneurial summits.",
      //email: "neha@cafirm.com",
      //phone: "+91 9876543213",
    },
    {
      id: 5,
      name: "CA Shahu Ahire",
      //position: "Technology Partner",
      //experience: "12 years",
      specialization: "Digital Taxation & Accounting Systems",
      bio: "Pioneer in implementing technology solutions for tax compliance. Certified in multiple accounting platforms and ERP systems.",
      //email: "vikram@cafirm.com",
      //phone: "+91 9876543214",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Our Firm
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Trusted advisors with decades of combined experience
          </p>
        </div>

        {/* Firm Overview */}
        <div className="bg-white shadow rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 1995, we have grown from a small practice to one of the
            most respected CA firms in the region. Our team of 50+ professionals
            serves clients across industries with a perfect blend of technical
            expertise and practical business acumen.
          </p>
          <p className="text-gray-600">
            We pride ourselves on building long-term relationships and providing
            tailored solutions that address the unique challenges of each client
            while maintaining the highest standards of professional ethics.
          </p>
        </div>

        {/* Partners Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Our Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <User className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {partner.name}
                      </h3>
                      <p className="text-blue-600">{partner.position}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* <div className="flex items-start">
                      <Briefcase
                        className="text-gray-500 mt-1 mr-3 flex-shrink-0"
                        size={18}
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Experience
                        </p>
                        <p className="text-gray-800">{partner.experience}</p>
                      </div>
                    </div> */}

                    <div className="flex items-start">
                      <Award
                        className="text-gray-500 mt-1 mr-3 flex-shrink-0"
                        size={18}
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Specialization
                        </p>
                        <p className="text-gray-800">
                          {partner.specialization}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mt-3">{partner.bio}</p>

                    <div className="pt-3 border-t border-gray-100 mt-4">
                      {/* <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Mail className="mr-2" size={16} />
                        <a
                          href={`mailto:${partner.email}`}
                          className="hover:text-blue-600"
                        >
                          {partner.email}
                        </a>
                      </div> */}
                      {/* <div className="flex items-center text-sm text-gray-500">
                        <Phone className="mr-2" size={16} />
                        <a
                          href={`tel:${partner.phone}`}
                          className="hover:text-blue-600"
                        >
                          {partner.phone}
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                Uncompromising ethical standards in all our dealings
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Expertise</h3>
              <p className="text-gray-600 text-sm">
                Continuous learning to deliver technically sound advice
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Client Focus</h3>
              <p className="text-gray-600 text-sm">
                Tailored solutions for each client's unique needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
