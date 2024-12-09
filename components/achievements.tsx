"use client";

import { motion } from "framer-motion";

const Achievements = () => {
    return (
        <div className="min-h-[calc(80vh)]">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut",
                }}
                viewport={{ margin: "-100px", once: true }}
                className="text-4xl md:text-6xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 text-center to-blue-500 mt-4"
            >
                Achievements
            </motion.div>


            <div className="flex flex-col items-center justify-center space-y-8 py-12 px-4">
      <div className="w-full max-w-4xl">
        <ul className="space-y-6 pl-6">
          <li className="text-2xl sm:text-3xl font-semibold text-white list-disc list-outside marker:text-blue-300">
            <span className="text-gray-200 whitespace-normal break-words">
              Highest rating of <span className="shine-effect text-blue-300">1615</span> at Codeforces i.e <span className="shine-effect text-blue-300">Expert</span>, which is the top site in Competitive Programming across globe.
            </span>
          </li>
          <li className="text-2xl sm:text-3xl font-semibold text-white list-disc list-outside marker:text-blue-300">
            <span className="text-gray-200 whitespace-normal break-words">
              Highest rating of <span className="shine-effect text-blue-300">1690</span> at Leetcode.
            </span>
          </li>
          <li className="text-2xl sm:text-3xl font-semibold text-white list-disc list-outside marker:text-blue-300">
            <span className="text-gray-200 whitespace-normal break-words">
              Highest rating of <span className="shine-effect text-blue-300">1618</span> at Codechef, placing myself under the top 8% among all contestants.
            </span>
          </li>
          <li className="text-2xl sm:text-3xl font-semibold text-white list-disc list-outside marker:text-blue-300">
            <span className="text-gray-200 whitespace-normal break-words">
              Secured <span className="shine-effect text-blue-300">Global Rank 80</span> at Codechef Starters 111.
            </span>
          </li>
          <li className="text-2xl sm:text-3xl font-semibold text-white list-disc list-outside marker:text-blue-300">
            <span className="text-gray-200 whitespace-normal break-words">
              Secured <span className="shine-effect text-blue-300">Global Rank 726</span> in Codeforces Round 950 out of 45,000 contestants.
            </span>
          </li>
          <li className="text-2xl sm:text-3xl font-semibold text-white list-disc list-outside marker:text-blue-300">
            <span className="text-gray-200 whitespace-normal break-words">
              Secured <span className="shine-effect text-blue-300">Global Rank 1118</span> in Codeforces Round 948 out of 29,000 contestants.
            </span>
          </li>
          <li className="text-2xl sm:text-3xl font-semibold text-white list-disc list-outside marker:text-blue-300">
            <span className="text-gray-200 whitespace-normal break-words">
              Solved more than <span className="shine-effect text-blue-300">1000+</span> Data Structures and Algorithms Problems across all Coding Websites.
            </span>
          </li>
        </ul>
      </div>
    </div>

        </div>
    );
};

export default Achievements;
