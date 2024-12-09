"use client";

import { motion } from "framer-motion";
import IconCloud from "./ui/skills";

const Skills = () => {
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
                Skills
            </motion.div>


            <div className="flex flex-col items-center justify-center space-y-8 py-12 px-4">
                <div className="w-full max-w-4xl">
                    <div className="text-2xl sm:text-3xl font-semibold text-white mt-5">
                        <span className="shine-effect text-blue-300">Languages</span>{": "}
                        <span className="text-gray-200 whitespace-normal break-words">C++, Javascript, Typescript, Golang, Java</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-semibold text-white mt-5">
                        <span className="shine-effect text-blue-300">Framework/Libraries</span>{": "}
                        <span className="text-gray-200 whitespace-normal break-words">ReactJS, NextJS, NodeJS, ExpressJS, Tailwind CSS</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-semibold text-white mt-5">
                        <span className="shine-effect text-blue-300">Databases/ORM&apos;s</span>{": "}
                        <span className="text-gray-200 whitespace-normal break-words">PostgreSQL, MongoDB, MySQL, Drizzle, Prisma, Mongoose</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-semibold text-white mt-5">
                        <span className="shine-effect text-blue-300">Others</span>{": "}
                        <span className="text-gray-200 whitespace-normal break-words">Zustand, Redux, Github, Vercel, Supabase</span>
                    </div>
                </div>

                <div className="relative z-30 w-full h-full top mb-32  md:mb-44">
                    <IconCloud
                        iconSlugs={[
                            "typescript", "javascript", "java", "go", "expo", "react", "html5", "css3",
                            "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws", "postgresql",
                            "nginx", "drizzle", "vercel", "docker", "git", "github", "visualstudiocode",
                            "mongodb", "mongoose", "mysql", "shell", "bootstrap", "c", "cplusplus",
                            "linuxmint", "npm", "redux", "recoil", "tailwindcss", "nodemon", "jwt",
                            "jsonwebtokens", "hono", "turborepo", "vite", "postman"
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
