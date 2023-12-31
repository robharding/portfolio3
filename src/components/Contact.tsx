"use client";

import { FC } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <motion.section
      id="contact"
      className="w-[min(100%,38rem)] text-center mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
    >
      <SectionHeading className="mb-2">Contact Me</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:robjharding99@gmail.com">
          robjharding99@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="flex flex-col gap-4 mt-8">
        <Input
          placeholder="Your email"
          type="email"
          required
          maxLength={500}
          className="rounded-[0.5rem]"
        />
        <Textarea
          placeholder="Your message"
          className="rounded-[0.5rem]"
          maxLength={500}
          rows={8}
        />
        <Button className="flex flex-row gap-2 w-fit">
          Send
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </motion.section>
  );
};

export default Contact;
