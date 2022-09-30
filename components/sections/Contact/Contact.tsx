import { FC } from "react";
import { SectionHeading, Paragraph, Accent } from "../../styled-components";
import { Email } from "./Email";

const Contact: FC = () => {
  return (
    <section id="contact" className="pt-24 mt-32 w-80 md:w-96 mx-auto h-screen">
      <SectionHeading>Contac me</SectionHeading>
      <Paragraph>
        I&rsquo;m currently <Accent> looking </Accent> for
        <Accent> new opportunities </Accent>, my <Accent>inbox</Accent> is
        always open. Whether you have a <Accent>question</Accent> or just want
        to say hi, I&rsquo;ll try my best to get back to you!
      </Paragraph>
      <Email />
    </section>
  );
};

export default Contact;
