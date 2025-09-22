import { Logo } from "../assets";
import { Button } from "../components/ui/button";

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
    return (
        <div className="flex max-w-[1420px] w-full h-auto mt-[61px] mx-auto items-center justify-between">
            <div className="w-[279px] h-[67px]">
                <img className="w-full h-full object-contain" src={Logo} alt="Logo" />
            </div>
            <nav className="flex items-center gap-[24px]">
                <ul className="flex gap-[12px] text-secondary">
                    {navItems.map((item) => (
                        <li key={item.name} className="px-[14px] py-[10px] text-[21px] font-[400] font-poppins leading-[100%] tracking-[0.6px]">
                            <a href={item.href} className=" hover:underline">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <Button className="w-[188px] h-[52px]  font-[400] font-poppins text-[21px] tracking-[0.6px] leading-[100%]" variant="primary">
                    Download CV
                </Button>
            </nav>

        </div >
    );
};

export default Header;


