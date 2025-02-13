import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { FaBars, FaBarsStaggered } from "react-icons/fa6"
import { TbUserCircle } from "react-icons/tb"
import { RiUserLine } from "react-icons/ri"

const Header = () => {
    return (
        <header className="max-padd-container w-full mb-2">
            <div className="flexBetween py-3">
                {/* LOGO */}
                <Link to={"/"} className="flex flex-1 bold-28" >Shopanza</Link>

                {/* NAVBAR */}
                <div className="flex-1">
                    <Navbar />
                </div>

                {/* BUTTONS */}
                <div className="flex-1 flex">
                    <FaBars />
                    <Link><div>Cart</div></Link>
                    <button>Login</button>
                </div>
            </div>
        </header>
    )
}

export default Header