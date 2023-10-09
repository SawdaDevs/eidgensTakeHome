import Home from "@/app/page";
import Image from "next/image";
import Link from  "next/link";
import { Product } from "@/types/productTypes";


export default async function Card(props: { productInfo:Product } ) {

    return(
        (await Home())?
        <>
            <Link href={`/product/${props.productInfo.id}`}>
            <div className="  aspect-square mx-auto p-auto w-full h-full min-w-fit min-h-fit border rounded-lg border-violet-500/20 p-1"
            >
                <h2 className="h-1/6 flex justify-start line-clamp-1  break-words text-2xl text-blue-900 font-semibold indent-0.5 p-1">{props.productInfo.title}</h2>
                <div className="flex h-1/6 line-clamp-1 break-words">
                <p className=" text-sm font-thin text-blue-900 leading-snug p-1">{props.productInfo.description}</p>

                </div>
                <div className="flex h-4/6  w-5/6 max-h-full max-w-full justify-center p-1.5">
                <Image 
                    alt={props.productInfo.title}
                    height={100}
                    src={props.productInfo.images[0]}
                    width={40}
                />
                </div>

            </div>
            </Link>

        </>
        :
        <>
            <p>Bye</p>
        </>
    )
}