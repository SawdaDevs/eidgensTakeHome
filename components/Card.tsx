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
            <div className="w-52 h-60 min-w-fit text-blue-900 border rounded-lg border-violet-500/20 p-1"
            >
                <div className="h-1/6 p-1">
                    <h2 className="justify-start line-clamp-1  break-words text-2xl font-semibold indent-0.5 p-1">{props.productInfo.title}</h2>
                </div>
                <div className="h-1/6">
                    <p className=" text-sm font-thin line-clamp-1 break-words leading-snug p-1">{props.productInfo.description}</p>
                </div>
                <div className="h-4/6  w-5/6 max-h-full max-w-full justify-center p-1.5">
                <Image 
                    alt={props.productInfo.title}
                    height={100}
                    src={props.productInfo.thumbnail}
                    width={40}
                />
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