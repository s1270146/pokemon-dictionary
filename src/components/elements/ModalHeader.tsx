'use client'

import { ReactNode } from "react";
import { RxCross1 } from "react-icons/rx";

interface ModalHeaderProps {
    children?: ReactNode;
    closeModal: ()=>void;
}

export default function ModalHeader({
    closeModal,
    children,
}: ModalHeaderProps) {
    return <div className="px-4 flex justify-between items-center w-full bg-gray-100" style={{height: "calc((60 / 1280)* 100vw)"}}>
        <div>
            {children}
        </div>
        <div>
            <button onClick={()=>closeModal()}>
                <RxCross1 size={"calc((45 / 1280)* 100vw)"} />
            </button>
        </div>
    </div>
}