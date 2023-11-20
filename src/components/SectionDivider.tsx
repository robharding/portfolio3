"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface SectionDividerProps {}

const SectionDivider: FC<SectionDividerProps> = ({}) => {
  return (
    <motion.div
      className="bg-black my-24  h-16 w-1.5 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 0.3, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
};

export default SectionDivider;
