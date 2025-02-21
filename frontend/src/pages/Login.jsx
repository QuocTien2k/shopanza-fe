import { useState } from "react"
import login from "../assets/login.png"
import Toast from "../context/Toast";
import { ArrowRight } from "lucide-react";
const Login = () => {
    const [currState, setCurrState] = useState('Sign up')
    const [showToast, setShowToast] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    }); // Khởi tạo state formData

    const validateForm = () => {
        let newErrors = {}; // Khởi tạo một object để lưu các lỗi của từng trường

        // Validate Name (Chỉ áp dụng cho Sign Up)
        if (currState === "Sign up") {
            if (!formData.fullName.trim()) {
                newErrors.fullName = "Vui lòng nhập họ và tên";
            } else if (!/^[a-zA-ZÀ-ỹ\s]{2,}$/.test(formData.fullName)) {
                newErrors.fullName = "Họ tên chỉ chứa chữ và từ 2 ký tự trở lên";
            }
        }

        // Validate Email
        if (!formData.email.trim()) {
            newErrors.email = "Vui lòng nhập email";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = "Email không hợp lệ";
        }

        // Validate Password
        if (!formData.password.trim()) {
            newErrors.password = "Vui lòng nhập mật khẩu";
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,}$/.test(formData.password)) {
            newErrors.password = "Mật khẩu cần ít nhất 3 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt";
        }

        setErrors(newErrors); // Cập nhật lỗi vào state

        return Object.keys(newErrors).length === 0; // Trả về true nếu không có lỗi, false nếu có lỗi
    };

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

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn chặn submit form làm reload trang
        if (validateForm()) {
            setShowToast(true);
        }
    };

    return (
        <div className="absolute top-0 left-0 h-full w-full z-50 bg-white">
            {/* Container */}
            <div className="flex h-full w-full">
                {/* Image */}
                <div className="w-1/2 hidden sm:block">
                    <img src={login} alt="loginImg" className="object-cover h-full w-full" />
                </div>
                {/* Form Side */}
                <div className="flexCenter w-full sm:w-1/2 text-[90%]">
                    <form action="" onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5">
                        <div className="w-full mb-4">
                            <h3 className="bold-36">{currState === 'Sign up' ? "Đăng ký" : "Đăng nhập"}</h3>
                        </div>
                        {currState === 'Sign up' && (
                            <div className="w-full">
                                <label htmlFor="name" className="medium-15">Họ và tên</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Họ và tên..."
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="py-1.5 ring-1 ring-slate-900/5 w-full px-3 rounded bg-primary mt-1" />
                                {errors.fullName && <p className="text-red-500 text-sm w-full">{errors.fullName}</p>}

                            </div>
                        )}
                        <div className="w-full">
                            <label htmlFor="email" className="medium-15">Email</label>
                            <input
                                type="text"
                                placeholder="Email..."
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="py-1.5 ring-1 ring-slate-900/5 w-full px-3 rounded bg-primary mt-1" />
                            {errors.email && <p className="text-red-500 text-sm w-full">{errors.email}</p>}

                        </div>
                        <div className="w-full">
                            <label htmlFor="password" className="medium-15">Mật khẩu</label>
                            <input
                                type="password"
                                placeholder="Mật khẩu..."
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="py-1.5 ring-1 ring-slate-900/5 w-full px-3 rounded bg-primary mt-1" />
                            {errors.password && <p className="text-red-500 text-sm w-full">{errors.password}</p>}

                        </div>
                        <button type="submit" className="btn-dark w-full mt-5 !py-[8px] !rounded">{currState === 'Sign up' ? 'Đăng ký' : 'Đăng nhập'}</button>

                        <div className="w-full flex flex-col gap-y-3">
                            <div className="underline medium-15">Quên mật khẩu?</div>
                            {currState === 'Login' ? (
                                <>
                                    <div className="underline medium-15">
                                        Bạn chưa có tài khoản?
                                        <span onClick={() => setCurrState('Sign up')} className="cursor-pointer pl-1">Tạo tài khoản</span>
                                    </div>
                                </>
                            ) : (
                                <div className="underline medium-15 cursor-pointer py-1.5 flex items-center gap-1">
                                    <span>Đã có tài khoản</span>
                                    <ArrowRight className="align-middle text-[14px]" />
                                    <span onClick={() => setCurrState('Login')} className="cursor-pointer">Đăng nhập</span>
                                </div>

                            )}
                        </div>

                        {showToast && (
                            <Toast message="Cảm ơn bạn đã trải nghiệm website" onClose={() => setShowToast(false)} />
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login