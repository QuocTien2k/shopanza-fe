import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { FaBars, FaBarsStaggered } from "react-icons/fa6"
import { TbUserCircle } from "react-icons/tb"
import { RiUserLine } from "react-icons/ri"
import { useState } from "react"

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenu = () => setMenuOpened((prev) => {
        // console.log(prev)
        return !prev;
    })
    return (
        <header className="max-padd-container w-full mb-2">
            <div className="flexBetween py-3">
                {/* LOGO */}
                <Link to={"/"} className="flex flex-1 bold-24 xl:bold-28 no-underline border-none outline-none shadow-none" >Shopanza</Link>

                {/* NAVBAR */}
                <div className="flex-1">
                    <Navbar
                        containerStyles={`${menuOpened ?
                            "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50" :
                            "hidden xl:flex gap-x-5 xl:gap-x-7 medium-15 bg-primary ring-1 ring-state-900/5 rounded-full p-1"}`}
                        onClick={() => setMenuOpened(false)}
                    />
                </div>

                {/* BUTTONS */}
                <div className="flex-1 flex items-center justify-end gap-x-2 xs:gap-x-8">
                    {menuOpened ? (<FaBarsStaggered onClick={toggleMenu} className="xl:hidden cursor-pointer text-xl" />) :
                        (<FaBars onClick={toggleMenu} className="xl:hidden cursor-pointer text-xl" />)
                    }
                    <Link to={"/cart"} className="flex relative">
                        <div className="ring-1 ring-slate-900 rounded-full px-3 bold-18">
                            Cart <span className="bg-secondary flexCenter text-white text-[14px] font-semibold absolute -top-3.5 -right-2 w-4 h-4 rounded-full shadow-md">0</span>
                        </div>
                    </Link>
                    <div className="group relative">
                        <button className="btn-dark flexCenter gap-x-2">Login <RiUserLine className="text-xl" /></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header