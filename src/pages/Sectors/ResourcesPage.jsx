import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  BookOpen,
  FileText,
  Link as LinkIcon,
  Settings,
  Gavel,
} from "lucide-react";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const ResourcesPage = () => {
  const location = useLocation();
  const sectionRefs = useRef({});
  const headerRef = useRef(null);

  // Resources data organized by categories with IDs for navigation
  const resources = [
    {
      id: "acts",
      title: "Acts & Regulations",
      icon: <BookOpen size={20} className="mr-2" />,
      items: [
        {
          name: "Income Tax Act, 1961",
          url: "https://incometaxindia.gov.in/Pages/acts/income-tax-act.aspx",
        },
        {
          name: "Wealth Tax Act",
          url: "https://incometaxindia.gov.in/pages/acts/wealth-tax-act.aspx",
        },
        {
          name: "Societies Registration Act, 1860",
          url: "https://www.mca.gov.in/Ministry/actsbills/pdf/Societies_Registration_Act_1860.pdf",
        },
        {
          name: "MRTP Act, 1969",
          url: "https://www.mca.gov.in/Ministry/annual_reports/annualreport2007/Eng/CHAPTER4.pdf",
        },
        {
          name: "FEMA, 1999",
          url: "https://incometaxindia.gov.in/pages/acts/foreign-exchange-management-act.aspx",
        },
        {
          name: "Company Secretaries Act, 1980",
          url: "https://www.mca.gov.in/Ministry/actsbills/pdf/The_Companies_Secretaries_Amendment_Act_2006.pdf",
        },
        {
          name: "Customs Act, 1962",
          url: "http://servicetax.gov.in/htdocs-cbec/customs/cs-acts-botm",
        },
        {
          name: "Companies Act, 1956",
          url: "https://www.mca.gov.in/Ministry/pdf/Companies_Act_1956_13jun2011.pdf",
        },
      ],
    },
    {
      id: "forms",
      title: "Forms",
      icon: <FileText size={20} className="mr-2" />,
      items: [
        {
          name: "PAN Card Form",
          url: "https://traceindia.in/https:/www.incometaxindia.gov.in/forms/income-tax%20rules/103120000000007917.pdf",
        },
        {
          name: "Change/Correction in PAN Form",
          url: "https://traceindia.in/https:/www.tin-nsdl.com/downloads/pan/download/Request-for-New-PAN-Card-or-and-Changes-or-Correction-in-PAN-Data-Form.pdf",
        },
        {
          name: "Income Tax Forms",
          url: "https://traceindia.in/http://www.incometaxindia.gov.in/Pages/downloads/forms.aspx",
        },
        {
          name: "Income Declaration Forms",
          url: "https://traceindia.in/http://www.incometaxindia.gov.in/Pages/downloads/forms.aspx",
        },
        { name: "ROC Forms (Companies Act 2013)", url: "#" },
        { name: "FEMA Forms", url: "#" },
        { name: "NBFC Forms", url: "#" },
        { name: "LLP Forms", url: "#" },
        { name: "Service Tax Forms", url: "#" },
        { name: "ROC Forms (Companies Act 1956)", url: "#" },
      ],
    },
    {
      id: "links",
      title: "Important Links",
      icon: <LinkIcon size={20} className="mr-2" />,
      items: [
        {
          name: "Institute of Chartered Accountants of India (ICAI)",
          url: "https://www.icai.org/",
        },
        {
          name: "Institute of Company Secretaries of India",
          url: "https://www.icsi.edu/",
        },
        {
          name: "Institute of Cost Accountants of India",
          url: "https://www.icmai.in/",
        },
        { name: "Ministry of Finance", url: "https://www.finmin.nic.in/" },
        {
          name: "Ministry of Corporate Affairs",
          url: "https://www.mca.gov.in/",
        },
        { name: "Reserve Bank of India (RBI)", url: "https://www.rbi.org.in/" },
        {
          name: "Securities & Exchange Board of India (SEBI)",
          url: "https://www.sebi.gov.in/",
        },
        {
          name: "National Stock Exchange (NSE)",
          url: "https://www.nseindia.com/",
        },
        {
          name: "Bombay Stock Exchange (BSE)",
          url: "https://www.bseindia.com/",
        },
      ],
    },
    {
      id: "utilities",
      title: "Utilities",
      icon: <Settings size={20} className="mr-2" />,
      items: [
        {
          name: "Verify Your PAN",
          url: "https://www.incometax.gov.in/iec/foportal/",
        },
        {
          name: "Know Your TAN",
          url: "https://www.incometax.gov.in/iec/foportal/",
        },
        {
          name: "Income Tax Calculator",
          url: "https://www.incometaxindia.gov.in/pages/tools/income-tax-calculator.aspx",
        },
        {
          name: "TDS Calculator",
          url: "https://www.incometaxindia.gov.in/pages/tools/tds-calculator.aspx",
        },
        {
          name: "Apply Online - PAN/TAN",
          url: "https://www.incometax.gov.in/iec/foportal/",
        },
        {
          name: "e-Payment of Taxes",
          url: "https://www.incometaxindia.gov.in/Pages/tax-services/pay-tax-online.aspx",
        },
        {
          name: "ITR-V Receipt Status",
          url: "https://www.incometax.gov.in/iec/foportal/",
        },
        {
          name: "Status of Tax Refund",
          url: "https://www.incometax.gov.in/iec/foportal/",
        },
      ],
    },
    {
      id: "rules",
      title: "Rules",
      icon: <Gavel size={20} className="mr-2" />,
      items: [
        {
          name: "Income Tax Rules",
          url: "https://www.incometaxindia.gov.in/pages/acts/income-tax-rules.aspx",
        },
        {
          name: "ITC Rules and Guidelines",
          url: "https://www.incometaxindia.gov.in/pages/acts/input-tax-credit-rules.aspx",
        },
        {
          name: "Companies Rules, 1959",
          url: "https://www.mca.gov.in/Ministry/actsbills/pdf/Companies_Rules_1959.pdf",
        },
        {
          name: "LLP Rules, 2009",
          url: "https://www.mca.gov.in/Ministry/actsbills/pdf/LLP_Rules_2009_15jan09.pdf",
        },
      ],
    },
  ];

  // Function to handle external links
  const handleExternalLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank");
    }
  };

  // Scroll to section based on hash in URL
  useEffect(() => {
    const scrollToSection = () => {
      const { hash } = location;

      if (hash) {
        const sectionId = hash.substring(1);
        const sectionRef = sectionRefs.current[sectionId];

        if (sectionRef) {
          const headerHeight = 100; // Adjust based on your header height
          const sectionTop = sectionRef.offsetTop;
          const scrollPosition = sectionTop - headerHeight;

          // First jump quickly to near the position
          window.scrollTo({
            top: scrollPosition - 50,
            behavior: "auto",
          });

          // Then smooth scroll to exact position
          setTimeout(() => {
            window.scrollTo({
              top: scrollPosition,
              behavior: "smooth",
            });
          }, 50);
        }
      } else {
        // Scroll to top when no hash is present (page refresh)
        window.scrollTo({
          top: 0,
          behavior: "auto",
        });
      }
    };

    const timer = setTimeout(scrollToSection, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with ref */}
        <div ref={headerRef} className="text-center mb-12 pt-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl  pt-16">
            Resources Center
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            All the important acts, forms, and links in one place
          </p>
        </div>

        <div className="space-y-8">
          {resources.map((category) => (
            <section
              key={category.id}
              id={category.id}
              ref={(el) => (sectionRefs.current[category.id] = el)}
              className="bg-white shadow overflow-hidden rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center">
                  {category.icon}
                  <h2 className="text-lg leading-6 font-medium text-gray-900 ml-2">
                    {category.title}
                  </h2>
                </div>
              </div>
              <div className="bg-white px-4 py-5 sm:p-6">
                <ul className="divide-y divide-gray-200">
                  {category.items.map((item, index) => (
                    <li key={index} className="py-4 flex hover:bg-gray-50">
                      <div className="ml-3">
                        <button
                          onClick={() => handleExternalLink(item.url)}
                          className={`text-sm font-medium ${
                            item.url !== "#"
                              ? "text-blue-600 hover:text-blue-500 hover:underline"
                              : "text-gray-500 cursor-default"
                          } focus:outline-none`}
                        >
                          {item.name}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* <div className="mt-12 bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              News & Updates
            </h3>
          </div>
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Stay updated with the latest news and announcements
              </p>
              <a
                href="http://blog.caonline.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Visit CA Online Blog
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ResourcesPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   BookOpen,
//   FileText,
//   Link as LinkIcon,
//   Settings,
//   Gavel,
// } from "lucide-react";

// const ResourcesPage = () => {
//   // Resources data organized by categories
//   const resources = [
//     {
//       id: "acts",
//       title: "Acts & Regulations",
//       icon: <BookOpen size={20} className="mr-2" />,
//       items: [
//         {
//           name: "Income Tax Act, 1961",
//           url: "https://incometaxindia.gov.in/Pages/acts/income-tax-act.aspx",
//         },
//         {
//           name: "Wealth Tax Act",
//           url: "https://incometaxindia.gov.in/pages/acts/wealth-tax-act.aspx",
//         },
//         {
//           name: "Societies Registration Act, 1860",
//           url: "https://www.mca.gov.in/Ministry/actsbills/pdf/Societies_Registration_Act_1860.pdf",
//         },
//         {
//           name: "MRTP Act, 1969",
//           url: "https://www.mca.gov.in/Ministry/annual_reports/annualreport2007/Eng/CHAPTER4.pdf",
//         },
//         {
//           name: "FEMA, 1999",
//           url: "https://incometaxindia.gov.in/pages/acts/foreign-exchange-management-act.aspx",
//         },
//         {
//           name: "Company Secretaries Act, 1980",
//           url: "https://www.mca.gov.in/Ministry/actsbills/pdf/The_Companies_Secretaries_Amendment_Act_2006.pdf",
//         },
//         {
//           name: "Customs Act, 1962",
//           url: "http://servicetax.gov.in/htdocs-cbec/customs/cs-acts-botm",
//         },
//         {
//           name: "Companies Act, 1956",
//           url: "https://www.mca.gov.in/Ministry/pdf/Companies_Act_1956_13jun2011.pdf",
//         },
//       ],
//     },
//     {
//       title: "Forms",
//       icon: <FileText size={20} className="mr-2" />,
//       items: [
//         {
//           name: "PAN Card Form",
//           url: "https://traceindia.in/https:/www.incometaxindia.gov.in/forms/income-tax%20rules/103120000000007917.pdf",
//         },
//         {
//           name: "Change/Correction in PAN Form",
//           url: "https://traceindia.in/https:/www.tin-nsdl.com/downloads/pan/download/Request-for-New-PAN-Card-or-and-Changes-or-Correction-in-PAN-Data-Form.pdf",
//         },
//         {
//           name: "Income Tax Forms",
//           url: "https://traceindia.in/http://www.incometaxindia.gov.in/Pages/downloads/forms.aspx",
//         },
//         { name: "Income Declaration Forms", url: "#" },
//         { name: "ROC Forms (Companies Act 2013)", url: "#" },
//         { name: "FEMA Forms", url: "#" },
//         { name: "NBFC Forms", url: "#" },
//         { name: "LLP Forms", url: "#" },
//         { name: "Service Tax Forms", url: "#" },
//         { name: "ROC Forms (Companies Act 1956)", url: "#" },
//       ],
//     },
//     {
//       title: "Important Links",
//       icon: <LinkIcon size={20} className="mr-2" />,
//       items: [
//         {
//           name: "Institute of Chartered Accountants of India (ICAI)",
//           url: "https://www.icai.org/",
//         },
//         {
//           name: "Institute of Company Secretaries of India",
//           url: "https://www.icsi.edu/",
//         },
//         {
//           name: "Institute of Cost Accountants of India",
//           url: "https://www.icmai.in/",
//         },
//         { name: "Ministry of Finance", url: "https://www.finmin.nic.in/" },
//         {
//           name: "Ministry of Corporate Affairs",
//           url: "https://www.mca.gov.in/",
//         },
//         { name: "Reserve Bank of India (RBI)", url: "https://www.rbi.org.in/" },
//         {
//           name: "Securities & Exchange Board of India (SEBI)",
//           url: "https://www.sebi.gov.in/",
//         },
//         {
//           name: "National Stock Exchange (NSE)",
//           url: "https://www.nseindia.com/",
//         },
//         {
//           name: "Bombay Stock Exchange (BSE)",
//           url: "https://www.bseindia.com/",
//         },
//       ],
//     },
//     {
//       title: "Utilities",
//       icon: <Settings size={20} className="mr-2" />,
//       items: [
//         {
//           name: "Verify Your PAN",
//           url: "https://www.incometax.gov.in/iec/foportal/",
//         },
//         {
//           name: "Know Your TAN",
//           url: "https://www.incometax.gov.in/iec/foportal/",
//         },
//         {
//           name: "Income Tax Calculator",
//           url: "https://www.incometaxindia.gov.in/pages/tools/income-tax-calculator.aspx",
//         },
//         {
//           name: "TDS Calculator",
//           url: "https://www.incometaxindia.gov.in/pages/tools/tds-calculator.aspx",
//         },
//         {
//           name: "Apply Online - PAN/TAN",
//           url: "https://www.incometax.gov.in/iec/foportal/",
//         },
//         {
//           name: "e-Payment of Taxes",
//           url: "https://www.incometaxindia.gov.in/Pages/tax-services/pay-tax-online.aspx",
//         },
//         {
//           name: "ITR-V Receipt Status",
//           url: "https://www.incometax.gov.in/iec/foportal/",
//         },
//         {
//           name: "Status of Tax Refund",
//           url: "https://www.incometax.gov.in/iec/foportal/",
//         },
//       ],
//     },
//     {
//       title: "Rules",
//       icon: <Gavel size={20} className="mr-2" />,
//       items: [
//         {
//           name: "Income Tax Rules",
//           url: "https://www.incometaxindia.gov.in/pages/acts/income-tax-rules.aspx",
//         },
//         {
//           name: "CENVAT Credit Rules, 2004",
//           url: "https://www.cbic.gov.in/htdocs-cbec/excise/cx-act-rules/cx-rules-2017/cenvat-credit-rules",
//         },
//         {
//           name: "Companies Rules, 1959",
//           url: "https://www.mca.gov.in/Ministry/actsbills/pdf/Companies_Rules_1959.pdf",
//         },
//         {
//           name: "LLP Rules, 2009",
//           url: "https://www.mca.gov.in/Ministry/actsbills/pdf/LLP_Rules_2009_15jan09.pdf",
//         },
//         {
//           name: "Service Tax Rules",
//           url: "https://www.cbic.gov.in/htdocs-servicetax/st-provisions/service-tax-rules",
//         },
//         {
//           name: "Wealth Tax Rules 1957",
//           url: "https://www.incometaxindia.gov.in/pages/acts/wealth-tax-rules.aspx",
//         },
//       ],
//     },
//   ];

//   // Function to handle external links
//   const handleExternalLink = (url) => {
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="mt-26 min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Resources Center
//           </h1>
//           <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
//             All the important acts, forms, and links in one place
//           </p>
//         </div>

//         <div className="space-y-8">
//           {resources.map((category, index) => (
//             <div
//               key={index}
//               className="bg-white shadow overflow-hidden rounded-lg"
//             >
//               <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200 flex items-center">
//                 <span className="text-gray-700">{category.icon}</span>
//                 <h3 className="text-lg leading-6 font-medium text-gray-900">
//                   {category.title}
//                 </h3>
//               </div>
//               <div className="bg-white px-4 py-5 sm:p-6">
//                 <ul className="divide-y divide-gray-200">
//                   {category.items.map((item, itemIndex) => (
//                     <li key={itemIndex} className="py-4 flex">
//                       <div className="ml-3">
//                         <button
//                           onClick={() => handleExternalLink(item.url)}
//                           className="text-sm font-medium text-blue-600 hover:text-blue-500 hover:underline focus:outline-none"
//                         >
//                           {item.name}
//                         </button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 bg-white shadow overflow-hidden rounded-lg">
//           <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">
//               News & Updates
//             </h3>
//           </div>
//           <div className="bg-white px-4 py-5 sm:p-6">
//             <div className="text-center">
//               <p className="text-gray-600 mb-4">
//                 Stay updated with the latest news and announcements
//               </p>
//               <a
//                 href="http://blog.caonline.in/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Visit CA Online Blog
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResourcesPage;
