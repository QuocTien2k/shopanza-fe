import { FaArrowRightLong } from "react-icons/fa6"
import headphones from "../assets/headphones.png"

const Hero = () => {
    return (
        <section className="max-padd-container">
            <div className="grid grid-cols-2 bg-hero bg-cover bg-center bg-no-repeat rounded-2xl h-[633px]">
                {/*left side*/}
                <div className="place-content-end max-xs:min-w-80">
                    <div className="p-4">
                        <p className="text-white max-w-xs">Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500</p>
                        <button className="btn-white mt-6">Explore more</button>
                    </div>
                </div>
                {/*right side*/}
                <div className="hidden xs:block place-items-end">
                    <div className="flex flex-col rounded-2xl w-[211px] relative top-10 right-4 p-2 bg-white">
                        <img src={headphones} alt="" className="rounded-2xl bg-slate-900/10" />
                        <button className="btn-light !py-1 !text-xs flexCenter gap-2 mt-2" >Explore this product <FaArrowRightLong /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero