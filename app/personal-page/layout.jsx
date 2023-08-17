

import Link from 'next/link';
import Image from 'next/image';

const PersonalLayout =({ children })=>{
    return (
      <div className="grid grid-cols-4 w-full h-screen ">
        <div className="col-span-1 flex flex-col bg-gray-800 p-4  bg-opacity-20 justify-items-end">
            <Image src="/assets/icons/logo-no-background.png" alt="logo" width={90} height={90} className="mb-16 ml-32 "/>
            <Link href="/personal-page" className="text-white py-2 hover:bg-gray-700 transition duration-300">My Dictionary</Link>
            <Link href="/add-word" className="text-white py-2 hover:bg-gray-700 transition duration-300">Add New Word</Link>
            <Link href="tests" className="text-white py-2 hover:bg-gray-700 transition duration-300">Tests</Link>
            <Link href="profile" className="text-white py-2 hover:bg-gray-700 transition duration-300">My Profile</Link>
            <Link href="/" className="text-white py-2 hover:bg-gray-700 transition duration-300">Sign Out</Link>
        </div>
      <div className="col-span-3 p-4 flex flex-col gap-20">
        <div >
           <p className="text-center">Welcome, Name!</p>
        </div>
        <div>
          {children}  
        </div> 
      </div>
    </div>
    )
  }
  
  export default PersonalLayout;