// import { Github, Facebook } from "lucide-react";
// import { AnimatedLink } from "../components/AnimatedLink";

import RevealUp from "../components/reveal/RevealUp";

const Contact = () => {
  return (
    <section className="my-[3%] px-5 md:px-10 xl:px-20 2xl:px-28" id="contact">
      <div className="h-[620px] bg-[#0d0d0d] rounded-[42.4px] border border-gray-300">
        <div className="flex flex-col items-center mb-[55px] pt-[180px]">
          <RevealUp>
            <span className="uppercase block text-white font-NeueMontreal text-lg text-center mb-3">
              got a project in mind?
            </span>
            <h3 className="uppercase text-white text-[95px] font-medium font-NeueMontreal mb-5">
              let's connect
            </h3>
          </RevealUp>
          <button className="button duration-300">Write a message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;