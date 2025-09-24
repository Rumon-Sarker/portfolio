import { ProfileImage } from "../../assets";
import SocialLink from "../SharedSection/SocialLink";
import { Button } from "../ui/button";

const Banner = () => {
    return (
        <section id="home" className="flex flex-col items-center max-w-[1400px] w-full justify-center mx-auto md:px-0 px-[20px] ">
            <div className="flex lg:flex-row flex-col-reverse items-center justify-between w-full lg:mt-[120px] mt-[20px] pt-[61px]">
                {/* banner left */}
                <div className="flex flex-col">
                    <div className="flex flex-col justify-center max-w-[714px] w-full gap-2 lg:pr-[9px] pr-0">
                        <p className="lg:text-[24px] text-[20px] font-[600] leading-[100%] font-poppins text text-secondary dark:text-white lg:pl-[7px] pl-0 tracking-[0.03em]">Hi I am </p>
                        <h3 className="lg:text-[32px] md:text-[28px] text-[25px] font-[600] text-justify leading-[100%] font-poppins text-primary lg:ml-[4px] ml-0 tracking-[0.03em]">Muhammad Umair</h3>
                        <div className="flex flex-col">
                            <h1 className="text-start lg:text-[100px] dark:text-white text-secondary md:text-[80px] sm:text-[60px] text-[50px] font-[700] font-poppins leading-[120%] tracking-[0.03em]">UI & UX </h1>
                            <h1 className="lg:text-end text-center lg:text-[100px] dark:text-white text-secondary md:text-[80px] sm:text-[60px] text-[50px] font-[700] font-poppins leading-[120%] tracking-[0.03em]">Designer </h1>
                        </div>
                    </div>
                    <p className="lg:text-[21px] md:text-[18px] text-[16px] dark:text-white text-secondary max-w-[698px] w-full lg:pt-[28px] md:pt-[20px] pt-[12px]  lg:pl-[7px] pl-0 font-[400] leading-[100%] tracking-[0.03em] text-justify ">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

                    <Button className="max-w-[188px] cursor-pointer w-full h-[52px] mt-[22px] text-[21px] tracking-[0.03em] leading-[100%]" variant="primary">
                        Hire Me
                    </Button>

                </div>
                {/* banner right  */}
                <div className="flex flex-col lg:gap-[32px] md:gap-[28px] gap-[20px]">
                    {/* profile image  */}
                    <div className="relative  ">
                        <img className="lg:w-[538px] md:w-[400px] relative w-[300px]" src={ProfileImage} alt="Profile" />
                        <div className="lg:w-[374px] md:w-[300px] w-[200px] lg:h-[83px] md:h-[50px] h-[40px] rounded bg-primary absolute xl:top-[78px] md:top-[65px] top-[50px] left-1/2 -translate-x-1/2 opacity-[60%]"></div>

                    </div>

                    {/* social link here */}
                    <SocialLink />
                </div>
            </div>

        </section>
    );
};

export default Banner;