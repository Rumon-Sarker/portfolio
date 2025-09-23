import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../SharedSection/SectionHeader";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

type Testimonial = {
    id: number;
    name: string;
    role?: string;
    profilePic?: string;
    feedback: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "John Doe",
        role: "CEO, Company Inc.",
        profilePic: "/image/testimonial/client1.png",
        feedback: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Marketing Manager, Business Co.",
        profilePic: "/image/testimonial/client2.png",
        feedback: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
    },
    {
        id: 3,
        name: "Mike Johnson",
        role: "Freelancer",
        profilePic: "/image/testimonial/client1.png",
        feedback: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
    }
];

const Testimonials = () => {


    return (
        <section className=" w-full mt-[139px]">
            <SectionHeader title="Testimonials" description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />

            {/* carousel testimonial slider */}

            <div className="relative ">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={62}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet !w-[57px] !h-[16px] !rounded-[8px] !bg-muted-foreground !opacity-10",
                    bulletActiveClass: "swiper-pagination-bullet-active !bg-primary !opacity-100",
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    }}
                    className="testimonials-swiper !pb-[87px]"
                >
                    {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                       <div className="max-w-[1087px] rounded-[14px] bg-[#F8F8F8] w-full mx-auto mt-[72px]">
                            <div className="flex w-full py-[53px] pr-[77px] pl-[48px] justify-between items-center gap-[29px]">
                                <div className="max-w-[235px] h-[235px] w-full rounded-full overflow-hidden flex-shrink-0">
                                    <img src={testimonial.profilePic} alt={testimonial.name} />
                                </div>
                                <div className="flex flex-col gap-[21px]">
                                    <p className="text-justify font-poppins font-normal text-[21px] text-[#424242] leading-[100%] tracking-[3%]">{testimonial.feedback}</p>
                                    <h4 className="text-[24px] font-medium font-poppins leading-[100%] tracking-[3%] text-justify">{testimonial.name}</h4>
                                    <h2 className="text-[19px] text-gray-600 font-poppins leading-[100%] tracking-[3%] text-justify">{testimonial.role}</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </section>
    );
};

export default Testimonials;