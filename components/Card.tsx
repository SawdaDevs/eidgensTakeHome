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
            <div className=" flex flex-col w-52 h-60 border border-gray-300 rounded-xl p-2 min-w-fit shadow shadow-gray-300 hover:shadow-md hover:shadow-purple-800/70 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 relative"
            >
                <div className="h-1/6 p-1 justify-start">
                    <h2 className="text-gray-600 justify-start line-clamp-1 text-2xl font-semibold drop-shadow-md  indent-0.5 p-1">
                        {props.productInfo.title}
                    </h2>
                </div>
                <div className="h-1/6 p-1 ">
                    <p className="text-gray-800 text-sm font-thin line-clamp-2 break-words leading-snug p-1">
                        {props.productInfo.description}
                    </p>
                </div>
                <div className=" h-4/6 w-full flex justify-center justify-items-center relative p-3">
                    <div className="w-full h-full relative p-1 img-wrapper drop-shadow-md">
                        <Image className="max-h-full rounded"
                            alt={props.productInfo.title}
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
            <div className=" flex flex-col w-100 min-w-fit min-h-fit h-5/6 border border-gray-300 rounded-xl shadow-md p-1 text-ellipsis overflow-hidden">
                <div className="h-1/6 p-1  text-gray-600 flex flex-row justify-between">
                <div className="p-3 w-2/3 ">
                    <h1 className="justify-start text-3xl drop-shadow-md font-semibold indent-0.5">
                        {props.productInfo.title}
                    </h1>
                    <h3 className="text-xs font-thin indent-1">
                    {props.productInfo.brand}
                    </h3>
                </div>
                <div className="p-3 w-1/3 border rounded-xl border-gray-100/50 flex place-self-center shadow">
                    <h3 className="p-3 text-right">
                        Price {props.productInfo.price} + {props.productInfo.discountPercentage}%
                    </h3>
                </div>

                </div>
                <div className="h-1/6 p-2 text-gray-800 ">
                    <p className=" text-md font-light p-3 text-center">
                        {props.productInfo.description}
                    </p>
                    <p className=" text-md font-light text-right p-3">
                        Rating: {props.productInfo.rating}/5
                    </p>
                </div>
                <div className=" h-4/6 w-full flex justify-center justify-items-center relative p-3">
                <div className="w-full h-full relative p-1 img-wrapper">
                    <Image className="max-h-full rounded"
                        alt={props.productInfo.title}
                        fill={true}
                        src={props.productInfo.thumbnail}
                        quality={100}
                        sizes="max-h-full"
                    />
                </div>
            </div>
            </div>
            
        </>
    )
}