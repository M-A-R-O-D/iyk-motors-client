import React, { useEffect } from 'react';
import Form from './Form';
import AnimatedSection from '../../../components/Animator';
import { useScroll } from '../../../context/ScrollContext';

function RentalSection() {
  const { setRef } = useScroll();

  useEffect(() => {
    const element = document.getElementById('rentals-section');
    setRef('rentals', element);
  }, [setRef]);

  return (
    <div id="rentals-section" className="rental-section font-poppins h-auto flex flex-col md:h-110 md:flex-row items-center md:space-y-0 md:space-x-10 p-6 md:p-10 bg-custom-white">
      <div className="flex-1 p-6 md:p-8 transform md:-translate-y-10 lg:-translate-y-24">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6 text-center md:text-left">
            RENT A <span className="text-custom-blue">RIDE</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
            Rent any car of your choice at an
            <span className="text-custom-blue"> affordable price</span> with
            <span className="text-custom-blue"> less interest</span> and
            <span className="text-custom-blue"> high insurance</span> coverage.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-normal text-custom-blue text-center md:text-left">
            Terms and conditions apply.
          </p>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="flex-1 font-poppins bg-custom-white p-3 md:p-8 rounded-lg">
          <h3 className="text-sm sm:text-xl md:text-1xl font-bold mb-4 text-center md:text-left">
            Fill out the form to book.
          </h3>
          <Form />
        </div>
      </AnimatedSection>
    </div>
  );
}

export default RentalSection;
