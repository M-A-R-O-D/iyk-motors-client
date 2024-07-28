import React from 'react'

function TeamSection() {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'CEO',
            image: 'assets/images/profile1.jpg',
        },
        {
            name: 'Mike Johnson',
            role: 'Sales Manager',
            image: 'assets/images/profile3.jpg',
        },
        {
            name: 'Jane Smith',
            role: 'Service Manager',
            image: 'assets/images/profile2.jpg',
        },
    ];

    return (
        <section className="bg-white max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our <span className='text-custom-blue'>Team</span></h2>
            <div className="flex flex-wrap justify-center space-x-3">
                {teamMembers.map((member, index) => (
                    <div key={index} className="max-w-xs mx-4 mb-8">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-36 h-36 rounded-full mb-4"
                        />
                        <h3 className="text-xl text-center text-custom-blue font-semibold">{member.name}</h3>
                        <p className="text-black text-center">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection
