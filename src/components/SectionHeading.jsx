import { motion } from "framer-motion";

/** Section title styled like an annotated memory address: `0x02 // projects` */
const SectionHeading = ({ index, label, title, align = "left" }) => {
  const centered = align === "center";
  return (
    <motion.div
      className={`mb-10 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="font-mono text-xs sm:text-sm text-code-muted">
        <span className="text-code-green">0x{index}</span>
        <span className="mx-2">{"//"}</span>
        {label}
      </p>
      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-code-bright font-generalsans">
        {title}
        <span className="text-code-green">.</span>
      </h2>
      <div
        className={`mt-4 h-px w-24 bg-gradient-to-r from-code-green/70 to-transparent ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
};

export default SectionHeading;
