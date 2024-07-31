import React from 'react'
import AnimatedSection from '../../../components/Animator'

function MissionSection() {
    return (
        <div className='flex flex-row '>
            <div className='p-10 flex flex-col bg-custom-white text-black justify-center items-start'>
                <AnimatedSection>
                    <h3 className="text-2xl font-semibold mb-2">Mission</h3>
                    <p className="text-lg">
                        Our mission is to provide our customers with high-quality vehicles and outstanding
                        customer service. We aim to make car buying a hassle-free and enjoyable experience.
                    </p>
                </AnimatedSection>
            </div>
            <div className="relative font-poppins bg-cover bg-center flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start p-8 md:p-16"
                style={{
                    backgroundImage: 'url(assets/images/car3.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '80vh',
                    width: '70%',
                }}>
            </div>
        </div>
    )
}

export default MissionSection