import SectionHeader from "../SharedSection/SectionHeader";

// type Testimonial = {
//     id: number;
//     name: string;
//     profilePic?: string;
//     feedback: string;
// };

// const testimonials: Testimonial[] = [
//     {
//         id: 1,
//         name: "John Doe",
//         profilePic: "path/to/john.jpg",
//         feedback: "This company provided excellent service and support throughout our project. Highly recommend!"
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         profilePic: "path/to/jane.jpg",
//         feedback: "Professional and reliable team. They delivered everything on time and exceeded our expectations."
//     },
//     {
//         id: 3,
//         name: "Mike Johnson",
//         profilePic: "path/to/mike.jpg",
//         feedback: "Great experience from start to finish. The team was knowledgeable and easy to work with."
//     }
// ];

const Testimonials = () => {


    return (
        <section className=" w-full mt-[139px]">
            <SectionHeader title="Testimonials" description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />

            {/* carousel testimonial slider */}

            <div className="max-w-[1087px] w-full mx-auto mt-[72px]">
                <div className="flex justify-between items-center gap-5">
                    <img src="path/to/john.jpg" alt="John Doe" />
                    <div>
                        <span className="text-primary text-[32px]">"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <span className="text-primary text-[32px]">"</span>
                        <h1 className="text-[24px] font-semibold">Name</h1>
                        <h2 className="text-[20px] text-gray-600">CEO</h2>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Testimonials;