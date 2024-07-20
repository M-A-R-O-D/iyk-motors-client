import React from 'react'

function CarsPage() {
    return (
        <>
            <section className='w-full h-[600px] '>

            </section>

            <section className='w-full flex flex-col justify-center p-4'>
                <div className="brands-text text-center">
                    <div className="top-text flex flex-row items-center justify-center">
                        <hr className='h-1 w-[66.5px] border-none bg-[#999] mr-[15px]' />
                        <p className='text-[#999] text-[35px]'>BRANDS</p>
                        <hr className='h-1 w-[66.5px] border-none bg-[#999] ml-[15px]' />
                    </div>
                </div>

                <div className='text-center'>
                    <p className='text-[black] text-[54px]'>DISCOVER BY <span className='text-[#1e7ed7]'>BRANDS</span></p>
                </div>

                <div className="brand-logos flex flex-row flex-wrap justify-evenly">
                    <div className="logo-1 border border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] items-center justify-center">
                        <img src="/assets/images/BMW.png" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                    <div className="logo-1 border border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/Honda.png" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                    <div className="logo-1 border border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/Porsche.jpg" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                    <div className="logo-1 border border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/Toyota.jpg" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                    <div className="logo-1 border border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/Mercedes.png" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>

                    <div className="logo-1 border border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                </div>

                <div className="brands-text text-center">
                    <div className="top-text flex flex-row items-center justify-center">
                        <hr className='h-1 w-[66.5px] border-none bg-[#999] mr-[15px]' />
                        <p className='text-[#999] text-[35px]'>STYLE</p>
                        <hr className='h-1 w-[66.5px] border-none bg-[#999] ml-[15px]' />
                    </div>
                </div>

                <div className='text-center'>
                    <p className='text-[black] text-[54px]'>DISCOVER BY <span className='text-[#1e7ed7]'>STYLE</span></p>
                </div>

                <div className="cars flex flex-row flex-wrap justify-evenly">
                    <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                    <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                    <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                    <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                    <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                    <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                    <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                    <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
                        <img src="/assets/images/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
                    </div>
                </div>

                <div className="brands-text text-center">
                    <div className="top-text flex flex-row items-center justify-center">
                        <hr className='h-1 w-[66.5px] border-none bg-[#999] mr-[15px]' />
                        <p className='text-[#999] text-[35px]'>CARS</p>
                        <hr className='h-1 w-[66.5px] border-none bg-[#999] ml-[15px]' />
                    </div>
                </div>

                <div className='text-center'>
                    <p className='text-[black] text-[54px]'>SEARCH FOR <span className='text-[#1e7ed7]'>CARS</span></p>
                </div>

            </section>

        </>
    )
}

export default CarsPage