import React from "react";
import {FcGoogle} from "react-icons/fc";
// import { FaLinkedin, FaTelegram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-6 px-8'>
      <div className='container mx-auto flex justify-between items-center'>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        <ul className='flex space-x-4'>
          <li>
            <a
              href='mailto:huy.darapichchan19@kit.edu.kh'
              className='text-blue-500 hover:opacity-70'
            >
              <FcGoogle size={24}/>
            </a>
          </li>
          {/* <li>
            <a
              href='https://linkedin.com/yourprofile'
              className='text-blue-500 hover:opacity-70'
            >
              <FaLinkedin size={24}/>
            </a>
          </li> */}
          {/* <li>
            <a
              href='https://linkedin.com/yourprofile'
              className='text-sky-400 hover:opacity-70'
            >
              <FaTelegram size={24}/>
            </a>
          </li> */}
        </ul>
      </div>
    </footer>
  );
}
