type SectionHeaderProps = {
    title: string;
    description: string;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
    return (
        <div className="max-w-[932px] mx-auto items-center flex flex-col h-auto w-full">
            <h2 className="lg:text-[65px] md:text-[50px] sm:text-[40px] text-[25px] font-poppins font-[600] tracking-[0.03em] text-secondary dark:text-white">{title}</h2>
            <p className="font-poppins lg:text-[21px] md:text-[18px] text-[16px] font-normal leading-[100%] tracking-[0.03em] text-secondary dark:text-white text-center w-full mt-[15px]">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;