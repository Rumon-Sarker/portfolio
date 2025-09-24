import SectionHeader from "../SharedSection/SectionHeader";
// import { Button } from "../ui/button";

const Contact = () => {
    return (
        <section id="contact" className="max-w-[932px] mx-auto lg:my-[139px] md:my-[80px] my-[40px] xl:px-0 px-[20px]">
            <SectionHeader title="Lets Design Together" description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />

            <form className="lg:flex lg:flex-row flex-col lg:space-y-0 space-y-[16px] justify-between items-center lg:px-[99px] md:px-[50px] px-0 lg:gap-[25px] md-gap-[20px] gap-[15px] lg:mt-[48px] md:mt-[40px] mt-[35px]">
                <input className="w-full lg:py-[22px] md:py-[18px] py-[12px] lg:h-[75px] md:h-[50px] h-[50px] px-[15px] border-[1px] bg-inputBg border-border rounded-[14px] lg:text-[21px] md:text-[18px] text-[16px] leading-[100%] tracking-[3%] font-poppins" type="email" placeholder="Enter Your Email" />
                <button className="bg-primary lg:max-w-[222px] lg:w-full w-[100px] cursor-pointer  text-white transform duration-600 hover:bg-primary/70 lg:h-[75px] md:h-[50px] h-[50px] md:rounded-[14px] rounded-[5px] font-poppins font-semibold lg:text-[24px] md:text-[18px] text-[14px] text-center leading-[100%] tracking-[3%]">Contact Me</button>
            </form>

        </section>
    );
};

export default Contact;