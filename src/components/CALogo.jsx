import { motion } from "framer-motion";
import { Briefcase, ArrowRight, ChevronsRight, BarChart2 } from "lucide-react";
import { calogo } from "../assets";

const CALogo = () => {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <img
          src={calogo}
          alt="CA Yash Shukla Logo"
          className="w-20 h-20 md:w-18 md:h-16"
        />
      </motion.div>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="text-xl md:text-2xl font-bold text-gray-700 tracking-tight">
          <span className="text-[#274584]">SAY &</span> CO LLP
        </h1>
        <p className="text-xs text-gray-500">Chartered Accountant</p>
      </motion.div>
    </motion.div>
  );
};

export default CALogo;
