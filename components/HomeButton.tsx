import Home from "@/app/page";
import Link from "next/link";

export default function HomeButton() {
    return (
        <Link
            href='/'
        >
            <button className=" bg-purple-800 rounded-full w-32 h-10"> Go back home</button>
        </Link>
        
    )


}