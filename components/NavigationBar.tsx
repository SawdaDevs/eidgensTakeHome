import Link from 'next/link';

export default function NavigationBar() {
  return (
        <div className='h-1/6 w-full bg-gradient-to-r from-purple-800 to bg-gray-300/50 border-4 border-gray-300'>
           <div className=" w-full h-full p-4 flex justify-between items-center overflow-scroll">
              <Link href="/">
                <h1 className ="text-white text-4xl font-bold text-center"> Eidgens Take Home Challenge</h1>
              </Link>
              <Link href="/">
                <p className="hidden md:flex gap-x-6 text-white">
                  {'Sawda\'s Take Home Test'}
                </p>
              </Link>
          </div>
        </div>
  );
}


