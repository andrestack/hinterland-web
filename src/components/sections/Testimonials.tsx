import { BiSolidStar } from "react-icons/bi";
import Subtitle from "components/shared/Subtitle.astro";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  testimonial: string;
  avatar: ImageProps;
  name: string;
  position?: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial17Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial17 = (props: Testimonial17Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial17Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-0 md:py-24 lg:py-18 text-heading-1 dark:text-tertiary">
      <div className="space-y-10 md:space-y-12">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          {/* <h2 className="mb-5 text-5xl font-bold md:mb-6 ">{heading}</h2> */}
          <h2 className="md:text-md text-5xl font-black">{description}</h2>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-start justify-between border border-secondary dark:border-tertiary p-6 md:p-8"
            >
              <div className="mb-5 md:mb-6">
                <div className="mb-6 flex">
                  {Array(testimonial.numberOfStars)
                    .fill(null)
                    .map((_, starIndex) => (
                      <BiSolidStar key={starIndex} className="mr-1 size-6" />
                    ))}
                </div>
                <blockquote
                  className={`before:content-['"'] after:content-['"'] md:text-md`}
                >
                  {testimonial.testimonial}
                </blockquote>
              </div>
              <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                <img
                  src={testimonial.avatar.src}
                  alt={testimonial.avatar.alt}
                  className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>{testimonial.companyName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonial17Defaults: Testimonial17Props = {
  heading: "Customer testimonials",
  description: "What clients are saying:",
  testimonials: [
    {
      testimonial:
        "Andre is fantastic to work with. Highly responsive in his communication and enthusiastic! He draws on his technical coding experience but also can design and has an eye for detail. Andre built a web-app for our business, he did so in good timing, great precision and the finished product was delivered above and beyond what we originally had envisioned!",
      avatar: {
        src: "/images/crafted-logo-round.png",
        alt: "Testimonial avatar 2",
      },
      name: "Kevin P.",
      position: "",
      companyName: "Crafted Finishes, Sunshine Coast",
      numberOfStars: 5,
    },
    {
      testimonial:
        "Working with André at Hinterland Web was an awesome experience. Communication was clear, the process was smooth, and he delivered our clients website quickly and exactly how we wanted it. The site looks great and functions perfectly, definitely helps us present a more professional image online. Would highly recommend André to anyone looking for a reliable and talented web developer!",
      avatar: {
        src: "/images/favicon-clark-imagery.jpg",
        alt: "Testimonial avatar 2",
      },
      name: "Ryan C.",
      position: "",
      companyName: "Clark Imagery, Sunshine Coast",
      numberOfStars: 5,
    },
    {
      testimonial:
        "Thanks for sorting out some SEO issues so promptly and efficiently, much appreciated and look forward to working with you again.",
      avatar: {
        src: "/images/Vendee-Favicon-Icon.png",
        alt: "Testimonial avatar 2",
      },
      name: "Amanda C.",
      position: "",
      companyName: "Vendee Property Buyers, Sunshine Coast",
      numberOfStars: 5,
    },
    {
      testimonial:
        "Andre was terrific throughout the whole process of fixing my website and personalising it in the way I asked. Excellent communication, speedy outcome and talked me through any questions I had. Highly recommend Andre for any website work.",
      avatar: {
        src: "/images/favicon-anya.webp",
        alt: "Testimonial avatar 2",
      },
      name: "Sherrie D.",
      position: "",
      companyName: "Anya Skin & Beauty, Sunshine Coast",
      numberOfStars: 5,
    },
    {
      testimonial:
        "Our band Buckley's Chance and myself had a great experience working with Andre of Hinterland Web. He was able to transform a couple of loose flyers and sheets into a website we love. Thank you!",
      avatar: {
        src: "/images/bc-logo_qld.png",
        alt: "RP",
      },
      name: "Roger Peters",
      position: "",
      companyName: "Buckley's Chance, Pomona",
      numberOfStars: 5,
    },
    {
      testimonial:
        "So happy we found Andre, he was so helpful, gave clear, accurate instruction in areas I have very little knowledge. Andre has a very professional personable manner, I felt confident I could make the necessary adjustments to grow my business. I would definately recommend his services.",
      avatar: {
        src: "https://avatar.iran.liara.run/username?username=Lisa+Batt",
        alt: "LB",
      },
      name: "Lisa B.",
      position: "",
      companyName: "",
      numberOfStars: 5,
    },
    
    {
      testimonial:
        "André took the time to understand my vision and goals for my website, offering valuable insights and suggestions that enhanced my original ideas. His expertise in marketing strategies was evident, as he crafted a site that not only looks stunning but also effectively communicates my brand message and engages my target audience.",
      avatar: {
        src: "https://pub-ed0f4b8b153c4c809b08926b1d61a25e.r2.dev/bearcavebarber-website-screenshot.png",
        alt: "Testimonial avatar 2",
      },
      name: "Paris Devine",
      position: "",
      companyName: "Bear Cave Barber, Cooroy",
      numberOfStars: 5,
    },
    {
      testimonial:
        "Andre recently helped me finish off my new website, and making it mobil friendly. I can't speak highly enough about his work. Great communicator, really, realllllyyyy knows his stuff, and tweaked the site to be so much more user friendly than I thought possible.",
      avatar: {
        src: "/images/ckc_logo_nobg.png",
        alt: "Caloundra Kitchens and Carpentry",
      },
      name: "Liam Green",
      position: "",
      companyName: "Caloundra Kitchens and Carpentry",
      numberOfStars: 5,
    },
    {
      testimonial:
        "André at Hinterland Web really understood what we were looking for. Our new website does a great job transmitting what our event is all about!",
      avatar: {
        src: "https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/testimonials1.png",
        alt: "Testimonial avatar 1",
      },
      name: "André Soares",
      position: "",
      companyName: "ADC, Portugal",
      numberOfStars: 5,
    },
  ],
};

Testimonial17.displayName = "Testimonial17";
