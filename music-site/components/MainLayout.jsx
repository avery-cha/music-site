import React from "react";
import NavigationBar from "./NavigationBar"

const MainLayout = ({children}) => {
  return(
    <div>
      <NavigationBar></NavigationBar>
      <div className="bg-cover bg-right laptop:bg-center w-screen h-screen bg-[url('https://snipboard.io/NoLOjH.jpg')] ">
      <main>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout;