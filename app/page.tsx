import AboutMe from "@/components/aboutme";
import Hero from "@/components/hero";
import { LampDemo } from "@/components/others/LampDemo";
import ThreeDCards from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto  text-white overflow-hidden">
      <Hero />
      <div className="w-full relative lg:-top-16 " id="work">
        <LampDemo />
        <div className="relative -top-44">
          <ThreeDCards />
        </div>
      </div>
      <div
        className=" flex justify-center relative z-50 ml-4 bg-black-100 h-full w-full mb-20"
        id="aboutMe"
      >
        <AboutMe />
      </div>
    </main>

  );
}
