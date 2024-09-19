import Link from "next/link";
import Image from "next/image";
import { searchImagePath } from "@/consts";

export default function SearchButton (){
    return <Link href="#" className="ml-2">
        <div className="h-[45px]">
            <Image src={searchImagePath} alt="検索" height={40} width={40}/>
        </div>
        <p className="text-xs">検索</p>
    </Link>
}