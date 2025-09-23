import SectionHeader from "../SharedSection/SectionHeader";
import { Project1 } from "../../assets";
import { Button } from "../ui/button";
import { useState } from "react";
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

]

const Projects = () => {

    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);



    const categories = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'];


    const handleCategoryClick = (category: string) => {
        if (category === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter((project) => project.category === category));
        }
    };

    return (
        <section className="max-w-[1423px] mx-auto w-full mt-[139px]">
            <SectionHeader title="My Projects" description="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus" />
            {/* tab section  */}
            <div className="flex overflow-x-auto gap-[22px] justify-center mt-[59px] ">
                {categories.map((category) => (
                    <Button key={category} variant="outline" size="lg" className="px-[20px] hover:bg-primary hover:text-white  py-[10px] rounded-[12px] border text-[16px] font-[500] font-poppins leading-[100%] tracking-[0.6px]" onClick={() => handleCategoryClick(category)}>{category}</Button>

                ))}
            </div>

            {/* project grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[44px] mt-[106px]">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="max-w-[445px] w-full rounded-lg">
                        <img src={project.imageUrl} alt={project.title} className="w-full" />
                        <div>
                            <p className="text-[19px] leading-[100%] tracking-[3%] font-normal text-primary font-poppins mt-[37px]">{project.category}</p>
                            <h2 className="text-[24px] font-bold text-secondary leading-[100%] tracking-[3%] font-poppins mt-[10px]">{project.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Projects;