import {
  Button,
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@relume_io/relume-ui";

import type { ButtonProps } from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";
import BtnLink from "../shared/BtnLink.astro";
import { useState } from "react";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq4Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Faq4 = (props: Faq4Props) => {
  const {
    heading,
    description,
    questions,
    footerHeading,
    footerDescription,
    button,
  } = {
    ...Faq4Defaults,
    ...props,
  } as Props;

  return (
    <section className="px-[5%] text-heading-1 dark:text-tertiary py-16 md:py-24 lg:py-28 mt-24 z-[1000]">
      <div className="container mx-auto max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">
            {heading}
          </h1>
          <p className="md:text-md text-xl">{description}</p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-secondary dark:border-tertiary px-5 md:px-6"
            >
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 p-1 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md text-lg text-left [&[data-state=open]>svg]:rotate-45"
              >
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 transition-all duration-300 ease-in-out overflow-hidden">
                <div className="accordion-answer">{question.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">
            {footerHeading}
          </h2>
          <p className="md:text-md text-xl">{footerDescription}</p>
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/booking-type-1"
            target="_blank"
          >
            <div className="mt-6 md:mt-8">
              <Button {...button}>{button.title}</Button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export const Faq4Defaults: Faq4Props = {
  heading: "FAQs",
  description:
    "Here you can find answers to some of our most frequently asked questions. Hopefully it will help you better understand how our business works! If not feel free to chat with our AI assistant below.",
  questions: [
    {
      title: "What services does Hinterland Web offer?",
      answer:
        "We offer a comprehensive range of web services including website design, web app development, hosting, SEO optimization, business automation, and chatbot integration. Our goal is to be your local expert that provides a one-stop solution for all your digital needs.",
    },
    {
      title:
        "I'm a small business owner/solo trader. Can you help with my website?",
      answer:
        "Absolutely! We specialize in creating websites for small businesses and solo traders like hairdressers, tradespeople, and coffee shop owners. We understand the unique needs of local businesses and tailor our services to help you establish a strong online presence.",
    },
    {
      title:
        "How can a website help my small business compete with larger companies?",
      answer:
        "A well-designed website levels the playing field, allowing you to showcase your products or services professionally. With our SEO services, you can improve your visibility in local searches. Plus, features like automation and chatbots can help you provide 24/7 customer service, matching the capabilities of larger businesses.",
    },
    {
      title: "Do you serve businesses outside of the Sunshine Coast?",
      answer:
        "While we primarily serve the Sunshine Coast area, we're open to discussing projects from other locations. Our local focus allows us to provide personalized service and understand the specific needs of businesses in our community.",
    },
    {
      title: "What's your process for creating a website?",
      answer:
        "Our process is straightforward and client-focused. It begins with a Discovery Call to understand your needs and filling out a questionnaire together, followed by sending you a detailed proposal. Once payment is arranged, we create a project draft. We then schedule a feedback call for any necessary changes before launching your site.",
    },
    {
      title: "How long does it take to get my website up and running?",
      answer:
        "It will always depend on the size of your project, if you have any design files already, your cooperation and your timeline. If it is just a simple landing page with relevant call-to-action, it can be done within a week.",
    },
    {
      title: "Do you offer ongoing support after my website is launched?",
      answer:
        "Yes, we offer ongoing support and maintenance services starting at $50 per month. But first 3 to 6 months are free. This includes website hosting, content update, and regular checks to ensure your site continues to perform optimally.",
    },
    {
      title: "Can you help with CRM integration for my business?",
      answer:
        "Yes, we specialize in CRM integration using platforms like Go High Level. This includes automating customer follow-ups, managing leads, and streamlining your sales processes to save you time and increase efficiency.",
    },
    {
      title: "How does automation benefit my business?",
      answer:
        "Automation allows you to save time by reducing manual tasks like booking confirmations, follow-ups, and lead nurturing. It ensures no leads slip through the cracks, improves customer experience, and allows you to focus on growing your business.",
    },
    {
      title: "What industries do you specialize in?",
      answer:
        "We primarily work with tradespeople, real estate professionals, and other service-based businesses. However, we are open to projects from various industries that need tailored solutions.",
    },
    {
      title: "Can you create custom software solutions for my business?",
      answer:
        "Yes, we offer bespoke SaaS solutions, such as quote calculators, project management tools, and client portals. These are tailored to your specific needs and integrate seamlessly with your existing workflows.",
    },
    {
      title: "Do you offer SEO services?",
      answer:
        "Yes, we provide both guided and fully managed SEO services. Whether you need AI-powered tools to guide your strategy or a hands-off solution, we ensure your business ranks higher in local searches and attracts more traffic.",
    },
    {
      title: "What's the investment for your services?",
      answer:
        "Our services start at $1,500 for basic website design and go up to $7,500+ for comprehensive packages that include CRM integration, SaaS solutions, and advanced automation workflows.",
    },
    {
      title: "Can you set up an AI chatbot for my business?",
      answer:
        "Yes, we can integrate AI chatbots to handle customer queries, booking requests, and lead qualification. These bots provide 24/7 support and integrate directly with your CRM for seamless communication.",
    },
    {
      title:
        "What is the difference between guided and fully managed SEO services?",
      answer:
        "With guided SEO, we provide tools and insights to help you improve your rankings yourself. Fully managed SEO is hands-off, where we handle everything from keyword research to content creation and optimization.",
    },
    {
      title: "Can I scale my website as my business grows?",
      answer:
        "Absolutely! All our websites are built to scale. Whether you need additional features like a customer portal, SaaS tool, or e-commerce functionality, we can expand your site as your business grows.",
    },
    {
      title: "Do you offer training for the tools you provide?",
      answer:
        "Yes, we offer personalized training via Loom recordings and a 1-month onboarding plan to ensure you and your team are confident using your new tools.",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription:
    "Let's figure out the answers together! Or chat with our AI assistant right there 👉",
  button: {
    title: "Get in touch",
    variant: "primary",
    className:
      "lg:text-2xl sm:text-xl shadow-lg shadow-box-shadow px-6 py-3 rounded-full bg-primary text-white hover:bg-secondary",
  },
};

Faq4.displayName = "Faq4";
