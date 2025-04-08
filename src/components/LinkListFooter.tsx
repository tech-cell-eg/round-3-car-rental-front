interface LinkListProps {
    title: string;
    items: string[];
}
const LinkListFooter = ({ title, items }: LinkListProps) => (
    <div>
        <h3 className="pb-4 sm:pb-7 font-medium text-lg sm:text-[20px]">{title}</h3>
        <ul className="flex flex-col gap-3 text-gray-500 text-sm sm:text-base">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

export default LinkListFooter;