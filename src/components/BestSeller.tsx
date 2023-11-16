import { Link } from "react-router-dom";

import saller1 from "../assets/Seller/saller-1.png";
import saller2 from "../assets/Seller/saller-2.png";
import saller3 from "../assets/Seller/saller-3.png";
import saller4 from "../assets/Seller/saller-4.png";
import saller5 from "../assets/Seller/saller-5.png";
import saller6 from "../assets/Seller/saller-6.png";


const dataSeller = [
    {
        id: 1,
        name: "Shopno BD",
        img: saller1
    },
    {
        id: 2,
        name: "Ecoms Shop",
        img: saller2
    },
    {
        id: 3,
        name: "Fusion X",
        img: saller3
    },
    {
        id: 4,
        name: "Rikayi Rox",
        img: saller4
    },
    {
        id: 5,
        name: "Habbiriyi",
        img: saller5
    },
    {
        id: 6,
        name: "Raihans",
        img: saller6
    },
]


const BestSeller = () => {
    return (
        <div className="section-wrapper w-full best-seller-section mb-[60px]">
            <div className="container-x mx-auto">
                <div className="section-title flex justify-between items-center mb-5">
                    <div>
                        <h1 className='sm:text-3xl text-xl font-[600] text-black_text leading-none'>Best Seller</h1>
                    </div>
                </div>
                <div className="section-content">
                    <div className="w-full">
                        <div className="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 xl:gap-[30px] gap-5">
                            {
                                dataSeller.map((data, i) => (
                                    <div data-aos="fade-left" data-aos-duration="500" className="item w-full flex flex-col items-center aos-init" key={i}>
                                        <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
                                            <img src={data.img} alt="" />
                                        </div>
                                        <Link to='/'>
                                            <p className="text-base font-[500] text-center">{data.name}</p>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;