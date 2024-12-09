"use client";

import { useEffect, useState } from "react";
import MagicButton from "./ui/MagicButton";
import Particles from "./ui/particle";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import DownloadCvButton from "./ui/DownloadCVButton";
const Hero = () => {
  const words = ["a Web Developer", "a Competitive Programmer", "a Passionate Learner"]
  const [quote, setQuote] = useState(learningQuotes[0]);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * learningQuotes.length);
    setQuote(learningQuotes[randomIndex]);
  }, []);
  // index = ;

  return (
    <div className="pb-20 sm:pt-36 pt-16 ">
      <div>
        <Particles
          color="#3498db" // A vibrant blue
          quantity={20}
          className="h-[120vh] w-[120vw] absolute z-10 -top-20 -left-20"
        />
        <Particles
          color="#00ffff" // Bright cyan
          quantity={20}
          className="h-[120vh] w-[120vw] absolute z-10 -top-20 -left-20"
        />
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#1e90ff"
        />
        <Spotlight
          fill="#3b82f6"
          className="left-80 top-28 h-[80vh] w-[50vw]"
        />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative mt-12 mb-20 z-10 -translate-y-24">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="mb-12 sm:mb-8 md:mb-2 mt-12 sm:mt-8 md:mt-2 relative space-grotesk"
            quote={
              quote.quote
                ? quote.quote
                : "The one who learns has no limits - Frank Herbert"
            }
            filter={true}
            duration={2}
          />

          <p
            className="text-4xl md:text-7xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 sm:text-center to-[#1e90ff] mt-4
          py-8"
          >
            Hi, I&apos;m Chinmay,
            <br /> a Passionate Learner
          </p>
          <p
            className="text-3xl block relative text-start sm:text-center md:tracking-wider sm:text-4xl font-semibold z-20 bg-clip-text text-transparent bg-gradient-to-b from-violet-100  to-[#1e90ff]
          py-8"
          >
            and Full Stack Developer based in Vadodara.
          </p>
          <div className="w-full flex justify-center gap-2">
            <Link href="#work" scroll={true} className="mt-8">
              <MagicButton />
            </Link>
            <Link href="https://drive.google.com/file/d/1IuhFo_5iZ9FHvnbhRA14gSQ5MyXY9ziO/view" target="_blank" className="mt-8">
              <DownloadCvButton />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

const learningQuotes = [
  {
    quote:
      "“I never sleep, cause sleep is the cousin of death.” - Nas",
    author: ["Nas"],
  },
  {
    quote: "“The only true wisdom is in knowing you know nothing” - Socrates",
    author: ["Socrates"],
  },
  {
    quote:
      "“Intellectual growth should commence at birth and cease only at death” - Albert Einstein",
    author: ["Albert", "Einstein"],
  },
  {
    quote:
      "“The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn” - Alvin Toffler",
    author: ["Alvin", "Toffler"],
  },
  {
    quote:
      "“Learning is not the accumulation of knowledge, but the ability to apply it in ways that make a meaningful difference” - Herbert Spencer",
    author: ["Herbert", "Spencer"],
  },
  {
    quote:
      "“The art of programming is the skill of controlling complexity” - Marvin Minsky",
    author: ["Marvin", "Minsky"],
  },
  {
    quote:
      "“The most damaging phrase in the language is: 'It's always been done that way'” - Grace Hopper",
    author: ["Grace", "Hopper"],
  },
  {
    quote:
      "“The greatest enemy of knowledge is not ignorance, but the illusion of knowledge” - Stephen Hawking",
    author: ["Stephen", "Hawking"],
  },
  {
    quote:
      "“The goal of education is the advancement of knowledge and the dissemination of truth” - John F. Kennedy",
    author: ["John", "F. Kennedy"],
  },
  {
    quote:
      "“A wise man can learn more from a foolish question than a fool can learn from a wise answer” - Bruce Lee",
    author: ["Bruce", "Lee"],
  },
  {
    quote:
      "“The more you know, the more you realize how much you have yet to learn” - Aristotle",
    author: ["Aristotle"],
  },
  {
    quote: "“Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.” - Kanye West",
    author: ["Kanye", "West"],
  },
  {
    quote:
      "“Learning and innovation go hand in hand. The arrogance of success is to think that what you did yesterday will be sufficient for tomorrow” - William Pollard",
    author: ["William", "Pollard"],
  },
  {
    quote:
      "“The computer was born to solve problems that did not exist before” - Bill Gates",
    author: ["Bill", "Gates"],
  },
  {
    quote:
      "“The true sign of intelligence is not knowledge but imagination” - Albert Einstein",
    author: ["Albert", "Einstein"],
  },
  {
    quote:
      "“The science of today is the technology of tomorrow” - Edward Teller",
    author: ["Edward", "Teller"],
  },
  {
    quote:
      "“The only way to learn a new programming language is by writing programs in it” - Dennis Ritchie",
    author: ["Dennis", "Ritchie"],
  },
  {
    quote:
      "“Knowledge is of no value unless you put it into practice” - Anton Chekhov",
    author: ["Anton", "Chekhov"],
  },
  {
    quote:
      "“The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice” - Brian Herbert",
    author: ["Brian", "Herbert"],
  },
  {
    quote:
      "“In a world of change, the learners shall inherit the earth, while the learned shall find themselves perfectly suited for a world that no longer exists” - Eric Hoffer",
    author: ["Eric", "Hoffer"],
  },
  {
    quote:
      "“The beautiful thing about learning is that nobody can take it away from you” - B.B. King",
    author: ["B.B.", "King"],
  },
  {
    quote:
      "“I am always doing that which I cannot do, in order that I may learn how to do it” - Pablo Picasso",
    author: ["Pablo", "Picasso"],
  },
  {
    quote:
      "“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible” - Richard Feynman",
    author: ["Richard", "Feynman"],
  },
];
