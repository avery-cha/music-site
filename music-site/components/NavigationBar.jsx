import React from "react";

const NavigationBar = () => {
  return(

<nav className="bg-yellow-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b bg-opacity-70 border-white-200">
  <div className="max-w-screen-xl flex flex-row items-center justify-evenly text-2xl">
    <ul className="flex p-4 mt-4 font-medium justify-evenly flex-row dark:bg-gray-800 dark:border-gray-700">
      <li className="bg-white-100">
        <a href="/" className="block py-2 px-11 text-blue-400 hover:text-white" >HOME</a>
      </li>
      <li className="bg-white-100">
        <a href="/bio" className="block py-2 px-11  text-blue-400 hover:text-white" >BIO</a>
      </li>
      <li className="bg-white-100">
        <a href="/music" className="block py-2 px-11 text-blue-400 hover:text-white">MUSIC</a>
      </li>
      <li className="bg-white-100">
        <a href="/contact" className="block py-2 px-11   text-blue-400 hover:text-white">CONTACT</a>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default NavigationBar;