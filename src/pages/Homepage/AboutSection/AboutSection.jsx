import React from 'react';
import Button from '../../../components/Button';

function AboutSection() {
    return (
        <div className="bg-cover bg-center flex flex-col justify-end items-end p-16 text-white font-poppins"
            style={{ backgroundImage: `url('/assets/images/Rectangle27.png')` }}>
            <div className='h-100 mt-16 pt-5 pr-10'>
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold mb-4">
                        THE BEST IN THE <span className="text-custom-blue">AUTOMOBILE</span> INDUSTRY
                    </h1>
                    <p className="mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit aliquam facilis iure molestiae doloribus cumque laborum incidunt,
                        officia consectetur quasi alias atque suscipit, eius, nesciunt repellat corrupti!
                        Reprehenderit impedit debitis cum commodi laborum voluptates.
                    </p>
                    <Button children={"Read more"} className="border border-white text-white bg-transparent hover:bg-white hover:text-black px-4 py-2 rounded transition duration-300" />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
