'use client'

import Image from "next/image";
import Link from  "next/link";
import { Product } from "@/types/productTypes";
import { usePathname } from 'next/navigation'


export default function Card(props: {productInfo:Product} ) {
    const isHome = usePathname() === '/';
    return(
        isHome ?
        <div>
            <Link href={`/product/${props.productInfo.id}`}>
            <div className=" flex flex-col  w-52 h-60 p-2 min-w-fit shadow shadow-gray-300 hover:shadow-xl hover:shadow-purple-800/10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 border rounded-xl relative border-gray-300 "
            >
                <div className="h-1/6 p-1 justify-start">
                    <h2 className="text-purple-800 justify-start line-clamp-1 text-2xl font-semibold indent-0.5 p-1">
                        {props.productInfo.title}
                    </h2>
                </div>
                <div className="h-1/6 p-1 ">
                    <p className="text-gray-800 text-sm  font-thin line-clamp-2 break-words leading-snug p-1">
                        {props.productInfo.description}
                    </p>
                </div>
                <div className=" h-4/6 w-full flex justify-center justify-items-center relative p-3">
                <div className="w-full h-full relative p-1 img-wrapper drop-shadow-md">
                    <Image className="max-h-full rounded"
                        alt={props.productInfo.title}
                        layout="fill"
                        fill={true}
                        src={props.productInfo.thumbnail}
                        quality={100}
                        sizes="max-h-full"
                    />
                </div>

                </div>


            </div>
            </Link>

        </div>
        :
        <>
            <div className=" aspect-square border rounded-lg text-blue-900 border-violet-500/20 p-1">
                <div className="h-1/6 p-1">
                    <h2 className="justify-start text-2xl text-blue-900 font-semibold indent-0.5 p-1">
                        {props.productInfo.title}
                    </h2>
                    <h3>
                        Category: {props.productInfo.category}
                    </h3>
                    <h3>
                        Rating {props.productInfo.rating}
                    </h3>
                    <h3>
                        Rating {props.productInfo.price} + {props.productInfo.discountPercentage}
                    </h3>
                </div>
                <div className="h-1/6 p-1">
                    <p className=" text-sm font-thin  text-blue-900 leading-snug p-1">
                        {props.productInfo.description}
                    </p>
                </div>
                <div className=" h-4/6 p-1.5">
                    <Image 
                        alt={props.productInfo.title}
                        height={100}
                        src={props.productInfo.thumbnail}
                        width={40}
                    />
                </div>
            </div>
            
        </>
    )
}