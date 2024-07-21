import React from 'react'
import BrandIcon from '../../../components/BrandIcon';

const brandMap = {
    'BMW': 'assets/images/BMW.png',
    'Honda': 'assets/images/Honda.png',
    'Porsche': 'assets/images/Porsche.jpg',
    'Toyota': 'assets/images/Toyota.jpg',
    'Mercedes-Benz': 'assets/images/Benz1.png',
    'Chevrolete': 'assets/images/Chevrolet2.png'
};

function BrandSection() {
    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">
                FEATURED <span className='text-custom-blue'>BRANDS</span>
            </h1>
            <div className="flex flex-wrap justify-center space-x-16">
                {Object.entries(brandMap).map(([brandName, imageUrl]) => (
                    <BrandIcon key={brandName} imageUrl={imageUrl} brandName={brandName} />
                ))}
            </div>
        </div>
    )
}

export default BrandSection