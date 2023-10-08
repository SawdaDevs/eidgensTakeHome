import Image from 'next/image'
import NavigationBar from '../components/NavigationBar'

export default function Home() {
  return (
  <div>
    <main className='h-screen'>
      <NavigationBar/>
      <div className=' h-full bg-blue-200 text-black'>
        <h1>Items</h1>
      </div>
    </main>
    
  </div>
  )
}
