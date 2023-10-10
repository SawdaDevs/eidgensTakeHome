import Link from 'next/link';

export default function NavigationBar() {
  return (
    <div className=' bg-violet-900/10'>
        <div className='h-20 min-w-fit max-w-full bg-violet-900/75 border-4 border-gray-300 rounded-full'>
           <div className=" w-full h-full p-4 flex justify-between items-center">
              <Link href="/">
                <h1 className ="text-white text-xl font-bold text-center"> Eidgens Take Home Challenge</h1>
              </Link>
              <Link href="/">
                <p className="hidden md:flex gap-x-6 text-white">
                  {'Sawda\'s Take Home Test'}
                </p>
              </Link>
          </div>
        </div>
    </div>
  );
}


