import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: Props) => (
  <div className="text-center mb-14">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-sm font-semibold text-primary tracking-wider uppercase mb-2"
    >
      {label}
    </motion.p>
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">{title}</h2>
    {description && (
      <p className="text-muted-foreground max-w-lg mx-auto">{description}</p>
    )}
  </div>
);

export default SectionHeading;
