import Link from "next/link";
import Image from "next/image";
import { sortImagePath } from "@/consts";

export default function SortButton(){
    return <Link href="#" className="ml-2">
        <div className="h-[45px]">
            <Image src={sortImagePath} alt="表示順" width={50} height={38}/>
        </div>
        <p className="text-xs">表示順</p>
    </Link>
}