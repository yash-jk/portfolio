import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types"; // For prop type validation (optional but recommended)

const Section = ({ id, children }) => {
  return (
    <motion.section
      id={id} // Dynamically set the section's ID
      className="min-h-screen flex items-center justify-center px-4"
      initial={{ opacity: 0, y: 50 }} // Start state
      whileInView={{ opacity: 1, y: 0 }} // Animate to end state
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
      transition={{ duration: 0.6, ease: "easeOut" }} // Animation details
    >
      {children} {/* Render the content passed as children */}
    </motion.section>
  );
};

// Prop validation
Section.propTypes = {
  id: PropTypes.string.isRequired, // ID is required for linking and smooth scrolling
  children: PropTypes.node.isRequired, // Ensure children are passed
};

export default Section;
