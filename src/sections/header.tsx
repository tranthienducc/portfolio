import { motion } from "framer-motion";
import { links } from "../constants/data";
import { AnimatedLink } from "../components/transformWordwithatag/AnimatedLink";
import { varients } from "../helpers/utils/animations/animations";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 flex items-center justify-between w-full lg:w-full lg:py-6 lg:px-[75px] px-6 py-6 translate-y-0 mix-blend-difference z-[999] text-white"
      initial="hidden"
      animate="visible"
      variants={varients}
    >
      <a href="#">
        <p className="font-semibold text-lg lg:text-xl font-NeueMontreal">
          thien<span className="text-[#cacaca]">duc.</span>
        </p>
      </a>
      <nav className="lg:flex items-center gap-8 text-[16px] font-light leading-[1.1] py-0 px-4 font-Antonio hidden">
        {links.map((link, i) => {
          return (
            <div className="relative hidden group md:inline-block" key={i}>
              <AnimatedLink title={link.title} href={link.href} />
            </div>
          );
        })}
      </nav>
    </motion.header>
  );
};

export default Header;