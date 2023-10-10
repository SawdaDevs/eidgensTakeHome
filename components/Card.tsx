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
            <div className="flex flex-col border relative border-gray-300 rounded-xl p-2 min-w-fit shadow shadow-gray-300 hover:shadow-md hover:shadow-purple-800/70 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105"
            >
                <div className="h-1/6 p-1 justify-start">
                    <h2 className="text-gray-600 justify-start line-clamp-1 text-2xl font-semibold indent-0.5 p-1">
                        {props.productInfo.title}
                    </h2>
                </div>
                <div className="h-1/6 p-1 ">
                    <p className="text-gray-800 text-sm font-thin line-clamp-2 break-words leading-snug p-1">
                        {props.productInfo.description}
                    </p>
                </div>
                <div className="h-4/6 w-full flex justify-center justify-items-center relative p-3">
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
        <div className="flex flex-col shrink w-full h-full min-w-min min-h-min border border-gray-300 rounded-xl shadow-md p-1 text-ellipsis overflow-hidden hover:shadow-md hover:shadow-purple-800/70 relative">
            <div className="h-1/6 p-1  text-gray-600 flex flex-row justify-between relative">
            <div className="p-3 w-2/3">
                <h1 className="justify-start text-3xl drop-shadow-md font-semibold indent-0.5">
                    {props.productInfo.title}
                </h1>
                <h3 className="text-xs font-thin indent-1">
                    {props.productInfo.brand}
                </h3>
            </div>
            <div className="p-3 w-1/3 h-full max-w-full flex flex-col flex-shrink border rounded-xl border-gray-100/50 place-content-center place-items-center shadow text-ellipsis overflow-hidden">
                <h3 className="text-xs sm:text-xl">
                    Price £{props.productInfo.price}
                </h3>
                <p className="font-thin line-through text-gray-600/50 text-xs sm:text-lg">
                Original: {Math.floor(props.productInfo.price * (1 + (props.productInfo.discountPercentage/100)))}
                </p>
            </div>
            </div>
            <div className="h-1/6 flex flex-col w-full p-2 text-gray-800 ">
                <p className="h-1/2 text-xs p-1 text-ellipsis overflow-scroll">
                    {props.productInfo.description}
                </p>
                <p className="h-1/2 text-xs font-light text-right p-1">
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
    )
}