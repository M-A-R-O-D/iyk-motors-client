import React from 'react';

function BrandIcon({ imageUrl, brandName }) {
    return (
        <div className="relative group w-24 h-24">
            <img
                src={imageUrl}
                alt={brandName}
                className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                <span className="text-white text-sm">{brandName}</span>
            </div>
        </div>
    );
}

export default BrandIcon;
