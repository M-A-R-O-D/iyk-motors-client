import React from 'react';

function Header() {
    return (
        <header className="bg-transparent py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo  */}
                <div className='logo'>
                    <span className='font-semibold text-[32px] mr-1.5'>IY-KAY</span>
                    <span className='font-semibold text-[32px] text-[#1e7ed7]'>MOTORS</span>
                </div>

                {/* Nav bar */}
                <div className='navbar'>
                    <ul className='justify-between'>
                        <li className='mr-9'>
                            <a href="" className='font-semibold text-[27px] mr-9  decoration-2 decoration-[#1e7ed7] hover:underline' style={{ textUnderlineOffset: '15px' }}>HOME</a>
                            <a href="" className='font-semibold text-[27px] mr-9  decoration-2 decoration-[#1e7ed7] hover:underline' style={{ textUnderlineOffset: '15px' }}>CARS</a>
                            <a href="" className='font-semibold text-[27px] mr-9  decoration-2 decoration-[#1e7ed7] hover:underline' style={{ textUnderlineOffset: '15px' }}>ABOUT</a>
                            <a href="" className='font-semibold text-[27px] mr-9  decoration-2 decoration-[#1e7ed7] hover:underline' style={{ textUnderlineOffset: '15px' }}>CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
