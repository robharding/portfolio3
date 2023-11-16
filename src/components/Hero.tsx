import Image from "next/image";
import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section>
      <div className="flex w-full sm:w-[36rem] mx-auto items-center justify-center gap-8">
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
    </section>
  );
};

export default Hero;
