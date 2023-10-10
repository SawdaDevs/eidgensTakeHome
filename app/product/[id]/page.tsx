import Card from "@/components/Card";
import NavigationBar from "@/components/NavigationBar";
import { Product } from "@/types/productTypes";

export default async function ProductPage({ params }: { params: { id: number } }) {
    
        const data = await fetch(`https://dummyjson.com/products/${params.id}`)
        const product:Product = await data.json();

    return (
        <main className='h-screen'>
                <NavigationBar/>
            <section className="w-full h-full flex absolute justify-center p-3">
                <Card productInfo={product}/>
            </section>
        </main>
    );
  }