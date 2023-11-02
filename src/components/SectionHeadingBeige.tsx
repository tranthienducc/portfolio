import { Variants, motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 30,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.15,
      duration: 0.3,
    },
  },
};

const SectionHeadingBeige = ({ children }: SectionHeadingProps) => {
  return (
    <motion.div
      className="flex items-center justify-center gap-4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={cardVariants}
    >
      <img src="/elilipse.svg" alt="eips" className="hidden lg:block" />
      <h2 className="text-5xl font-medium text-black uppercase w-fit sm:text-heading-2">
        {children}
      </h2>
      <img src="/elilipse.svg" alt="eips" className="hidden lg:block" />
    </motion.div>
  );
};

export default SectionHeadingBeige;
