// import { ReactNode } from "react";

import { useRouter } from "next/router";
import { MutableRefObject, useRef } from "react";
import Navbar from "./Navbar";

function Layout({children}) {

    const router = useRouter();

    const themes = useRef({
        '/': 'bg-white',
        '/about': 'bg-blue-300 border-blue-600',
    });

    return ( 
        <>
         <div className={`w-full h-full bg-white`}>
          <div className="flex flex-col h-full">
            <div className="flex min-h-[5rem] border-b">
              <div className="w-screen-layout-offset border-r hidden md:block bg-zinc-100"></div>
              <div className="flex-grow items-center">
                <Navbar></Navbar>
              </div>
              <div className="w-screen-layout-offset border-l hidden md:block bg-zinc-100"></div>
            </div>
            <div className="flex flex-grow">
              <div className="w-screen-layout-offset border-r hidden md:block bg-zinc-100"></div>
              <main className={`flex-grow bg-white`}>
                {children}
              </main>
              <div className="w-screen-layout-offset border-l hidden md:block bg-zinc-100"></div>
            </div>
            <div className="flex min-h-[5rem] bg-white border-t">
              <div className="w-screen-layout-offset border-r hidden md:block bg-zinc-100"></div>
              <div className="flex-grow flex flex-col text-center h-full items-center justify-around"><span className="text-zinc-600">2023 Julian Atkin</span></div>
              <div className="w-screen-layout-offset border-l hidden md:block bg-zinc-100"></div>
            </div>
          </div>
        </div>
        </>
     );
}

export default Layout;