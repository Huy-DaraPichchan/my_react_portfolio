import { React, useState } from "react";

export default function Header() {
  const [showMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!showMenu);
  };
  return (
    <header className='bg-gray-900 py-6 px-8'>
      <nav className='container mx-auto flex justify-between items-center'>
        <div></div>
        <ul className='hidden md:flex space-x-4'>
          {/* <li>
            <a
              href='/'
              className='text-white font-bold text-2xl hover:opacity-70'
            >
              Home
            </a>
          </li> */}

          <li>
            <a
              href='/'
              className='text-white font-bold text-2xl hover:opacity-70'
            >
              Projects
            </a>
          </li>
          {/* <li>
            <a
              href='/about'
              className='text-white font-bold text-2xl hover:opacity-70'
            >
              About
            </a>
          </li> */}
        </ul>
        <button className='md:hidden text-gray-700' onClick={toggleMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </nav>
      {/* Pop-up sidebar */}
      {showMenu && (
        <div className='fixed top-0 right-0 h-screen w-64 bg-white shadow-lg'>
          <div className='p-4'>
            {/* Close button */}
            <button
              className='absolute top-4 right-4 text-gray-700'
              onClick={toggleMenu}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 6L6 18M6 6l12 12'></path>
              </svg>
            </button>
            {/* Sidebar content */}
            <ul className='py-2'>
              <li>
                <a href='/' className='my-6 block font-bold bg-gray-900 hover:opacity-70 text-white px-6 py-3 rounded-lg text-lg'>
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
