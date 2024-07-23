import React from 'react';
import Form from './Form';
import AnimatedSection from '../../../components/Animator';

function RentalSection() {
  return (
    <div className="rental-section h-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 p-6 md:p-10 bg-custom-white">
      <div className="flex-1 p-6 md:p-8">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 md:mb-6">
            RENT A <span className="text-custom-blue">RIDE</span>
          </h2>
          <p className="text-lg md:text-xl font-bold mb-4">
            Rent any car of your choice at an
            <span className='text-custom-blue'> affordable price</span> with
            <span className='text-custom-blue'> less interest</span> and
            <span className='text-custom-blue'> high insurance</span> coverage.
          </p>
          <p className="text-sm font-light text-custom-blue">Terms and conditions apply.</p>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="flex-1 bg-custom-white p-6 md:p-8 rounded-lg">
          <h3 className="text-lg md:text-xl font-bold mb-4">Make a reservation</h3>
          <Form />
        </div>
      </AnimatedSection>
    </div>
  );
}

export default RentalSection;
