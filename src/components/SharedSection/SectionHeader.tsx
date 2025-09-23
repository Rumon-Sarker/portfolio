type SectionHeaderProps = {
    title: string;
    description: string;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
    return (
        <div className="max-w-[932px] mx-auto items-center flex flex-col h-auto w-full">
            <h2 className="text-[65px] font-poppins font-[600] tracking-[0.03em] text-secondary">{title}</h2>
            <p className="font-poppins text-[21px] font-normal leading-[100%] tracking-[0.03em] text-center w-full mt-[15px]">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;