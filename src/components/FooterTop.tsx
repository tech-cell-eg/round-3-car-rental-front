import LinkListFooter from "./LinkListFooter";




const FooterTop = () => {
    interface Link {
        about: string[],
        company: string[],
        socials: string[],
        
    }

    const links: Link = {
        about: [
            "How it works",
            "Features",
            "Partnership",
            "Business Relation"
        ],
        company: [

            "Events",
            "Blog",
            "Podcast",
            "Invite a friend"
        ],
        socials: [
            "Discord",
            "Instagram",
            "Twitter",
            "Facebook"
        ]
    };



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-b border-gray-200">
            <div>
                <h1 className="text-2xl sm:text-3xl font-semibold pb-3 text-blue-700">MORENT</h1>
                <p className="text-gray-500 text-sm sm:text-base">
                    Our vision is to provide convenience <br /> and help increase your sales business.
                </p>
            </div>

            <div className="mb-7">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 md:mb-0">
                    {Object.entries(links).map(([key, value]) => (
                        
                            <LinkListFooter
                                key={key}
                                title={key.charAt(0).toUpperCase() + key.slice(1)}    
                                items={value}
                            />
                        
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterTop;