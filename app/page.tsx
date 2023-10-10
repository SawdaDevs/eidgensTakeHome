

import NavigationBar from '../components/NavigationBar';
import Card from '@/components/Card';
import { Product } from '@/types/productTypes';


export default async function Home() {
  const data = await fetch('https://dummyjson.com/products?limit=0')
  const productsJSON = await data.json();
  const products = productsJSON.products;
  console.log("this is products", products);

  return (
  <div className='w-screen h-screen'>
    <main className='h-full'>
      <NavigationBar/>
      <section className='w-full mx-10 my-3 justify-start'>
        <h1 className='text-violet-900 text-4xl font-extrabold'>Items</h1>
      </section>
      <section className=''>
        <div className='min-w-fit m-2'>
          <div className=' w-full mx-10 my-2 flex flex-wrap gap-4 justify-items-center'>
            {products.map((product:Product) =>(<Card productInfo={product} key={product.id}/>))}
          </div>
        </div>

      </section>

    </main>
    
  </div>
  )
}
