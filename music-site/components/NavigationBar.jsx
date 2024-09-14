import React from "react";

const NavigationBar = () => {
  return(

<nav className="bg-yellow-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b bg-opacity-70 border-white-200">
  <div className="flex flex-row items-center justify-evenly text-xl font-extrabold laptop:text-3xl ">
    <ul className="flex gap-x-5 laptop:gap-x-24 p-4 mt-4 ">
      <li className="bg-white-100">
        <a href="/" className="block py-2  text-blue-400 hover:text-white " >HOME</a>
      </li>
      <li className="bg-white-100">
        <a href="/bio" className="block py-2  text-blue-400 hover:text-white" >BIO</a>
      </li>
      <li className="bg-white-100">
        <a href="/music" className="block py-2  text-blue-400 hover:text-white">MUSIC</a>
      </li>
      {/* <div>
      <li className="bg-white-100">
        <a href="/contact" className="block py-2   text-blue-400 hover:text-white">CONTACT</a>
      </li>
      </div> */}
    </ul>
  </div>
</nav>

  )
}

export default NavigationBar;