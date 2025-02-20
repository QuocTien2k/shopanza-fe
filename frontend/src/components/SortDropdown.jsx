import { useState } from "react";

const SortDropdown = ({ setSortType }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Relevant");

    const options = [
        { label: "Relevant", value: "relevant" },
        { label: "Low", value: "low" },
        { label: "High", value: "high" },
    ];

    const handleSelect = (option) => {
        setSelected(option.label);
        setSortType(option.value);
        setIsOpen(false);
    };

    return (
        <div className="relative w-[300px]">
            {/* Nút chọn */}
            <button
                className="w-full bg-white border border-slate-300 text-gray-700 rounded-lg px-3 py-2 text-left shadow-sm flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected}
                <span className="text-gray-500">⌄</span>
            </button>

            {/* Danh sách tùy chọn */}
            {isOpen && (
                <ul className="absolute w-full bg-white border border-slate-300 shadow-md mt-1 rounded-lg overflow-hidden">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SortDropdown;
