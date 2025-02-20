import { useState } from "react";
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import Footer from "../components/Footer";
import Toast from "../context/Toast";


const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const [showToast, setShowToast] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        zip: "",
        country: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        //console.log(e);
        const { name, value } = e.target;

        //console.log(e.target)

        // Cập nhật dữ liệu form
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Khi đang nhập thì xóa lỗi của input đó
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "", // Xóa lỗi khi nhập
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "Vui lòng nhập họ tên và tên lót";
        if (!formData.lastName.trim()) newErrors.lastName = "Vui lòng nhập tên";
        if (!formData.email.trim()) {
            newErrors.email = "Vui lòng nhập email";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email không hợp lệ";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Vui lòng nhập số điện thoại";
        } else if (!/^0\d{9}$/.test(formData.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ";
        }
        if (!formData.street.trim()) newErrors.street = "Vui lòng nhập tên đường";
        if (!formData.city.trim()) newErrors.city = "Vui lòng nhập thành phố";
        if (!formData.zip.trim()) newErrors.zip = "Vui lòng nhập Zip Code";
        if (!formData.country.trim()) newErrors.country = "Vui lòng nhập quốc gia";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        // Tạo bản sao của errors để cập nhật
        let newErrors = { ...errors };
        //console.log(newErrors);

        // Nếu input bị bỏ trống, thêm lỗi
        if (!value.trim()) {
            newErrors[name] = `Vui lòng nhập ${name}`;
        } else {
            delete newErrors[name]; // Nếu hợp lệ thì xóa lỗi
        }

        // Cập nhật lỗi mới
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // ngăn hành vi load trang
        if (validateForm()) {
            setShowToast(true);
        }
    };

    return (
        <div>
            <div className="bg-primary mb-16">
                {/* Container */}
                <form action="" className="max-padd-container py-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
                        {/* Left Side */}
                        <div className="flex-1 flex flex-col gap-3 text-[95%]">
                            <Title title1={'Delivery'} title2={'Information'} />

                            {/* FirstName - LastName */}
                            <div className="flex gap-3">
                                <div className="flex flex-col w-1/2">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name..."
                                        className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-full"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm w-full">{errors.firstName}</p>}
                                </div>

                                <div className="flex flex-col w-1/2">
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name..."
                                        className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-full"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm w-full">{errors.lastName}</p>}
                                </div>
                            </div>

                            <input
                                type="text"
                                name="email"
                                placeholder="Email Address..."
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number..."
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            <input
                                type="text"
                                name="street"
                                placeholder="Street..."
                                value={formData.street}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
                            />
                            {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}

                            <input
                                type="text"
                                name="city"
                                placeholder="City..."
                                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-full"
                                value={formData.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.city && <p className="text-red-500 text-sm w-full">{errors.city}</p>}

                            {/* Zip-Country */}
                            <div className="flex gap-3">
                                <div className="flex flex-col w-1/2">
                                    <input
                                        type="text"
                                        name="zip"
                                        placeholder="Zip code..."
                                        className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-full"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.zip && <p className="text-red-500 text-sm w-full">{errors.zip}</p>}
                                </div>

                                <div className="flex flex-col w-1/2">
                                    <input
                                        type="text"
                                        name="country"
                                        placeholder="Country..."
                                        className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-full"
                                        value={formData.country}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.country && <p className="text-red-500 text-sm w-full">{errors.country}</p>}
                                </div>
                            </div>
                        </div>

                        {/*Right Side */}
                        <div className="flex flex-col flex-1">
                            <CartTotal />
                            {/*Payment method */}
                            <div className="my-6">
                                <h3 className="bold-20 mb-5">Payment <span>Method</span></h3>
                                <div className="flex gap-3">
                                    <div onClick={() => setMethod('stripe')} className={`${method === "stripe" ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Stripe</div>
                                    <div onClick={() => setMethod('cod')} className={`${method === "cod" ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Cash on Delivery</div>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn-secondary">
                                    Place Order
                                </button>
                                {
                                    showToast && (<Toast message="Cảm ơn bạn đã trải nghiệm website" onClose={() => setShowToast(false)} />)
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default PlaceOrder