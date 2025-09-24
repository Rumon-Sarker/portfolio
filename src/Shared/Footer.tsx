import { Logo } from "../assets";
import SocialLink from "../components/SharedSection/SocialLink";

type footerNavType = {
    id: number;
    name: string;
    link: string;
}

const footerNav: footerNavType[] = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About Me", link: "#about" },
    { id: 3, name: "Services", link: "#services" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Testimonials", link: "#testimonials" },
    { id: 6, name: "Contact", link: "#contact" },
]


const Footer = () => {

    return (
        <section className="w-full bg-cardBg dark:bg-darkbg">
            {/* logo  */}
            <div className="flex lg:pt-[109px] cursor-pointer md:pt-[80px] pt-[40px]  max-w-[279px] w-full mx-auto justify-center">
                <img src={Logo} alt="logo" />
            </div>
            {/* navber  */}
            <div className="flex max-w-[807px] flex-wrap mx-auto items-center justify-center lg:gap-[12px] md:gap-[8px] gap-[5px] lg:mt-[65px] md:mt-[40px] mt-[30px]">
                {footerNav.map(nav =>
                    <a key={nav.id} href={nav.link} className="hover:text-primary text-secondary dark:text-white font-poppins font-normal lg:text-[21px] md:text-[18px] text-[16px] lg:py-[10px] md:py-[8ppx] py-[6px]  lg:px-[14px] md:px-[10px] px-[8px] leading-[100%] tracking-[3%]">
                        {nav.name}
                    </a>
                )}
            </div>
            {/* social media  */}
            <SocialLink className="lg:mb-[62px] md:mb-[40px] mb-[20px] lg:mt-[80.52px] md:mt-[60px] mt-[50px]" />
            <div className="text-center w-full lg:py-[26px] py-[18px] bg-[#545454] dark:bg-[#121212]">
                <p className="font-poppins lg:text-[21px] md:text-[18px] text-[16px] font-normal text-white leading-[100%] tracking-[3%]">© 2023 <span className="text-primary font-poppins font-bold cursor-pointer ">Mumair</span> All Rights Reserved , Inc.</p>
            </div>
        </section>
    );
};

export default Footer;