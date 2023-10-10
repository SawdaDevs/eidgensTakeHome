import HomeButton from "@/components/HomeButton";
import Card from "@/components/Card";
import NavigationBar from "@/components/NavigationBar";
import { Product } from "@/types/productTypes";

export default async function ProductPage({ params }: { params: { id: number } }) {
    
        const data = await fetch(`https://dummyjson.com/products/${params.id}`)
        const product:Product = await data.json();

    return (
        <main className='h-screen'>
                <NavigationBar/>
            <section className="w-full h-full flex flex-col flex-initial absolute p-3">
                <div className="w-5/6 h-5/6 content-center self-center">
                    <Card productInfo={product}/>
                </div>
                <div className="w-full h-1/6 ">
                    <HomeButton/>
                </div>
            </section>
        </main>
    );
  }