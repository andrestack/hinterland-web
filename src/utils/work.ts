export interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
  technologies: string[];
  features: string[];
  position: string;
}

const projects: Project[] = [
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
    title: "Wayfaring",
    description: "Recruitment agency based in Melbourne that wanted a more modern and professional design update for their website.",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/screenshot-wayfaring.png`,
    link: "https://wayfaring.hinterlandweb-folio.in/",
    technologies: ["HTML", "CSS", "hosted on Hostinger"],
    features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Custom Logo Design"],
    position: "center",
  },
  {
    title: "Garden Gnome",
    description: "A simple 3 page Website for a local landscaping business. The website now provides all the necessary information for clients to make an informed decision when booking gardening services.",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/garnden-gnome-hero.png`,
    link: "https://gardengnome.hinterlandweb-folio.in/",
    technologies: ["HTML", "CSS", "hosted on Hostinger"],
    features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Onbrand Design"],
  },
  {
    title: "True Fit Training",
    description: "The client needed a full redesing of their existing website. It now provides a branding and a user experience that better reflect Richard Salmon's offering, focusing on the benegits of training, providing a lot of knowledge through a blog. The client also engaged my SEO services which include on page and off page optimisation, basic keyword research and a SEO strategy outline.",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/Mockups.png`,
    link: "https://www.truefittraining.com.au/",
    technologies: ["Wix Studio", "Custom CSS", "hosted on Hostinger"],
    features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Onbrand Design", "Blog", "Google Reviews"],
    position:"center",
  },
  // {
  //   title: "Pohsso Wellness",
  //   description: "Soon launching a website for a masseuse friend in Portugal",
  //   image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/wellness-screenshot.png`,
  //   link: "https://wellness.hinterlandweb-folio.in/",
  //   technologies: ["Astro", "Tailwind CSS"],
  //   features: ["Responsive Design", "Fast Loading", "SEO Optimized"],
  // },
  {
    title: "Automation Agency",
    description: "This is a work in progress for my agency. It is a full stack template for any SaaS or product website. It showcases some of the features we can integrate on a fully custom website.",
    image: "https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/saas-website.png",
    link: "https://saas-template-puce.vercel.app/",
    technologies: ["Nextjs", "Tailwind CSS", "Magic UI", "Deployed on Vercel"],
    features: ["Responsive Design", "Micro Interactions", "Animations", "User Authentication", "Blog"],
    position: "center",
  },
  {
    title: "Pomona & District Kindergarten",
    description: "As part of my volunteer work for the local community Kindy, I redesigned the Kindys website to provide a more modern and professional look. The website is the result of productive feedback and collaborations with the executive committee.",
    image: "https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/Mockups_kindy.png",
    link: "https://hinterland-web.github.io/pomona-kindy/",
    technologies: ["Nextjs", "Tailwind CSS", "Relume UI", "Deployed on Github Pages"],
    features: ["Responsive Design", "On Brand Design", "Custom Components", "Custom Enrolment Modal"],
    position: "center",
  },
 
  {
    title: "Buckley's Chance",
    description: "Website showcasing a local Pomona band, playing a mix of covers with a groovy celtic feel. The group only had flyers and a very outdated Facebook page, so I helped them by defining brand colors and also creating a logo. The website serves the simple purpose of presenting the band and providing contact details for any booking enquiries",
    image: `/images/bc-logo-no-bg.png`,
    link: "https://buckleyschance.net",
    technologies: ["HTML", "CSS", "hosted on Hostinger"],
    features: ["Responsive design", "SEO Optimized", "Low Cost"],
    position: "center",
  },
  {
    title: "Bear Cave Barber",
    description: "After buying the business from it previous owner, the client went through a complete rebranding of the business. My task was to create a simple but yet effective landing page, that provides all the relevant information about the barber shop, including products available and a link to Google Reviews.",
    image: `https://pub-ed0f4b8b153c4c809b08926b1d61a25e.r2.dev/bearcavebarber-website-screenshot.png`,
    link: "https://bearcavebarber.com.au",
    technologies: ["HTML", "CSS", "hosted on Hostinger"],
    features: ["Responsive design", "SEO Optimized", "Low Cost"],
  },

  ,
];

export { projects };
