import Testimonial from './Testimonial';
import Testimonial2 from './Testimonial2';
import Testimonial3 from './Testimonial3';


const TestimonialContainer = () => {
  return (
      <section className="bg-domino-gray p-4">
        <div className="text-center mt-4">
            <h3 className="text-3xl text-[hsl(280,100%,81%)]  font-bold lg:text-4xl xl:text-5xl">Testimonials</h3>
        </div>
        <div className="mt-64 w-80 mx-auto flex flex-col gap-60 items-center justify-center
        lg:flex-row lg:w-full lg:h-104 lg:gap-14 lg:mt-72">
                  <Testimonial/>
                  <Testimonial2/>
                  <Testimonial3/>
              </div>
      </section>
  );
}
export default TestimonialContainer;

/*
import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Testimonial from './Testimonial';
import Testimonial2 from './Testimonial2';
import Testimonial3 from './Testimonial3';

const TestimonialContainer = () => {
  const testimonialCarousel = useRef(null);
  const [embla, emblaApi] = useEmblaCarousel({
    containScroll: 'trimSnaps',
  });

  useEffect(() => {
    if (embla) {
      // EmblaCarousel API methods can be used here
    }
  }, [embla]);

  return (
    <section className="bg-domino-gray p-4">
      <div className="text-center mt-4">
        <h3 className="text-3xl text-bright-purple font-bold lg:text-4xl xl:text-5xl">Testimonials</h3>
      </div>
      <div className="mt-8 mx-auto max-w-screen-lg">
        <div ref={testimonialCarousel} className="embla">
          <Testimonial />
          <Testimonial2 />
          <Testimonial3 />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-bright-purple text-white px-4 py-2 rounded-md mr-2" onClick={() => emblaApi.scrollPrev()}>Previous</button>
        <button className="bg-bright-purple text-white px-4 py-2 rounded-md" onClick={() => emblaApi.scrollNext()}>Next</button>
      </div>
    </section>
  );
};

export default TestimonialContainer;
*/