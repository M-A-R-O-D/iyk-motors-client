import React from 'react';
import Form from './Form';
import AnimatedSection from '../../../components/Animator';

function RentalSection() {
  return (
    <div className="rental-section h-110 flex items-center space-x-10 p-10 bg-custom-white">
      <div className="flex-1 p-8">
        <AnimatedSection>
          <h2 className="text-6xl font-bold text-black mb-6">
            RENT A <span className="text-custom-blue">RIDE</span>
          </h2>
          <p className="text-xl font-bold mb-4">
            Rent any car of your choice at an
            <span className='text-custom-blue'> affordable price</span> with
            <span className='text-custom-blue'> less interest</span> and
            <span className='text-custom-blue'> high insurance</span> coverage.
          </p>
          <p className="text-sm font-light text-custom-blue">Terms and conditions apply.</p>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="flex-1 bg-custom-white p-8 rounded-lg">
          <h3 className="text-1xl font-bold mb-4">Make a reservation</h3>
          <Form />
        </div>
      </AnimatedSection>
    </div>
  );
}

export default RentalSection;
