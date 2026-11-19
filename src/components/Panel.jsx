import { motion } from "framer-motion";

/**
 * Editor-window card used across the site.
 * title: left label in the title bar (e.g. a filename or a memory address)
 * meta:  right-aligned content in the title bar
 * dots:  show the red/yellow/green window controls
 */
const Panel = ({
  title,
  meta,
  dots = true,
  hover = true,
  className = "",
  bodyClassName = "panel-body",
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      className={`panel ${hover ? "panel-hover" : ""} ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {(title || meta || dots) && (
        <div className="panel-bar">
          {dots && (
            <div className="panel-dots mr-1" aria-hidden="true">
              <span className="bg-[#ff5f57]" />
              <span className="bg-[#febc2e]" />
              <span className="bg-[#28c840]" />
            </div>
          )}
          {title && <span className="truncate">{title}</span>}
          {meta && <span className="ml-auto shrink-0">{meta}</span>}
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </motion.div>
  );
};

export default Panel;
