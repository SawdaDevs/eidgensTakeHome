import Card from "@/components/Card";
import NavigationBar from "@/components/NavigationBar";
import { Product } from "@/types/productTypes";

export default async function ProductPage({ params }: { params: { id: number } }) {

    const getProduct = async ():Promise<Product> =>{
        const data = await fetch(`https://dummyjson.com/products/${params.id}`)
        const products = await data.json();
        console.log(products);
        return products;
    };

    console.log('\n', getProduct())
    const product = await getProduct()

    return (
        <main className='h-screen'>
                <NavigationBar/>
            <section className="h-screen container p-3">
                <Card productInfo={product}/>
            </section>
        </main>
    );
  }