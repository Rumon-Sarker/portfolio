import SectionHeader from "../SharedSection/SectionHeader";
import { Project1 } from "../../assets";
import { useMemo, useState } from "react";
type Project = {
    id: number;
    title: string;

    category: string;
    imageUrl: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'AirCalling Landing Page Design ',

        category: 'UI/UX',
        imageUrl: Project1,
    },
    {
        id: 2,
        title: 'Business Landing Page Design ',

        category: 'Web Design',
        imageUrl: Project1,
    },
    {
        id: 3,
        title: 'Ecom Web Page Design',
        category: 'App Design',
        imageUrl: Project1,
    },
    {
        id: 4,
        title: 'Web page Desin',
        category: 'Graphic Design',
        imageUrl: Project1,
    },

]

const categories = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'] as const;
type Category = typeof categories[number]


const Projects = () => {

    const [active, setActive] = useState<Category>("All");

    const filter = useMemo(() => (active === "All" ? projects : projects.filter(p => p.category === active)), [active])

    return (
        <section id="projects" className="max-w-[1423px] mx-auto w-full lg:mt-[139px] md:mt-[80px] mt-[60px] xl:px-0 px-[20px] ">
            <SectionHeader title="My Projects" description="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus" />
            {/* tab section  */}

            {/* Filter tabs */}
            <div
                role="tablist"
                aria-label="Project categories"
                className="flex flex-wrap xl:gap-[22px] lg:gap-[16px] md:gap-[14px] gap-[8px] justify-center mt-[59px]"
            >
                {categories.map(cat => {
                    const selected = active === cat;
                    return (
                        <button
                            key={cat}
                            role="tab"
                            aria-selected={selected}
                            onClick={() => setActive(cat)}
                            className={[
                                "whitespace-nowrap rounded-[12px] cursor-pointer  hover:text-white px-[20px] py-[10px] text-[15px] font-medium transition-colors leading-[100%] tracking-[0.6px]",
                                "border",
                                selected
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white text-secondary border-[0.4px] border-border  transform duration-500 hover:bg-primary hover:border-primary"
                            ].join(" ")}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>


            {/* project grid */}
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[44px] md:gap-[32px] gap-[28px] lg:mt-[106px] md:mt-[60px] mt-[40px]">
                {filter.map((project) => (
                    <div key={project.id} className="max-w-[445px] cursor-pointer flex flex-col lg:mx-0 mx-auto w-full rounded-lg ">
                        <img src={project.imageUrl} alt={project.title} className="w-full" />
                        <div>
                            <p className="lg:text-[19px] text-[16px] leading-[100%] tracking-[3%] font-normal text-primary font-poppins mt-[37px]">{project.category}</p>
                            <h2 className="lg:text-[24px] md:text-[20px] text-[18px] font-bold text-secondary dark:text-white leading-[100%] tracking-[3%] font-poppins mt-[10px]">{project.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Projects;