import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      region: "Maharashtra",
      cities: ["Mumbai", "Pune", "Nashik"],
      icon: MapPin,
    },
    {
      region: "International",
      countries: ["US", "Canada", "Australia", "Europe", "UK"],
      icon: Globe,
    },
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
            Our <span className="text-blue-600">Presence</span>
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
            We serve clients across multiple locations in India and
            internationally.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <location.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {location.region}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {location.cities
                  ? location.cities.map((city, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {city}
                      </span>
                    ))
                  : location.countries.map((country, i) => (
                      <span
                        key={i}
                        className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {country}
                      </span>
                    ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
