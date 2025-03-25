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
        title :"What services does Hinterland Web offer?",
        answer:"We provide tailored digital solutions, including website design, web applications, hosting, local SEO, CRM setup, and business automation. We focus on helping small businesses and solo traders streamline their online presence and customer management."
    },
    {
        title:"I'm a small business owner or solo trader. Can you help with my website?",
        answer:"Yes! We specialize in websites for small businesses, tradespeople, and service providers. Whether you need a simple landing page, an online booking system, or a full-featured website, we make the process easy and effective."
    },
    {
        title:"How can a website help my small business compete with larger companies?",
        answer:"A well-optimized website helps you compete with larger companies by improving your local visibility, automating client interactions, and providing a professional online presence that builds trust and drives more leads."
    },
    {
        title:"Do you serve businesses outside of the Sunshine Coast?",
        answer:"While we are based on the Sunshine Coast, we work with businesses across Australia. Our personalized approach ensures that we tailor solutions for your specific industry and market needs, regardless of location."
    },
    {
        title:"What's your process for creating a website?",
        answer:"We start with a discovery call to understand your needs, followed by a detailed proposal. Once approved, we design and develop your site, incorporating your feedback before launching. We ensure a smooth process with minimal disruption to your business."
    },
    {
        title:"How long does it take to get my website up and running?",
        answer:"Timelines depend on the project size and complexity. A simple landing page can be completed in under a week, while more advanced projects with integrations or automation features may take a few weeks."
    },
    {
        title:"Do you offer ongoing support after my website is launched?",
        answer:"Yes, we provide ongoing support, including hosting, updates, and performance monitoring. Our maintenance plans start at $50\/month, with the first 3-6 months free, depending on your package."
    },
    {
        title:"Can you help with CRM integration for my business?",
        answer:"Yes, we integrate CRMs like Go High Level to help you manage customer interactions, automate follow-ups, and improve your sales pipeline. This ensures no lead is lost and that your business runs efficiently."
    },
    {
        title:"How does automation benefit my business?",
        answer:"Automation streamlines repetitive tasks like appointment scheduling, email follow-ups, and quote generation. It reduces human error, saves time, and ensures better customer engagement without requiring manual effort."
    },
    {
        title:"What industries do you specialize in?",
        answer:"We specialize in trades, real estate, salons, and service-based businesses but work with any industry that requires practical digital solutions to improve workflow and customer acquisition."
    },
    {
        title:"Can you create custom software solutions for my business?",
        answer:"Yes, we build custom SaaS tools like quote calculators, customer portals, and lead tracking systems. These solutions help businesses automate pricing, data collection, and customer interactions."
    },
    {
        title:"Do you offer SEO services?",
        answer:"Yes, we offer both DIY-guided SEO and fully managed SEO. Whether you want insights and tools to improve your rankings yourself or prefer a hands-off approach where we handle everything, we have solutions to fit your needs."
    },
    {
        title:"What's the investment for your services?",
        answer:"Pricing starts at $1,500 for basic website design and scales up based on complexity. Full-service packages, including CRM and automation, range from $3,000 to $7,500+. We also offer payment plans for qualifying businesses."
    },
    {
        title:"Can you set up an AI chatbot for my business?",
        answer:"Yes, we can integrate AI chatbots that handle inquiries, automate bookings, and qualify leads. These chatbots work 24\/7, freeing up your time and ensuring you never miss a potential customer."
    },
    {
        title:"What is the difference between guided and fully managed SEO services?",
        answer:"Guided SEO provides tools and insights so you can improve your rankings yourself, while fully managed SEO means we handle everything\u2014from keyword research to content creation and site optimization."
    },
    {
        title:"Can I scale my website as my business grows?",
        answer:"Yes! Our websites are built to grow with your business. Whether you want to add e-commerce, a customer portal, or a subscription model, we can expand your site\u2019s capabilities as needed."
    },
    {
        title:"Do you offer training for the tools you provide?",
        answer:"Yes, we provide step-by-step training through video tutorials and a structured onboarding process to ensure you and your team can confidently use your website and digital tools."
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
