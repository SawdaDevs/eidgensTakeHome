
import { Key } from 'react';
import NavigationBar from '../components/NavigationBar'
type Product = {
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: string[],
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
  title: string
}
type APIResponse = {
  "products":Product[]
}
const getProducts = async():Promise<Product[]| any> =>{
  const data = await fetch('https://dummyjson.com/products')
  const products = await data.json();
  console.log(products);
  return products;
};

const Products = async ()=>{
  const response = await getProducts();
  const products = response.products;

  console.log('thiss is prds', products)
  return(
    <ul>
    {products.map((product:Product) => (
      <li key={product.id}>{product.title}</li>
    ))}
  </ul>
  )
}
export default async function Home() {
  return (
  <div>
    <main className='h-screen'>
      <NavigationBar/>
      <div className=' h-full bg-blue-200 text-black'>
        <h1>Items</h1>
        <Products/>
      </div>
    </main>
    
  </div>
  )
}
