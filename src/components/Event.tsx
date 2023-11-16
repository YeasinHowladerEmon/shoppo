
import { Link } from 'react-router-dom';
import backGroundImage from '../assets/campaign-cover-countdown.jpg';
import backGroundImage2 from '../assets/download-app-cover.png';
import appScreen from '../assets/app-screen.png';
import app1 from '../assets/play-store.png';
import app2 from '../assets/apple-store.png';

const Event = () => {
    return (
        <div className='w-full lg:h-[460px] mb-[60px]'>
            <div className='container-x mx-auto h-full'>
                <div className='lg:flex xl:space-x-[30px] lg:space-x-5 items-center h-full'>
                    <div data-aos='fade-right' className='campaign-countdown lg:w-1/2 h-full w-full mb-5 lg:mb-0 aos-init' style={{ background: `url(${backGroundImage}) 0% 0% / cover no-repeat` }}>
                        <Link to='/Product'>
                            <div className='w-full xl:p-12 p-5'>
                                <div className='countdown-wrapper w-full flex lg:justify-between justify-evenly mb-10'>
                                    <div className="countdown-item">
                                        <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                                            <span className='font-bold sm:text-[30px] text-[14px] text-[#EB5757]'>0</span>
                                        </div>
                                        <p className='sm:text-[18px] text-[12px] font-[500] text-center leading-8'>Days</p>
                                    </div>
                                    <div className="countdown-item">
                                        <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                                            <span className='font-bold sm:text-[30px] text-[14px] text-[#2F80ED]'>0</span>
                                        </div>
                                        <p className='sm:text-[18px] text-[12px] font-[500] text-center leading-8'>Hours</p>
                                    </div>
                                    <div className="countdown-item">
                                        <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                                            <span className='font-bold sm:text-[30px] text-[14px] text-[#219653]'>0</span>
                                        </div>
                                        <p className='sm:text-[18px] text-[12px] font-[500] text-center leading-8'>minutes</p>

                                    </div>
                                    <div className="countdown-item">
                                        <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                                            <span className='font-bold sm:text-[30px] text-[14px] text-[#EF5DA8]'>0</span>
                                        </div>
                                        <p className='sm:text-[18px] text-[12px] font-[500] text-center leading-8'>seconds</p>

                                    </div>
                                </div>
                                <div className='countdown-title mb-4'>
                                    <h1 className='text-[44px] text-black_text font-semibold' >WOO! Flash Sale</h1>
                                </div>
                                <div className='inline-flex space-x-2 items-center border-b border-yellow-400'>
                                    <span className='text-sm font-[600] tracking-wide leading-7'>
                                        Shop Now
                                    </span>
                                    <span>
                                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.08984" y="0.636719" width="6.94219" height="1.54271" transform="rotate(45 2.08984 0.636719)" fill="#1D1D1D"></rect><rect x="7" y="5.54492" width="6.94219" height="1.54271" transform="rotate(135 7 5.54492)" fill="#1D1D1D"></rect></svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div data-aos='fade-left' className='download-app flex-1 lg:h-full h-[430px] xl:p-12 p-5 aos-init' style={{ background: `url(${backGroundImage2}) 0% 0% / cover no-repeat` }}>
                        <div className="flex flex-col h-full justify-between">
                            <div className="get-app">
                                <p className='text-[13px] font-[600] text-black_text mb-3'>MOBILE APPS VERSION</p>
                                <h1 className='text-[30px] font-[600] text-black_text leading-10 mb-8'>
                                    Get Our
                                    <span className='text-red-500 border-b-2 border-red-500 mx-2'>Mobile App</span>
                                <br />
                                It's Make easy for you life !
                                </h1>
                                <div className="flex space-x-5 items-center">
                                    <div>
                                        <a href="#">
                                            <img width="170" height="69" src={app1} alt="" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <img width="170" height="69" src={app2} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="app-screen">
                                <img src={appScreen} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Event;