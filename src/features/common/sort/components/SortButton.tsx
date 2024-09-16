import Link from "next/link";
import { sortImagePath } from "@/consts";

export default function SortButton(){
    return <Link href="#" className="ml-1">
        <div className="h-[45px] flex-col items-center">
            <img className="h-[38px]" src={sortImagePath} alt="表示順"/>
        </div>
        <p className="text-xs">表示順</p>
    </Link>
}