import Link from "next/link";
import { logoPath } from "@/consts";

export default function Logo(){
    return <h1 className="w-[196.9px]">
        <Link href="#">
            <img className="h-auto" src={logoPath} alt="ポケモン図鑑"/>
        </Link>
    </h1>
}