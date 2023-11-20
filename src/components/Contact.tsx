import { FC } from "react";
import SectionHeading from "./SectionHeading";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <section id="contact" className="bg-white w-full">
      <SectionHeading>Contact Me</SectionHeading>
    </section>
  );
};

export default Contact;
