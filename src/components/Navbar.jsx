import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { styles } from '../styles'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)

    return(
        <nav className={`${styles.paddingX} w-full flex items-center py-5  top-0 z-20 relative`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2" onClick={() => {setActive(""); window.scrollTo(0,0)}}>
                    <img src={logo} alt="logo" className="w-20 h-20 object-contain hover:animate-pulse"/>
                    <p className="text-white text-[18px] cursor-pointer font-bold flex">
                        Rocket &nbsp; <span className="sm:block hidden">| Mission</span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer shadow-2xl`} onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt="menue" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>setToggle(!toggle)}/>
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {setActive(link.title); setToggle(!toggle)}}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                       </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;