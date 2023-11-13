import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { characterAnimation } from "../libs/animations";
import SectionHeading from "../components/SectionHeading";
import HoverText from "../components/HoverText";

const Service = () => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  return (
    <section className="my-[10%] px-5 md:px-10 xl:px-20 2xl:px-28" id="service">
      <SectionHeading>services</SectionHeading>
      <div className="lg:space-y-14 ">
        <motion.div
          className="grid grid-cols-1 gap-5 mt-10 overflow-hidden md:grid-cols-2 md:gap-24"
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
          ref={ref}
        >
          <div className="select-none leading-[2.3rem] text-stone-400 md:leading-[2.5rem] lg:leading-[3.4rem] ">
            <HoverText>
              <p className="font-extrabold text-special 2xl:text-7xl">HTML</p>
              <p className="font-extrabold text-special 2xl:text-7xl">CSS</p>
              <p className="font-extrabold text-special 2xl:text-7xl">
                JavaScript
              </p>
              <p className="font-extrabold text-special 2xl:text-7xl">
                TypeScript
              </p>
            </HoverText>
          </div>
          <div className="space-y-6">
            <div className="-space-y-6 2xl:space-y-10">
              <h3 className="font-semibold leading-tight text-heading-3 2xl:text-7xl text-stone-400 border-thinn px-[14px] py-[4px] w-fit">
                DESIGN
              </h3>
              <p className="max-w-md translate-y-10 xl:max-w-2xl text-body-1 2xl:text-3xl font-Chillax text-stone-200">
                With a high sensibility for modern and elegant design, i can
                deliver meaningfull and user-friendly web designs thaw will make
                your business stand out on the digital stage.
              </p>
            </div>
            <div className="w-[60%] h-1 border-b-white block  lg:hidden border-b-2 pt-9"></div>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 md:gap-24"
          ref={ref}
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
        >
          <div className="select-none leading-[2.3rem] text-stone-400 md:leading-[2.5rem] lg:leading-[3.4rem]">
            <HoverText>
              <p className="font-extrabold text-special 2xl:text-7xl">Github</p>
              <p className="font-extrabold text-special 2xl:text-7xl">Git</p>
              <p className="font-extrabold text-special 2xl:text-7xl">
                Photoshop
              </p>
              <p className="font-extrabold text-special 2xl:text-7xl">Figma</p>
            </HoverText>
          </div>
          <div className="space-y-6">
            <div className="-space-y-6 2xl:space-y-10">
              <h3 className="font-semibold leading-tight text-heading-3 2xl:text-7xl text-stone-400 border-thinn px-[14px] py-[4px] w-fit whitespace-nowrap">
                THE FULL PACKAGE
              </h3>
              <p className="max-w-md translate-y-10 xl:max-w-2xl text-body-1 2xl:text-3xl font-Chillax text-stone-200">
                From design to development, i build a complete website from
                scratch and handle every step of the process. I remain available
                for future updates.
              </p>
            </div>
            <div className="w-[60%] h-1 border-b-white lg:hidden block border-b-2 pt-9"></div>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 md:gap-24"
          ref={ref}
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
        >
          <div className="select-none leading-[2.3rem] text-stone-400 md:leading-[2.5rem] lg:leading-[3.4rem]">
            <HoverText>
              <p className="font-extrabold text-special 2xl:text-7xl">
                ReactJS
              </p>
              <p className="font-extrabold text-special 2xl:text-7xl">NextJS</p>
              <p className="font-extrabold text-special 2xl:text-7xl">
                TailwindCSS
              </p>
              <p className="font-extrabold text-special 2xl:text-7xl">
                Shadcn UI
              </p>
              <p className="font-extrabold text-special 2xl:text-7xl">GSAP</p>
            </HoverText>
          </div>
          <div className="lg:space-y-6 mb-7">
            <div className="-space-y-6 2xl:space-y-10">
              <h3 className="font-semibold leading-tight text-heading-3 2xl:text-7xl text-stone-400 border-thinn px-[14px] py-[4px] w-fit">
                DEVELOPMENT
              </h3>
              <p className="max-w-md translate-y-10 xl:max-w-2xl text-body-1 2xl:text-3xl font-Chillax text-stone-200">
                Mainly focused on React & NextJS Based technologies, i can build
                any type of web interface and have been developing several
                projects both personal and my clients. i use Typescrip for
                programming.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
