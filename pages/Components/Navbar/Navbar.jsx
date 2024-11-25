import React, { useState } from 'react';
import Link from 'next/link';

export default function Index() {
  const [show, setShow] = useState(false);
  
  
  const handleShow = () => setShow(!show);

  return (
    <>
      <div className="hidden md:block">
        <nav className="flex justify-end items-center bg-gray-400 w-full h-16 px-4">
          <ul className="flex space-x-6 text-white text-lg ">
            <Link href="/Components/form">
              <li className="hover:text-gray-200">Menu</li>
            </Link>
            <li className="hover:text-gray-200">About</li>
            <li className="hover:text-gray-200">Contact</li>
          </ul>
        </nav>
      </div>

      <div className="md:hidden flex justify-end items-center px-4 p-4 bg-gray-400">
     
        <button className="flex justify-end items-end" onClick={handleShow}>
          {show ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/75/75519.png"
              alt="close menu"
              className="w-8"
            />
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
              alt="open menu"
              className="w-8"
            />
          )}
        </button>
      </div>

      {show && (
        <div className="md:hidden bg-gray-400 py-4">
          <ul className="flex flex-col items-center space-y-4 text-white">
            <Link href="/Components/form">
              <li className="py-2 hover:bg-gray-300 w-full text-center">Menu</li>
            </Link>
            <li className="py-2 hover:bg-gray-300 w-full text-center">About</li>
            <li className="py-2 hover:bg-gray-300 w-full text-center">Contact</li>
          </ul>
        </div>
      )}
    </>
  );
}
