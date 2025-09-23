import SectionHeader from "../SharedSection/SectionHeader";
import { Button } from "../ui/button";

const Contact = () => {
    return (
    <section className="max-w-[932px] mx-auto my-[139px]">
        <SectionHeader title="Lets Design Together" description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />
     
            <form className="flex justify-between items-center px-[99px] gap-[25px] mt-[48px]">
                <input className="w-full py-[22px] h-[75px] px-[26px] border-[1px] border-border rounded-[14px] text-[21px] leading-[100%] tracking-[3%] font-poppins" type="email" placeholder="Enter Your Email" />
                <Button variant="primary" className="max-w-[222px] w-full duration-300 h-[75px] rounded-[14px] font-poppins font-semibold text-[24px] text-center leading-[100%] tracking-[3%]">Contact Me</Button>
            </form>
        
    </section>
    );
};

export default Contact;