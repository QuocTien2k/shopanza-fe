import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { FaRegWindowClose } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";


const Cart = () => {
    const { products, currency, cartItems, getCartCount } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            const initialQuantities = {};

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        tempData.push({
                            _id: items,
                            coloor: item,
                            quantity: cartItems[items][item]
                        })
                        initialQuantities[`${item}-${item}`] = cartItems[items][item];
                    }
                }
            }
            setCartData(tempData);
            setQuantities(initialQuantities);
        }
    }, [cartItems, products])

    return (
        <div>
            <div>
                {/*Title */}
                <div>
                    <Title title1={'Cart'} title2={'List'} title1Styles={'h3'} />
                    <h5>{getCartCount()}</h5>
                </div>

                {/*Container */}
                <div>
                    {cartData.map((item, i) => {
                        const productData = products.find((product) => product._id === item._id);
                        console.log(productData);
                        const key = `${item._id} - ${item.color}`;
                        return (
                            <div key={i}>
                                <div>
                                    <div>
                                        <img src={productData.image[0]} alt="" />
                                    </div>
                                    <div>
                                        <div>
                                            <h5>{productData.name}</h5>
                                            <FaRegWindowClose />
                                        </div>
                                        <p>{quantities[key]}</p>
                                        <button><FaPlus /></button>
                                    </div>
                                    <h4>{currency}{productData.price}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart