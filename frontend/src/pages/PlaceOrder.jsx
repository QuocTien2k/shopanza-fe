import { useState } from "react";
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import Footer from "../components/Footer";
import Toast from "../context/Toast";


const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const [showToast, setShowToast] = useState(false);

    return (
        <div>
            <div className="bg-primary mb-16">
                {/* Container */}
                <form action="" className="max-padd-container py-10">
                    <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
                        {/* Left Side */}
                        <div className="flex-1 flex flex-col gap-3 text-[95%]">
                            <Title title1={'Delivery'} title2={'Information'} />
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="First Name..."
                                    className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name..."
                                    className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Email Address..."
                                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number..."
                                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Street..."
                                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
                            />

                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="City..."
                                    className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                                />
                                <input
                                    type="text"
                                    placeholder="State..."
                                    className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                                />
                            </div>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Zip code..."
                                    className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                                />
                                <input
                                    type="text"
                                    placeholder="Country..."
                                    className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                                />
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
                                <button type="submit" onClick={() => setShowToast(true)} className="btn-secondary">
                                    Place Order
                                </button>
                                {
                                    showToast && <Toast message="Cảm ơn bạn đã trải nghiệm website" onClose={() => setShowToast(false)} />
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