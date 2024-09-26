import { ReactNode } from "react"

interface NavigationButonProps {
    width: string|number,
    height: string|number,
    maxWidth?: string|number,
    maxHeight?: string|number,
    children?: ReactNode,
}

export default function NavigationButton({
    width,
    height,
    maxWidth,
    maxHeight,
    children
}:NavigationButonProps
) {
    return <>
        <button className="bg-white border-2 border-solid border-gray-300 rounded" style={{width, height, maxWidth, maxHeight}}>
            <div className="flex justify-center">
                {children}
            </div>
        </button>
    </>
}