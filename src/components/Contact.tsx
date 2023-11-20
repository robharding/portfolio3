import { FC } from "react";
import SectionHeading from "./SectionHeading";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <section id="contact" className="min-h-[500px] w-[42rem] text-center">
      <SectionHeading className="mb-2">Contact Me</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:robjharding99@gmail.com">
          robjharding99@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="flex flex-col gap-4 mt-8">
        <Input placeholder="Your email" className="rounded-[0.5rem]" />
        <Textarea
          placeholder="Your message"
          className="rounded-[0.5rem]"
          rows={8}
        />
        <Button className="flex flex-row gap-2 w-fit">
          Send
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </section>
  );
};

export default Contact;
