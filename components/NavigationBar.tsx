import Link from 'next/link';

export default function NavigationBar() {
  return (
    <div className='h-1/6' >
      {/* <div className="w-full h-24 bg-purple-900 sticky top-0"> */}
        <div className=" w-full h-full bg-purple-900 sticky top-0 rounded mx-auto px-4 ">
          <div className="flex justify-between items-center h-full">
            <h1 className ="text-white text-lg"> eidgens Take Home Challenge</h1>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>{'Sawda\'s Take Home Test'}</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}


