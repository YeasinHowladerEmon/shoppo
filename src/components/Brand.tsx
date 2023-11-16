


import { useState, useEffect } from 'react';


interface Image {
    default: string;// add default for src
    src: string;
    alt: string;
}

const Brand = () => {
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        const importImages = async () => {
            const imageImports = [];

            for (let i = 1; i <= 12; i++) {
                imageImports.push(import(`../assets/Brand/brand-${i}.png`));
            }

            const imagePromises = await Promise.all(imageImports);
            // const imageElements = imagePromises.map((image, index) => (
            //     <img
            //         key={index}
            //         src={image.default}
            //         alt={`Banner ${index + 1}`}
            //     />
            // ));

            setImages(imagePromises);
            console.log(imagePromises);
        };

        importImages();
    }, []);


    return (
        <div data-aos='fade-up' className='w-full brand-section-wrapper mb-[60px] aos-init'>
            <div className="container-x mx-auto">
                <div className="section-title flex justify-between items-center mb-5">
                    <div>
                        <h1 className="sm:text-3xl text-xl font-bold text-black_text">Shop by Brand</h1>
                    </div>
                </div>
                <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
                    {
                        images.map((image, index) => (
                            <div className="item" key={index}>
                                <div className="w-full h-[130px] bg-white border border-gray-50 flex justify-center items-center">
                                    <img
                                        key={index}
                                        src={image.default}
                                        alt={`Banner ${index + 1}`}
                                    />
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Brand;