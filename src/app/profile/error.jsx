"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 text-center max-w-lg w-full"
      >
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex justify-center mb-6"
        >
          <FaExclamationTriangle className="text-6xl md:text-8xl text-red-500" />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
          Oops! Something Went Wrong
        </h2>

        <p className="text-gray-600 mb-6 text-base md:text-lg">
          We&apos;re sorry, but an unexpected error occurred. Don&apos;t worry,
          you can try refreshing the page or click the button below.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => reset()}
          className="bg-red-500 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 mx-auto hover:bg-red-600 transition-colors"
        >
          <FaRedo className="mr-2" />
          Try Again
        </motion.button>

        <div className="mt-6 text-sm text-gray-500">
          Error details have been logged for investigation.
        </div>
      </motion.div>
    </div>
  );
}
