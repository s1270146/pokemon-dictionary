import { ReactNode } from "react";

interface ButtonProps {
    isSelected: boolean;
    onClick: ()=>void;
    children?: ReactNode;
    isDecision?: boolean;
    width?: string;
    height?: string;
}

export default function Button({
        onClick,
        isSelected=false,
        children,
        isDecision=false,
        width="200px",
        height="50px"
    }: ButtonProps) {
    return (
        <div 
            style={{
                width,
                height,
            }}
        >
            <div 
                className={`
                    w-full h-full rounded-full
                    ${isDecision ? `bg-red-900` : `bg-gray-300`}
                `}
            >
                <button
                    onClick={()=>onClick()}
                    className={`
                        px-4 py-2 w-full h-full text-black rounded-full border-2
                        transform transition
                        ${isSelected && !isDecision
                            ? 'border-yellow-500' 
                            : '-translate-x-1 -translate-y-1 border-gray-300 hover:translate-x-0 hover:translate-y-0'
                        }
                        ${isDecision ? `bg-red-600 border-red-600`: isSelected ? 'bg-yellow-50' : 'bg-white' }
                    `}
                    >
                        {children}
                </button>
            </div>
        </div>
    );
}