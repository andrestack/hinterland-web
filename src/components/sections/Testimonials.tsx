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

export type Testimonial17Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial17 = (props: Testimonial17Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial17Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-0 md:py-24 lg:py-18 text-heading-1 dark:text-tertiary">
      <div className="container">
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
                <blockquote className={`before:content-['"'] after:content-['"'] md:text-md`}>
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
                  <p>
                    {testimonial.companyName}
                  </p>
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
    {
      testimonial:
        "Bester Webdesigner, den ich finden konnte. Klarer, sehr freundlicher und professioneller Kontakt, super Service, Design genau, wie ich es wollte :))) Danke!",
      avatar: {
        src: "https://pub-72408206c0cf4600bc497ef0bdbc7c1a.r2.dev/testimonials2.png",
        alt: "Testimonial avatar 2",
      },
      name: "Nathan Berg",
      position: "",
      companyName: "Beat-Etage, Berlin",
      numberOfStars: 5,
    },
   
  ],
};

Testimonial17.displayName = "Testimonial17";
