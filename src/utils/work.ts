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
    description: "A landing page for a dance and drum retreat in Portugal.",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/screenshot-adc.png`,
    link: "https://aldeia-djembe-camp.com/",
    technologies: ["Astro", "Tailwind CSS"],
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"],
    position: "center"
  },
  {
    title: "Wayfaring",
    description: "Recruitment agency based in Melbourne",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/screenshot-wayfaring.png`,
    link: "https://wayfaring.hinterlandweb-folio.in/",
    technologies: ["Astro", "Tailwind CSS"],
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
    position: "left"
  },
  {
    title: "Garden Gnome",
    description: "A simple 3 page Website for a local landscaping business.",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/garnden-gnome-hero.png`,
    link: "https://gardengnome.hinterlandweb-folio.in/",
    technologies: ["Astro", "Tailwind CSS"],
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
  },
  {
    title: "Zimmermann Roofing",
    description: "A website template I created for a local roofing business.",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/roofing.png`,
    link: "https://roofing.hinterlandweb-folio.in/",
    technologies: ["Astro", "Tailwind CSS"],
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
  },
  {
    title: "Pohsso Wellness",
    description: "Soon launching a website for a masseuse friend in Portugal",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/wellness-screenshot.png`,
    link: "https://wellness.hinterlandweb-folio.in/",
    technologies: ["Astro", "Tailwind CSS"],
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
  },
  {
    title: "Automation Agency",
    description: "An alternative template I started developing for my agency",
    image: `https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/marketing-header.png`,
    link: "https://marketing.hinterlandweb-folio.in/",
    technologies: ["Astro", "Tailwind CSS"],
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
  },
  // {
  //   title: "Pomona & District Kindergarten",
  //   description: "Website redesign for local Kindy in Pomona",
  //   image: `https://pub-31971714d5324882b00b0345130560dd.r2.dev/C%26A_Logo_HI-RES.jpg`,
  //   url: "https://hinterland-web.github.io/pomona-kindy/",
  // },
  {
    title: "Buckley's Chance",
    description: "Website showcasing a local Pomona music group",
    image: `/images/bc-logo-no-bg.png`,
    link: "https://buckleyschance.net",
    technologies: ["Astro", "Tailwind CSS"],
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
  },
  {
    title: "Bear Cave Barber",
    description: "Website design for a Barber Shop in Cooroy",
    image: `https://pub-ed0f4b8b153c4c809b08926b1d61a25e.r2.dev/bearcavebarber-website-screenshot.png`,
    link: "https://bearcavebarber.com.au",
    technologies: ["Astro", "Tailwind CSS"],
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
  },

  ,
];

export { projects };
