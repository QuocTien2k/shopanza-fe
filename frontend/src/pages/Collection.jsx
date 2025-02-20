import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Search from "../components/Search";
import Item from "../components/Item";
import { ChevronDown } from "lucide-react";


const Collection = () => {

    const { products, search } = useContext(ShopContext);
    const [category, setCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const productCategory = ["Headphones", "Cameras", "Mobiles", "Speakers", "Mouse", "Watches"];

    const toggleFilter = (value, setState) => {
        setState((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    }

    const applyFilter = () => {
        let filtered = [...products]

        if (search) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            )
        }

        if (category.length) {
            filtered = filtered.filter((product) =>
                category.includes(product.category)
            )
        }

        return filtered;
    }

    const applySorting = (productList) => {
        switch (sortType) {
            case "low":
                return [...productList].sort((a, b) => a.price - b.price);
            case "high":
                return [...productList].sort((a, b) => b.price - a.price);
            default:
                return productList;
        }
    }

    useEffect(() => {
        let filtered = applyFilter();
        let sorted = applySorting(filtered);

        setFilteredProducts(sorted);
        setCurrentPage(1) // reset when filter change
    }, [category, sortType, products, search])

    const getPaginatedProducts = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return filteredProducts.slice(startIndex, endIndex);
    }

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <div className="max-padd-container !px-0">
            <div className="flex flex-col sm:flex-row gap-8 mb-16">
                {/* Filter */}
                <div className="min-w-72 bg-primary p-4 pt-8 pl-6 lg:pl-12">
                    <Search />
                    <div className="pl-5 py-3 mt-4 bg-white rounded-xl">
                        <h5 className="h5 mb-4">Categories</h5>
                        <div className="flex flex-col gap-2 text-sm font-light">
                            {
                                productCategory.map((cat) => (
                                    <label key={cat} className="flex gap-2 medium-14 text-gray-30">
                                        <input
                                            onChange={(e) => toggleFilter(e.target.value, setCategory)}
                                            type="checkbox"
                                            value={cat}
                                            className="w-3" />
                                        {cat}
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                    {/* Sort Type */}
                    <div className="px-4 py-3 mt-6 bg-white rounded-xl relative">
                        <h5 className="h5 mb-4">Sort By</h5>

                        {/* Custom Dropdown */}
                        <div className="relative w-full">
                            <button
                                className="border border-slate-300 outline-none text-gray-700 medium-14 h-10 w-full rounded-lg px-3 bg-white shadow-sm flex justify-between items-center"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                {sortType === "relevant" ? "Relevant" : sortType === "low" ? "Low" : "High"}
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                            </button>

                            {dropdownOpen && (
                                <ul className="absolute w-full bg-white border border-slate-300 shadow-md mt-1 rounded-lg overflow-hidden z-10">
                                    <li
                                        className={`px-3 py-2 cursor-pointer ${sortType === "relevant" ? "bg-gray-200" : "hover:bg-gray-100"
                                            }`}
                                        onClick={() => {
                                            setSortType("relevant");
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        Relevant
                                    </li>
                                    <li
                                        className={`px-3 py-2 cursor-pointer ${sortType === "low" ? "bg-gray-200" : "hover:bg-gray-100"
                                            }`}
                                        onClick={() => {
                                            setSortType("low");
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        Low
                                    </li>
                                    <li
                                        className={`px-3 py-2 cursor-pointer ${sortType === "high" ? "bg-gray-200" : "hover:bg-gray-100"
                                            }`}
                                        onClick={() => {
                                            setSortType("high");
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        High
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="pr-5 rounded-l-xl">
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6">
                        {
                            getPaginatedProducts().length > 0 ? (
                                getPaginatedProducts().map((product) => <Item key={product._id} product={product} />)
                            ) : (
                                <p>No products found for selected filters</p>
                            )
                        }
                    </div>
                    <div className="flexCenter flex-wrap gap-4 mt-14 mb-10">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            className={`${currentPage === 1 && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}>
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`${currentPage === index + 1 && "!bg-tertiary text-white"} btn-light !py-1 !px-3`}
                            >{index + 1}</button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            className={`${currentPage === totalPages && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection

/*
- hàm toggleFilter: dùng để bật/tắt (toggle) một giá trị trong một mảng state trong React. 
Cụ thể, nó kiểm tra nếu giá trị (value) đã có trong mảng thì sẽ xóa nó đi, ngược lại thì thêm vào mảng.

- hàm applyFilter(): dùng để lọc sản phẩm (products) dựa trên search (từ khóa tìm kiếm) và 
category (danh mục sản phẩm đã chọn).

- hàm applySorting():  sắp xếp danh sách sản phẩm (productList) dựa trên sortType

- hàm getPaginatedProducts(): phân trang (pagination) cho danh sách sản phẩm đã lọc (filteredProducts). 
Nó xác định phạm vi phần tử cần hiển thị trên trang hiện tại (currentPage) và trả về một mảng con từ filteredProducts

- totalPages hiển thị tất cả sản phẩm trong filteredProducts, dựa trên số sản phẩm hiển thị trên mỗi trang (itemsPerPage).

- useEffect() để lọc và sắp xếp danh sách sản phẩm (products) bất cứ khi nào một trong các state sau thay đổi:

    category: Danh mục sản phẩm đã chọn.
    sortType: Loại sắp xếp ("relevant", "low", "high").
    products: Danh sách sản phẩm gốc.
    search: Từ khóa tìm kiếm.
- Sau khi lọc và sắp xếp, nó cập nhật filteredProducts và reset về trang đầu tiên (currentPage = 1).
*/