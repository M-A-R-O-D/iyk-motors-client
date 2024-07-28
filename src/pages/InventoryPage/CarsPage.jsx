import React from 'react'
import '../../App.css'
import Footer from '../../components/Footer.jsx';
import Sidebar from '../../components/sidebar.jsx';
import SearchBars from '../../components/SearcBars.jsx';
import Button from '../../components/Button';
import Popup from '../../components/Popup.jsx';
import CarsDetailPage from '../../components/CarsDetailPage.jsx';

function CarsPage() {
  // const [showPopup, setShowPopup] = useState(false);

  // const handleButtonClick = () => {
  //   setShowPopup(true);
  // };

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <>
      <section className='relative w-full h-[680px] bg-cover bg-center pt-[70px]' style={{ backgroundImage: "url('/assets/nissan T3.jpg')" }}>
        <div className='p-4 '>
          <p className='bebas-neue text-white text-[56px]'>NISSAN T3</p>
          <div className="flex flex-col mt-5 justify-start items-center md:flex-row md:space-x-5 md:items-start space-y-4 md:space-y-0">
            <Button className="buy-a-car-button h-14 w-44 bg-transparent flex justify-center items-center space-x-2 border border-white text-white hover:bg-white hover:text-black bg-opacity-20 backdrop-blur-lg" >
              {/* <Icon icon="ri:shopping-cart-line" style={{ fontSize: '24px' }} /> */}
              <span>TEST DRIVE</span>
            </Button>
            <Button className="rent-a-car-button h-14 w-44 bg-transparent flex justify-center items-center space-x-2 border border-white text-white hover:bg-white hover:text-black bg-opacity-20 backdrop-blur-lg">
              {/* <Icon icon="maki:car-rental" style={{ fontSize: '24px' }} /> */}
              <span>LEARN MORE</span>
            </Button>
          </div>
        </div>
      </section>

      <section className='w-full flex flex-col justify-center p-4'>
        <div className="brands-text text-center">
          <div className="top-text flex flex-row items-center justify-center">
            <hr className='h-1 w-[66.5px] border-none bg-[#999] mr-[15px]' />
            <p className='text-[#999] text-[35px] bebas-neue'>BRANDS</p>
            <hr className='h-1 w-[66.5px] border-none bg-[#999] ml-[15px]' />
          </div>
        </div>

        <div className='text-center'>
          <p className='text-[black] text-[54px] bebas-neue'>DISCOVER BY <span className='text-[#1e7ed7]'>BRANDS</span></p>
        </div>

        <div className="brand-logos flex flex-row flex-wrap justify-evenly mb-14">
          <div className="logo-1 border m-2 border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] flex items-center justify-center">
            <img src="/assets/bm-logo.png" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border m-2 border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] flex items-center justify-center">
            <img src="/assets/images/Honda.png" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border m-2 border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] flex items-center justify-center">
            <img src="/assets/Porsche.png" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border m-2 border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] flex items-center justify-center ">
            <img src="/assets/t-logo.png" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
          <div className="logo-1 border m-2 border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] flex items-center justify-center">
            <img src="/assets/images/Mercedes.png" alt="BMW logo" className="max-w-full max-h-full" />
          </div>

          <div className="logo-1 border m-2 border-black w-[200px] h-[84px] rounded-lg bg-[#f3f3f3] flex items-center justify-center">
            <img src="/assets/chevy-logo.png" alt="BMW logo" className="max-w-full max-h-full" />
          </div>
        </div>

        <div className="brands-text text-center">
          <div className="top-text flex flex-row items-center justify-center">
            <hr className='h-1 w-[66.5px] border-none bg-[#999] mr-[15px]' />
            <p className='text-[#999] text-[35px] bebas-neue'>STYLE</p>
            <hr className='h-1 w-[66.5px] border-none bg-[#999] ml-[15px]' />
          </div>
        </div>

        <div className='text-center'>
          <p className='text-[black] text-[54px] bebas-neue'>DISCOVER BY <span className='text-[#1e7ed7]'>STYLE</span></p>
        </div>

        <div className="cars flex flex-row flex-wrap justify-evenly mb-14">
          <div className="logo-1 border m-4 border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] flex flex-col items-center justify-center ">
            <img src="/assets/images/sport-car-icon-0.png" alt="BMW logo" className="max-w-full h-[75px]" />
            <div>
              <p className='bebas-neue text-center'>sports</p>
              <p className='text-[12px] text-gray-500'>230 cars available</p>
            </div>
          </div>
          <div className="logo-1 border m-4 border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] flex flex-col items-center justify-center ">
            <img src="/assets/suv.png" alt="BMW logo" className="max-w-full h-[75px]" />
            <div>
              <p className='bebas-neue text-center'>suv</p>
              <p className='text-[12px] text-gray-500'>230 cars available</p>
            </div>
          </div>
          <div className="logo-1 border m-4 border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] flex flex-col items-center justify-center ">
            <img src="/assets/convertible.png" alt="BMW logo" className="max-w-full h-[75px]" />
            <div>
              <p className='bebas-neue text-center'>convertible</p>
              <p className='text-[12px] text-gray-500'>230 cars available</p>
            </div>
          </div>
          <div className="logo-1 border m-4 border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] flex flex-col items-center justify-center ">
            <img src="/assets/Luxury.png" alt="BMW logo" className="max-w-full h-[75px]" />
            <div>
              <p className='bebas-neue text-center'>Luxury</p>
              <p className='text-[12px] text-gray-500'>230 cars available</p>
            </div>
          </div>
          <div className="logo-1 border m-4 border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] flex flex-col items-center justify-center ">
            <img src="/assets/coupe.png" alt="BMW logo" className="max-w-full h-[75px]" />
            <div>
              <p className='bebas-neue text-center'>coupe</p>
              <p className='text-[12px] text-gray-500'>230 cars available</p>
            </div>
          </div>
          <div className="logo-1 border m-4 border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] flex flex-col items-center justify-center ">
            <img src="/assets/EXR.png" alt="BMW logo" className="max-w-full h-[75px]" />
            <div>
              <p className='bebas-neue text-center'>exr model</p>
              <p className='text-[12px] text-gray-500'>230 cars available</p>
            </div>
          </div>
          <div className="logo-1 border m-4 border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] flex flex-col items-center justify-center ">
            <img src="/assets/mercedes-model.png" alt="BMW logo" className="max-w-full h-[75px]" />
            <div>
              <p className='bebas-neue text-center'>Mercedes model</p>
              <p className='text-[12px] text-gray-500'>230 cars available</p>
            </div>
          </div>
          <div className="logo-1 border m-4 border-black w-[120px] h-[120px] rounded-lg bg-[#f3f3f3] flex flex-col items-center justify-center ">
            <img src="/assets/images/BMW model.png" alt="BMW logo" className="max-w-full h-[75px]" />
            <div>
              <p className='bebas-neue text-center'>BMW MODEL</p>
              <p className='text-[12px] text-gray-500'>230 cars available</p>
            </div>
          </div>
        </div>

        <div className="brands-text text-center">
          <div className="top-text flex flex-row items-center justify-center">
            <hr className='h-1 w-[66.5px] border-none bg-[#999] mr-[15px]' />
            <p className='text-[#999] text-[35px] bebas-neue'>CARS</p>
            <hr className='h-1 w-[66.5px] border-none bg-[#999] ml-[15px]' />
          </div>
        </div>

        <div className='text-center'>
          <p className='text-[black] text-[54px] bebas-neue'>SEARCH FOR <span className='text-[#1e7ed7]'>CARS</span></p>
        </div>

        <div className="search-bars flex ">
          {/* <div className="relative flex items-center border-[1px] p-4 m-4 border-black rounded-xl w-96 h-14">
      <input
        type="text"
        placeholder="VEHICLE NAME OR BRAND"
        className="w-full h-full pl-4 pr-10 border-none outline-none rounded-xl"
      />
      <span className="material-symbols-outlined absolute right-4 text-gray-400">keyboard_arrow_down</span>
    </div>
    <div className="relative flex items-center border-[1px] p-4 m-4 border-black rounded-xl w-96 h-14">
      <input
        type="text"
        placeholder="MODEL"
        className="w-full h-full pl-4 pr-10 border-none outline-none rounded-xl"
      />
      <span className="material-symbols-outlined absolute right-4 text-gray-400">keyboard_arrow_down</span>
    </div>        
    <div className="relative flex items-center border-[1px] p-4 m-4 border-black rounded-xl w-56 h-14">
      <input
        type="text"
        placeholder="PRICE UP TO"
        className="w-full h-full pl-4 pr-10 border-none outline-none rounded-xl"
      />
      <span className="material-symbols-outlined absolute right-4 text-gray-400">keyboard_arrow_down</span>
    </div> */}
          <SearchBars />
          <button className='btn w-48 h-14 m-4 bg-[#0e5a9f] text-white bebas-neue'>SEARCH</button>
        </div>
      </section>

      <section>
        <div className="1 p-8">
          <p className='text-[26px] bebas-neue'>FILTER-03</p>
        </div>
        <div className="flex">
          {/* <div className="sidebar w-80 h-auto p-5">
        <div className="relative mb-4">
          <p className="bebas-neue text-gray-500 text-[26px]">
            VEHICLE TYPE
          </p>
          <span className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400">
            keyboard_arrow_down
          </span>
        </div>
        <hr />
        <div className="space-y-4">
      <p className="flex items-center text-gray-400">
        <span className="mr-2 ">&#9723;</span>Economy
      </p>
      <p className="flex items-center text-gray-400">
        <span className="mr-2">&#9723;</span>Compact
      </p>
      <p className="flex items-center text-gray-400">
        <span className="mr-2">&#9723;</span>Midsize
      </p>
      <p className="flex items-center text-gray-400">
        <span className="mr-2">&#9723;</span>Standard
      </p>
      <p className="flex items-center text-gray-400">
        <span className="mr-2">&#9723;</span>Full size
      </p>
      <p className="flex items-center text-gray-400">
        <span className="mr-2">&#9723;</span>Sports utility
      </p>
      <p className="flex items-center text-gray-400">
        <span className="mr-2">&#9723;</span>Sports car
      </p>
    </div>

        <div className="relative mb-4">
          <p className="bebas-neue text-gray-500 text-[20px]">
            TRANSMISSION TYPE
          </p>
          <span className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400">
            keyboard_arrow_down
          </span>
        </div>
        <hr />
        <div className="relative mb-4">
          <p className="bebas-neue text-gray-500 text-[20px]">
            CARS
          </p>
          <span className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400">
            keyboard_arrow_down
          </span>
        </div>
        <hr />
        <div className="relative mb-4">
          <p className="bebas-neue text-gray-500 text-[20px]">
            PAYMENT METHOD
          </p>
          <span className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400">
            keyboard_arrow_down
          </span>
        </div>
        <hr />
        <div className="relative mb-4">
          <p className="bebas-neue text-gray-500 text-[20px]">
            NUMBER OF SEATS
          </p>
          <span className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400">
            keyboard_arrow_down
          </span>
        </div>
        <hr />
        <div className="relative mb-4">
          <p className="bebas-neue text-gray-500 text-[20px]">
            KILOMETER GAUGE
          </p>
          <span className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400">
            keyboard_arrow_down
          </span>
        </div>
      </div> */}

          <Sidebar />

          <div className="car-blog flex-grow p-5">
            <p className="bebas-neue text-[26px]">WE HAVE FOUND <span className="text-[#1e7ed7]">365 CARS </span>FOR YOU</p>
            <div className="flex flex-wrap">
              <div className="car-card w-[350px] h-[400px] flex flex-col justify-center items-center ml-3 mr-3 mb-5">
                <img className="w-full" src="/assets/nissan nav.png" alt="Nissan navara" />
                <h3 className="bebas-neue text-[26px]">NISSAN NAVARA <span className="text-[#1e7ed7]">- 2023</span></h3>
                <p className="mb-8">start prices from GHc 490,000</p>
                {/* <button onClick={handleButtonClick} className="w-72 h-10 bg-[#0e5a9f] text-white bebas-neue">PROCEED TO BUY</button>
              <Popup show={showPopup} onClose={handleClosePopup} /> */}

                <CarsDetailPage />

              </div>
              <div className="car-card w-[350px] h-[400px] flex flex-col justify-center items-center ml-3 mr-3 mb-5">
                <img className="w-full" src="/assets/XE.jpg" alt="Nissan navara" />
                <h3 className="bebas-neue text-[26px]">NISSAN NAVARA XE <span className="text-[#1e7ed7]"> + - 2024</span></h3>
                <p className="mb-8">start prices from GHc 502,425</p>
                {/* <button className="w-72 h-10 bg-[#0e5a9f] text-white bebas-neue">PROCEED TO BUY</button> */}
                <CarsDetailPage />
              </div>
              <div className="car-card w-[350px] h-[400px] flex flex-col justify-center items-center ml-3 mr-3 mb-5">
                <img className="w-full h-48" src="/assets/Thigh.jpg" alt="Nissan navara" />
                <h3 className="bebas-neue text-[26px]">2023 TOYOTA <span className="text-[#1e7ed7]">HIGHLANDER</span></h3>
                <p className="mb-8">start prices from $ 10,000</p>
                {/* <button className="w-72 h-10 bg-[#0e5a9f] text-white bebas-neue">PROCEED TO BUY</button> */}
                <CarsDetailPage />
              </div>
              <div className="car-card w-[350px] h-[400px] flex flex-col justify-center items-center ml-3 mr-3 mb-5">
                <img className="w-full" src="/assets/thundra.jpg" alt="Nissan navara" />
                <h3 className="bebas-neue text-[26px]">TOYOTA THUNDRA <span className="text-[#1e7ed7]">- 2022</span></h3>
                <p className="mb-8">start prices from GHc 2,346,250</p>
                {/* <button className="w-72 h-10 bg-[#0e5a9f] text-white bebas-neue">PROCEED TO BUY</button> */}
                <CarsDetailPage />
              </div>
              <div className="car-card w-[350px] h-[400px] flex flex-col justify-center items-center ml-3 mr-3 mb-5">
                <img className="w-full" src="/assets/bmw.jpg" alt="Nissan navara" />
                <h3 className="bebas-neue text-[26px]">BMW 330I<span className="text-[#1e7ed7]">- 2020</span></h3>
                <p className="mb-8">start prices from GHc 688,750</p>
                {/* <button className="w-72 h-10 bg-[#0e5a9f] text-white bebas-neue">PROCEED TO BUY</button> */}
                <CarsDetailPage />
              </div>
              <div className="car-card w-[350px] h-[400px] flex flex-col justify-center items-center ml-3 mr-3 mb-5">
                <img className="w-full h-48" src="/assets/h21.jpg" alt="Nissan navara" />
                <h3 className="bebas-neue text-[26px]">HONDA CR-V<span className="text-[#1e7ed7]">- 2021</span></h3>
                <p className="mb-8">start prices from GHc 430,000</p>
                {/* <button className="w-72 h-10 bg-[#0e5a9f] text-white bebas-neue">PROCEED TO BUY</button> */}
                <CarsDetailPage />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex-grow">
          <Footer />
        </div>
      </section>

    </>
  )
}

export default CarsPage