interface SafeMesgProps {
    text1: string;
    text2: string
}
const SafeMesg: React.FC<SafeMesgProps> = ({text1, text2}) => {
    return <>
        <div className="mt-6 px-3 flex items-center gap-2">
            <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.761 0-5 2.239-5 5v1h10v-1c0-2.761-2.239-5-5-5z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h18v18H3z"
                />
            </svg>
            <div>
                <p className="text-sm font-semibold text-gray-700">{text1}</p>
                <p className="text-xs text-gray-500">{text2}</p>
            </div>
        </div>
    </>
}

export default SafeMesg