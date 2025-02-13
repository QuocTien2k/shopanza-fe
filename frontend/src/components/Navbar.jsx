import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/collection',
            title: 'Collection'
        },
        {
            path: '/blog',
            title: 'Blog'
        }, {
            path: 'mailto:info@shopanza.com',
            title: 'Contact'
        },
    ];
    return (
        <nav>
            {navLinks.map((link) => (
                <NavLink
                    key={link.title}
                    to={link.path}
                    className={({ isActive }) => `${isActive ? "active-link" : ""} px-3 py-2 rounded-full`}
                >
                    {link.title}
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar