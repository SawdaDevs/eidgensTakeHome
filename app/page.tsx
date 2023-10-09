

import NavigationBar from '../components/NavigationBar';
import Card from '@/components/Card';
import { Product } from '@/types/productTypes';
const getProducts = async():Promise<Product[]| any> =>{
  const data = await fetch('https://dummyjson.com/products')
  const products = await data.json();
  console.log(products);
  return products;
};

const Products = async():Promise<JSX.Element>=>{
  const response = await getProducts();
  const products = response.products;

  console.log('this is prds', products)
  return(
    <div className=' absolute h-full w-full justify-between grid grid-cols-7  gap-3 '>
      {products.map((product:Product) => (
        <Card productInfo={product} key={product.id}/> 
      ))}
    </div>
  )
}

export default async function Home() {
  return (
  <div>
    <main className='h-screen'>
      <NavigationBar/>
      <section className=' w-full mx-auto justify-end'>
        <h1 className='text-violet-900 text-4xl font-extrabold'>Items</h1>
      </section>
      <section>
      <div className=' h-full w-full'>
          <Products/>
        </div>
      </section>

    </main>
    
  </div>
  )
}
