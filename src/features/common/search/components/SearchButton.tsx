import Link from "next/link";
import { searchImagePath } from "@/consts";

export default function SearchButton (){
    return <Link href="#" className="ml-1">
        <div className="h-[45px] flex-col items-center">
            <img className="h-[44.1px]" src={searchImagePath} alt="検索"/>
        </div>
        <p className="text-xs">検索</p>
    </Link>
}