import { motion, useReducedMotion } from "framer-motion";
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? undefined : { opacity: [0.65, 1], y: [22, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
