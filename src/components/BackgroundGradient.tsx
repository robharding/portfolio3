import { FC } from "react";

interface BackdropColorsProps {}

const BackdropColors: FC<BackdropColorsProps> = ({}) => {
  return (
    <div>
      <div className="relative isolate -z-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden -top-[8.5rem] sm:-top-80 blur-2xl sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#9089fc] opacity-40 left-[calc(50%)] w-[36.125rem] sm:w-[72.1875rem] "
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden top-[15rem] sm:top-[20rem] blur-2xl sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative aspect-[1155/678] -translate-x-1/2 rotate-[210deg] bg-gradient-to-tr from-[#f97316] to-[#9089fc] opacity-40 w-[36.125rem] sm:w-[72.1875rem] "
          />
        </div>
      </div>
    </div>
  );
};

export default BackdropColors;
