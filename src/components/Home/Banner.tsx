import { ProfileImage } from "../../assets";
import SocialLink from "../SharedSection/SocialLink";
import { Button } from "../ui/button";

const Banner = () => {
    return (
        <section className="flex flex-col items-center max-w-[1400px]  w-full justify-center mx-auto">
            <div className="flex items-center justify-between w-full mt-[120px]">
                {/* banner left */}
                <div className="flex flex-col ">
                    <div className="flex flex-col justify-center max-w-[714px] w-full gap-2 pr-[9px]">
                        <p className="text-[24px] font-[600] leading-[100%] font-poppins pl-[7px] tracking-[0.03em]">Hi I am </p>

                        <h3 className="text-[32px] font-[600] text-justify leading-[100%] font-poppins text-primary ml-[4px] tracking-[0.03em]">Muhammad Umair</h3>
                        <div className=" flex flex-col">
                            <h1 className="text-start text-[100px] font-[700] font-poppins leading-[120%] tracking-[0.03em]">UI & UX </h1>
                            <h1 className="text-end text-[100px] font-[700] font-poppins leading-[120%] tracking-[0.03em]">Designer </h1>
                        </div>
                    </div>

                    <p className="text-[21px] max-w-[698px] w-full pt-[28px]  pl-[7px] pr- font-[400] leading-[100%] tracking-[0.03em] text-justify ">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

                    <Button className="max-w-[188px] w-full h-[52px] mt-[22px] text-[21px] tracking-[0.03em] leading-[100%]" variant="primary">
                        Hire Me
                    </Button>

                </div>
                 {/* banner right  */}   
                <div className="flex flex-col gap-[32px]">
                    {/* profile image  */}
                    <div className="relative">
                        <div className="w-[374px] h-[83px] rounded bg-primary absolute top-[78px]  right-[82px] opacity-[60%]"></div>
                        <img src={ProfileImage} alt="Profile" />
                    </div>

                    {/* social link here */}
                    <SocialLink />
                </div>
            </div>

        </section>
    );
};

export default Banner;