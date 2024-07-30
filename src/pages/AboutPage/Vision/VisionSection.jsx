import React from 'react'
import AnimatedSection from '../../../components/Animator'

function VisionSection() {
    return (
        <div className='bg-black text-white flex flex-row '>
            <div className="relative font-poppins bg-cover bg-center flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start p-8 md:p-16"
                style={{
                    backgroundImage: 'url(assets/images/about3.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '80vh',
                    width: '90%',
                }}>
            </div>

            <div className='p-10 flex flex-col justify-center items-start'>
                <AnimatedSection>
                    <h3 className="text-2xl font-semibold mb-2">Vision</h3>
                    <p className="text-lg">
                        Our vision is to be the most trusted and respected car dealership in the region,
                        known for our dedication to customer satisfaction and our commitment to innovation
                        in the automotive industry.
                    </p>
                </AnimatedSection>
            </div>
        </div>
    )
}

export default VisionSection