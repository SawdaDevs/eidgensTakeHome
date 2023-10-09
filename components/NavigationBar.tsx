import Link from 'next/link';

export default function NavigationBar() {
  return (
    <div className='h-1/6' >
        <div className=" w-full h-full bg-violet-900/75 sticky top-0 rounded mx-auto px-4 ">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <h1 className ="text-white text-xl font-bold"> eidgens Take Home Challenge</h1>
            </Link>
            
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>{'Sawda\'s Take Home Test'}</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}


