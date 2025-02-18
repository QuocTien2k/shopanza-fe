import { createContext, useEffect, useState } from "react"
import { products } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const currency = "$";
    const delivery_charges = 10;

    const [cartItems, setCardItems] = useState({});
    const addToCart = async (itemId, color) => {

        if (!color) {
            toast.error("Vui lòng chọn màu!");
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][color]) {
                cartData[itemId][color] += 1;
            } else {
                cartData[itemId][color] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][color] = 1;
        }

        setCardItems(cartData);
    }

    //getting total cart count
    const getCartCount = () => {
        let totalCount = 0;

        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }

        return totalCount;
    }

    useEffect(() => {
        //console.log(cartItems);
    }, [cartItems]);

    const value = {
        products, search, setSearch, currency, delivery_charges,
        cartItems, setCardItems, addToCart, getCartCount
    };
    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider

/* 
- createContext(): là 1 hà dùng để truyền props qua nhiều cấp component mà không cần phải truyền từng cấp
ShopContextProvider là một component chức năng (functional component) đóng vai trò là Provider cho ShopContext.
value là đối tượng chứa dữ liệu mà bạn muốn chia sẻ qua Context. Trong ví dụ này, value là một đối tượng rỗng {}.
ShopContext.Provider là một component được cung cấp bởi React để cho phép các component con 
truy cập vào dữ liệu trong Context. Nó nhận một prop value chứa dữ liệu cần chia sẻ.
{props.children} là các component con được bao bọc bởi ShopContextProvider. 
Các component này sẽ có quyền truy cập vào dữ liệu trong Context thông qua ShopContext.
*/