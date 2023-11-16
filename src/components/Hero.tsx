import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  ArrowRightFromLine,
  Download,
  Github,
  Linkedin,
} from "lucide-react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="w-full sm:w-[36rem] mx-auto">
      <div className="flex w-full items-center justify-center gap-8">
        <div className="relative">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width="192"
            height="192"
            quality={100}
            priority={true}
            className="h-32 w-32 sm:h-48 sm:w-48 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
          />

          <span className="absolute right-0 bottom-[0.35rem] text-3xl sm:text-5xl">
            👋
          </span>
        </div>

        <div>
          <h1 className="text-5xl sm:text-7xl font-bold">
            ROB
            <br />
            HARDING
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold italic">
            <span className="hidden sm:inline-block">Fullstack</span> Web
            Developer
          </h2>
        </div>
      </div>
      <div className="flex justify-center gap-2 sm:gap-3 mt-8 w-[10rem] sm:w-[28rem] mx-auto">
        <Button
          className="flex flex-1 gap-2  items-center text-xs sm:text-base"
          size="sm"
        >
          Contact me here <ArrowRight className="w-4 h-4" />
        </Button>
        <Button
          className="flex gap-2 flex-1 items-center text-xs sm:text-base bg-white text-foreground hover:bg-gray-100 border-white border-opacity-40"
          size="sm"
        >
          Download CV <Download className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          className="bg-white text-foreground hover:bg-gray-100 border-white border-opacity-40"
        >
          <Linkedin className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          className="bg-white text-foreground hover:bg-gray-100 border-white border-opacity-40"
        >
          <Github className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
