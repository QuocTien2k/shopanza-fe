import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

const Toast = ({ message, onClose }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Ngăn chặn cuộn trang khi modal hiển thị
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-primary bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white text-black px-6 py-4 rounded-lg shadow-lg relative border w-80">
                {/* Icon + Nội dung */}
                <div className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-green-500" />
                    <span className="text-center">{message}</span>
                </div>

                {/* Button OK */}
                <button
                    onClick={() => {
                        onClose();
                        navigate("/");
                    }}
                    className="mt-4 w-[150px] btn-dark mx-auto flex justify-center"
                >
                    OK
                </button>

                {/* Hiệu ứng đường line chạy quanh */}
                <span className="absolute inset-0 border-2 border-green-500 animate-border"></span>
            </div>
        </div>
    );
};

export default Toast;
