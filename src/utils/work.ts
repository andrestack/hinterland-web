export interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
  technologies: string[];
  features: string[];
  position?: string;
}

export const projects: Project[] = [
  {
    title: "Riviera Renovations",
    description:
      "A client looking for rebranding and a new website for their renovation business. I made full use of their gorgeous existing logo to create an appealing and modern website that rightfully represents the quality of their work",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/riviera.png`,
    link: "https://www.rivierarenovations.com.au/",
    technologies: ["Wix Studio"],
    features: ["Responsive design", "SEO Optimized", "Onbrand Design"],
    position: "center",
  },
  {
    title: "Suncoast Energy",
    description:
      "An established electrician business wanted a more modern take on their existing Worpress website. We created a bolder darker tone design that would enhance some of their work and give it the sense of high end and quality they where after.",
    image: `/images/suncoast.png`,
    link: "https://www.suncoastenergy.au/",
    technologies: ["Wix Studio"],
    features: ["Fully responsive", "Dynamic content", "Wix Studio CMS"],
    position: "center",
  },
  {
    title: "Alem",
    description:
      "This Berlin based agency helps businesses and solopreneurs navigate AI and its applications in their businesses. They wanted a simple but yet lively website and a blog that could transmit their core value: simplicity and clarity.",
    image: `/images/alem.png`,
    link: "https://www.alem.company/",
    technologies: ["Wix Studio"],
    features: ["FAQ", "Blog"],
    position: "center",
  },
  {
    title: "Aldeia Djembe Camp",
    description:
      "The client needed a simple but yet effective landing page for a dance and drum retreat in Portugal that would provide all the relevant information to the website visitors. For now the registration process is handled by contact form and mail communication. Client as commissioned a custom registration form that will contain all payment instructions. ",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/screenshot-adc.png`,
    link: "https://aldeia-djembe-camp.com/",
    technologies: ["HTML", "CSS", "hosted on Hostinger"],
    features: ["Responsive design", "SEO Optimized", "Low Cost"],
    position: "left",
  },

  {
    title: "True Fit Training",
    description:
      "The client needed a full redesing of their existing website. It now provides a branding and a user experience that better reflect Richard Salmon's offering, focusing on the benegits of training, providing a lot of knowledge through a blog. The client also engaged my SEO services which include on page and off page optimisation, basic keyword research and a SEO strategy outline.",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/Mockups.png`,
    link: "https://www.truefittraining.com.au/",
    technologies: ["Wix Studio", "Custom CSS", "hosted on Hostinger"],
    features: [
      "Responsive Design",
      "Fast Loading",
      "SEO Optimized",
      "Onbrand Design",
      "Blog",
      "Google Reviews",
    ],
    position: "center",
  },
  {
    title: "Custom Registration Form",
    description:
      "Developed a registration form for a dance and drum retreat in Portugal, called Aldeia Djembe Camp. Data is submitted to a database and then displayed in an admin dashboard.",
    image: `/images/adc-form.png`,
    link: "https://formulario.aldeia-djembe-camp.com/",
    technologies: ["Nextjs", "MongoDB", "React Hook Form", "Tailwind CSS"],
    features: ["Custom Development", "Full Stack", "Database Integration"],
  },

  {
    title: "Pomona & District Kindergarten",
    description:
      "As part of my volunteer work for the local community Kindy, I redesigned the Kindys website to provide a more modern and professional look. The website is the result of productive feedback and collaborations with the executive committee.",
    image:
      "https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/Mockups_kindy.png",
    link: "https://hinterland-web.github.io/pomona-kindy/",
    technologies: [
      "Nextjs",
      "Tailwind CSS",
      "Relume UI",
      "Deployed on Github Pages",
    ],
    features: [
      "Responsive Design",
      "On Brand Design",
      "Custom Components",
      "Custom Enrolment Modal",
    ],
    position: "center",
  },
  {
    title: "Buckley's Chance",
    description:
      "Website showcasing a local Pomona band, playing a mix of covers with a groovy celtic feel. The group only had flyers and a very outdated Facebook page, so I helped them by defining brand colors and also creating a logo. The website serves the simple purpose of presenting the band and providing contact details for any booking enquiries",
    image: `/images/bc-logo-no-bg.png`,
    link: "https://buckleyschance.net",
    technologies: ["HTML", "CSS", "hosted on Hostinger"],
    features: ["Responsive design", "SEO Optimized", "Low Cost"],
    position: "center",
  },
];
