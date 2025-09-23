import SectionHeader from "../SharedSection/SectionHeader";
// import { Button } from "../ui/button";

const Contact = () => {
    return (
        <section id="contact" className="max-w-[932px] mx-auto lg:my-[139px] md:my-[100px] my-[70px] lg:px-0 px-[20px]">
            <SectionHeader title="Lets Design Together" description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />

            <form className="flex justify-between items-center lg:px-[99px] md:px-[50px] px-0 lg:gap-[25px] md-gap-[20px] gap-[15px] mt-[48px]">
                <input className="w-full lg:py-[22px] md:py-[18px] py-[12px] lg:h-[75px] md:h-[50px] h-[50px] px-[26px] border-[1px] border-border rounded-[14px] lg:text-[21px] md:text-[18px] text-[16px] leading-[100%] tracking-[3%] font-poppins" type="email" placeholder="Enter Your Email" />
                <button className="bg-primary max-w-[222px] w-full text-white duration-300 lg:h-[75px] md:h-[50px] h-[50px] rounded-[14px] font-poppins font-semibold lg:text-[24px] md:text-[18px] text-[16px] text-center leading-[100%] tracking-[3%]">Contact Me</button>
            </form>

        </section>
    );
};

export default Contact;