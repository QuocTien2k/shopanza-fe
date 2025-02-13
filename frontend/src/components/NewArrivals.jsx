import { useEffect, useState } from "react";
import Title from "./Title"
import { products } from "../assets/data"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Item from "./Item";

const NewArrivals = () => {
    const [PopularProducts, setPopularProducts] = useState([]);
    useEffect(() => {
        const data = products.slice(0, 7);
        //console.log(data);
        setPopularProducts(data);
    }, [products])
    return (
        <section className="max-padd-container pt-16">
            <Title title1={'New'} title2={'Arivals'} titleStyles={'pb-10'} paraStyles={'!block'} />

            {/* Container */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 2
                    },
                    666: {
                        slidesPerView: 3
                    },
                    900: {
                        slidesPerView: 4
                    },
                    1250: {
                        slidesPerView: 5
                    },
                }}
                modules={[Autoplay]}
                className="h-[399px] mt-5"
            >
                {PopularProducts.map((product) => (
                    <SwiperSlide key={product._id}>
                        <Item product={product} />
                    </SwiperSlide>

                ))}

            </Swiper>
        </section>
    )
}

export default NewArrivals