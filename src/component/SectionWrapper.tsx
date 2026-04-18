import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className = "" }: Props) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    className={`py-20 md:py-28 px-4 ${className}`}
  >
    <div className="max-w-6xl mx-auto">{children}</div>
  </motion.section>
);

export default SectionWrapper;
