import React from "react";
import { motion, AnimatePresence } from "motion/react";

const Loader = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative w-16 h-16 mb-6">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-signal-violet border-r-signal-cyan"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>
          <p className="font-mono text-sm text-text-secondary">
            <span className="text-signal-violet">$</span> booting_portfolio
            <span className="caret-blink">_</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
