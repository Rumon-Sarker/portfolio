
// import { useEffect, useState } from "react";
import { AboutImage } from "../../assets";

const About = () => {

    const Skills: { name: string; level: number }[] = [
        { name: "UX", level: 90 },
        { name: "Website Design", level: 80 },
        { name: "App Design ", level: 85 },
        { name: "Graphic Design ", level: 75 },

    ];

    // const [animate, setAnimate] = useState(false);
    // useEffect(() => {
    //     const t = setTimeout(() => setAnimate(true), 50);
    //     return () => clearTimeout(t);
    // }, []);


    return (
        <section id="about" className="max-w-[1470px] flex lg:flex-row flex-col justify-between w-full h-auto mt-[69.50px] mx-auto md:px-0 px-[20px]">
            <div className="max-w-[681px] flex justify-center w-full h-auto relative mx-auto">
                <img className="lg:w-[681px] md:w-[400px] relative w-[300px]" src={AboutImage} alt="About Image" />
                <div className="lg:w-[374px] md:w-[300px] w-[200px] lg:h-[83px] md:h-[50px] h-[40px] rounded bg-primary absolute lg:top-[111px] md:top-[60px] top-[40px] -translate-x-1/2 left-1/2 opacity-[60%]"></div>
            </div>
            <div className="flex flex-col justify-center  w-full h-auto lg:pr-[100px] pr-0 lg:pl-[50px] pl-0 lg:mt-0 mt-[30px]">
                <h2 className="lg:text-[65px] md:text-[50px] sm:text-[40px] text-[30px] font-poppins font-bold tracking-[0.03em] text-secondary">About Me</h2>
                <p className=" lg:text-[21px] md:text-[18px] text-[16px] w-full font-normal font-poppins tracking-[0.03em] mt-[15px]">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <div>

                    {/* <ul className="mt-[10px] flex flex-col gap-[15px]">
                        {Skills.map((skill) => (
                            <li key={skill.name} className="flex flex-col gap-[18px]">
                                <h3 className="text-[24px] font-poppins font-semibold text-secondary tracking-[3%]">
                                    {skill.name}
                                </h3>

                                <div className="relative h-[12px] w-full rounded-full bg-[#EDECEC]">

                                    <div
                                        className="h-full rounded-full bg-[#ff7a00] transition-[width] duration-1000 ease-out"
                                        style={{ width: animate ? `${skill.level}%` : "0%" }}
                                        aria-hidden
                                    />

                                    <div
                                        className="absolute top-1/2 -translate-y-1/2 transition-[left] duration-1000 ease-out"
                                        style={{ left: animate ? `calc(${skill.level}% - 16px)` : "-16px" }}
                                        aria-hidden
                                    >
                                        <div className="relative h-8 w-8 rounded-full bg-white border-2 border-[#ff7a00]" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul> */}
                    <ul className="mt-[10px] flex flex-col lg:gap-[15px] md:gap-[10px] gap-[8px]">
                        {Skills.map((skill) => (
                            <li key={skill.name} className="flex flex-col lg:gap-[18px] md:gap-[15px] gap-[10px]">
                                <h2 className="lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] font-bold text-secondary font-poppins tracking-[0.03em]">{skill.name}</h2>
                                <div className="relative lg:h-[12px] md:h-[10px] h-[8px] w-full rounded-full bg-[#EDECEC]">
                                    <div
                                        className="h-full rounded-full bg-[#ff7a00] transition-[width] duration-700 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                        aria-hidden
                                    />
                                    <div
                                        className="absolute top-1/2 -translate-y-1/2"
                                        style={{ left: `calc(${skill.level}% - 12px)` }}
                                        aria-hidden
                                    >
                                        <div className="relative lg:h-[32px] md:h-[28px] h-[20px] lg:w-[32px] md:w-[28px] w-[20px] rounded-full bg-white border-2 border-[#ff7a00]" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div >
            </div >
        </section >
    );
};

export default About;