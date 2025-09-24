import { useEffect, useState } from "react";
import { Logo, DarkLogo } from "../assets";
import { Button } from "../components/ui/button";
import DarkModeToggle from "../utils/DarkModeToggle";
import { useDarkMode } from "../context/DarkModeContext";

type navItems = { name: string; href: string }[];

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleMenuClick = () => {
        // Logic to open the menu goes here
        setIsMenuOpen(!isMenuOpen);
    }

    return (

        <div className={`w-full flex items-center lg:pt-[61px] sm:pt-[40px] pt-[25px] xl:px-0  px-[20px]  transform duration-400 fixed ${scrolled ? "bg-white !py-[20px] dark:bg-darkbg" : "bg-transparent"}  top-0 z-20`}>

            <div className="w-full flex justify-between items-center max-w-[1420px] mx-auto">
                {/* // <div className="flex max-w-[1420px]  w-full h-auto lg:pt-[61px] sm:pt-[40px] pt-[25px] lg:px-0 sm:px-2 px-2 mx-auto items-center justify-between"> */}

                <div className="xl:w-[279px] lg:w-[130px] md:w-[160px] w-[120px] cursor-pointer h-auto">
                    <img className="w-full h-full " src={isDarkMode ? DarkLogo : Logo} alt="Logo" />
                </div>

                <nav className="lg:flex hidden items-center xl:gap-[24px] lg:gap-[16px]">
                    <ul className="flex xl:gap-[12px] lg:gap-[6px] text-secondary dark:text-white items-center">
                        {navItems.map((item) => (
                            <li key={item.name} className="xl:px-[14px] lg:px-[8px] transform duration-600 hover:text-primary cursor-pointer xl:py-[10px] lg:py-[8px] xl:text-[21px] lg:text-[18px] text-[16px] font-[400] font-poppins leading-[100%] tracking-[3%]">
                                <a href={item.href} >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Button className="xl:w-[188px] cursor-pointer  -[170px] xl:h-[52px] h-[40px] font-[400] font-poppins xl:text-[21px] lg:text-[18px] text-[16px] tracking-[0.6px] leading-[100%]" variant="primary">
                        Download CV
                    </Button>
                </nav>
                <div className="lg:flex hidden">
                    <DarkModeToggle />
                </div>

                {/* hamburger menu for mobile */}
                <div className="lg:hidden">
                    <button className="w-[40px] flex justify-end items-center h-[40px] p-0 dark:text-white" onClick={handleMenuClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-text-align-justify-icon lucide-text-align-justify"><path d="M3 5h18" /><path d="M3 12h18" /><path d="M3 19h18" /></svg>
                    </button>
                    <div
                        onClick={() => setIsMenuOpen(false)}
                        className={`${isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}  transition-all origin-top-right h-screen ease-in-out  absolute max-w-[300px] transform duration-600 p-[32px] w-full top-0 right-0  bg-primary shadow-lg z-50`}
                    >
                        <div className="flex justify-between mb-4">
                            <DarkModeToggle />
                            <button className="text-2xl font-semibold cursor-pointer text-white">X</button>
                        </div>
                        <ul className="flex border-t border-border pt-8  flex-col gap-[12px] text-secondary mx-auto justify-center text-center">
                            {navItems.map((item) => (
                                <li
                                    key={item.name}
                                    className="px-[14px] py-[10px] text-[21px] font-[400] font-poppins leading-[100%] tracking-[0.6px]"
                                >
                                    <a href={item.href} className="hover:text-secondary transform duration-600 hover:font-semibold text-white cursor-pointer">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div >
        </div>
    );
};

export default Header;


