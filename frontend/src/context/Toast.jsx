import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Toast = ({ message, onClose }) => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, 3200)

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!visible) {
        return null;
    }

    return (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-lg relative overflow-hidden border border-green-500">
            {/* Icon + Nội dung */}
            <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-500" />
                <span>{message}</span>
            </div>

            {/* Button OK */}
            <button
                onClick={() => navigate("/")}
                className="mt-3 bg-green-500 px-3 py-1 text-white rounded-md"
            >
                OK
            </button>

            {/* Hiệu ứng đường line chạy quanh */}
            <span className="absolute inset-0 border-2 border-green-500 animate-border"></span>
        </div>
    );
};

export default Toast;
