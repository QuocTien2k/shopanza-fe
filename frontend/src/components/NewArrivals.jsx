import { useContext, useEffect, useState } from "react";
import Title from "./Title"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const NewArrivals = () => {
    const [PopularProducts, setPopularProducts] = useState([]);
    const { products } = useContext(ShopContext);

    useEffect(() => {
        const data = products.slice(0, 7);
        //console.log(data);
        setPopularProducts(data);
    }, [products])
    return (
        <section className="max-padd-container pt-16">
            <Title title1={'New'} title2={'Arrivals'} titleStyles={'pb-10'} paraStyles={'!block'} />

            {/* Container */}
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                    },
                    666: {
                        slidesPerView: 3,
                    },
                    900: {
                        slidesPerView: 4,
                    },
                    1300: {
                        slidesPerView: 5,
                    },
                }}
                modules={[Autoplay]}
                className="h-[399px]"
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

/*
- useContext: là 1 hook của React
*/