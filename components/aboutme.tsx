"use client";

import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";


const AboutMe = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "circOut",
          }}
          viewport={{ margin: "-100px", once: true }}
          className="text-4xl md:text-6xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 text-center to-blue-500 mt-4"
        >
          About Me
        </motion.div>{" "}
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold w-screen sm:p-10 pr-2 pl-1 mt-6  relative z-20 text-white-200   text-center md:w-9/12 mx-auto">
          I am currently a 3rd year Undergraduate in Computer Engineering at Sardar Vallabhbhai Patel Institute of Technology.
          <br />
          <br />I am a fast learner, I get along well with people and am a big
          time team player. I like to learn new technologies, build new things,
          and make them better.
          <br /> <br />
          Feel free to dive into my{" "}
          <LinkPreview
            url="https://drive.google.com/file/d/1IuhFo_5iZ9FHvnbhRA14gSQ5MyXY9ziO/view"
            isStatic
            imageSrc="/links/resume.png"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shine-effect   decoration-blue-400"
          >
            resume
          </LinkPreview>
          , explore my{" "}
          <LinkPreview
            url="https://github.com/ChinmayNoob"
            isStatic
            imageSrc="/links/github.png"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shine-effect   decoration-blue-400"
          >
            GitHub
          </LinkPreview>
          ,{" "}
          <LinkPreview
            url="https://codeforces.com/profile/Chinmay04AUG_"
            isStatic
            imageSrc="/links/codeforces.png"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shine-effect   decoration-blue-400"
          >
            Codeforces
          </LinkPreview>
          ,and let&apos;s connect on{" "}
          <LinkPreview
            url="https://www.linkedin.com/in/chinmay-sawant0408/"
            isStatic
            imageSrc="/links/linkedin.png"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shine-effect   decoration-blue-400"
          >
            LinkedIn
          </LinkPreview>{" "}
          .
        </h1>
      </div>
    </>
  );
};

export default AboutMe;
