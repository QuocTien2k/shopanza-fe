import { useEffect, useState } from "react";
import Title from "./Title"
import { products } from "../assets/data";
import Item from "./Item";

const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([]);


    useEffect(() => {
        //console.log("products:", products);
        if (products && products.length > 0) {
            const data = products.filter(item => item.popular);
            //console.log("filtered:", products.filter(item => item.popular));
            setPopularProducts(data.slice(0, 5));
        }
    }, [products]);

    return (
        <section className="max-padd-container py-16">
            <Title title1={'Popular'} title2={'Products'} titleStyles={'pb-10'} paraStyles={'!block'} />

            {/* Container */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {popularProducts.map((product) => (
                    <div key={product._id}>
                        <Item product={product} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PopularProducts