
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
        <section className="max-w-[1470px] flex  justify-between w-full h-[675px] mt-[69.50px] mx-auto">
            <div className="max-w-[681px] w-full h-auto relative">
                <img src={AboutImage} alt="About Image" />
                <div className="w-[374px] h-[83px] rounded bg-primary absolute top-[111px] left-[153px] opacity-[60%]"></div>
            </div>
            <div className="flex flex-col justify-center  w-full h-auto pr-[100px] pl-[50px]">
                <h2 className="text-[65px] font-popins  font-bold tracking-[0.03em] text-secondary">About Me</h2>
                <p className=" text-[21px] w-full font-normal font-popins tracking-[0.03em] mt-[15px]">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
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
                    <ul className="mt-[10px] flex flex-col gap-[15px]">
                        {Skills.map((skill) => (
                            <li key={skill.name} className="flex flex-col gap-[18px]">
                                <h2 className="text-[24px] font-bold text-secondary font-popins tracking-[0.03em]">{skill.name}</h2>
                                <div className="relative h-[12px] w-full rounded-full bg-[#EDECEC]">
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
                                        <div className="relative h-[32px] w-[32px] rounded-full bg-white border-2 border-[#ff7a00]" />
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