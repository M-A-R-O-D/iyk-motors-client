
import './App.css'

function App() {


  return (
    <>
      <nav className='Navbar w-full bg-white h-140px flex flex-row items-center justify-between px-2.5 py-2.5 fixed'>
        <div className='logo'>
          <span className='font-semibold text-[32px] mr-1.5'>IY-KAY</span>
          <span className='font-semibold text-[32px] text-[#1e7ed7]'>MOTORS</span>
        </div>

        <div>
          <ul className='justify-between'>
            <li className='mr-9'>
              <a href="" className='font-semibold text-[27px] mr-9  decoration-2 decoration-[#1e7ed7] hover:underline' style={{ textUnderlineOffset: '15px' }}>HOME</a>
              <a href="" className='font-semibold text-[27px] mr-9  decoration-2 decoration-[#1e7ed7] hover:underline' style={{ textUnderlineOffset: '15px' }}>CARS</a>
              <a href="" className='font-semibold text-[27px] mr-9  decoration-2 decoration-[#1e7ed7] hover:underline' style={{ textUnderlineOffset: '15px' }}>ABOUT US</a>
              <a href="" className='font-semibold text-[27px] mr-9  decoration-2 decoration-[#1e7ed7] hover:underline' style={{ textUnderlineOffset: '15px' }}>OUR BLOG</a>
            </li>
          </ul>
        </div>
      </nav>

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
            <img src="/assets/BMW.png" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/Honda.png" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/Porsche.jpg" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/Toyota.jpg" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/Mercedes.png" alt="BMW logo" className="max-w-full max-h-full" />
          </div>

          <div className="logo-1 border border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
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
            <img src="/assets/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] ">
            <img src="/assets/chevrolet.jpg" alt="BMW logo" className="max-w-full max-h-full" />
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

export default App
