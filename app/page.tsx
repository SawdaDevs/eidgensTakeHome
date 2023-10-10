

import NavigationBar from '../components/NavigationBar';
import Card from '@/components/Card';
import { Product } from '@/types/productTypes';


export default async function Home() {
  const data = await fetch('https://dummyjson.com/products?limit=0')
  const productsJSON = await data.json();
  const products = productsJSON.products;
  console.log("this is products", products);

  return (
  <div className='w-screen h-screen p-1 border-1 bg-neutral-50'>
    <main className='h-full'>
      <NavigationBar/>
      <section className='w-full px-2 py-3 flex justify-items-center justify-start'>
        <h1 className=' px-16 text-violet-900 text-3xl font-bold'>
          Items
        </h1>
      </section>
      <section className='w-full px-2 py-1 flex justify-items-center justify-start'>
          <div className='min-w-fit max-w-full mx-1 px-1 flex flex-wrap gap-4 place-content-center'>
            {products.map((product:Product) =>(<Card productInfo={product} key={product.id}/>))}
          </div>
      </section>
    </main>
  </div>
  )
}
