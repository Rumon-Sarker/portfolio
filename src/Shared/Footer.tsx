import { Logo } from "../assets";
import SocialLink from "../components/SharedSection/SocialLink";

type footerNavType={
    id:number;
    name:string;
    link:string;
}

  const footerNav:footerNavType[]=[
        {id:1, name:"Home", link:"#home"},
        {id:2, name:"About Me", link:"#about"},
        {id:3, name:"Services", link:"#services"},
        {id:4, name:"Projects", link:"#projects"},
        {id:5, name:"Testimonials", link:"#testimonials"},
        {id:6, name:"Contact", link:"#contact"},
    ]
    

const Footer = () => {

    return (
       <section className="w-full bg-[#F8F8F8]">
            {/* logo  */}
            <div className="flex pt-[109px] max-w-[279px] w-full mx-auto justify-center">
                <img src={Logo} alt="logo" />
            </div>
            {/* navber  */}
            <div className="flex max-w-[807px] mx-auto items-center justify-center gap-[12px] mt-[65px]">
                {footerNav.map(nav=> 
                <a key={nav.id} href={nav.link} className="hover:text-primary font-poppins font-normal text-[21px] py-[10px] px-[14px] leading-[100%] tracking-[3%]">
                    {nav.name}
                </a>
            )}
            </div>
            {/* social media  */}
          <SocialLink className="mb-[62px] mt-[80.52px]" />
            <div className="text-center w-full py-[26px] bg-[#545454]">
                <p className="font-poppins text-[21px] font-normal text-white leading-[100%] tracking-[3%]">© 2023 <span className="text-primary font-poppins font-bold ">Mumair</span> All Rights Reserved , Inc.</p>
            </div>
       </section>
    );
};

export default Footer;