import { createContext } from "react"
import { products } from "../assets/data";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const value = { products };
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