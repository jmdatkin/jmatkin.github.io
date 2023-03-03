import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

function Navbar() {

    const router = useRouter();

    const links = useRef([
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/about"
        }
    ]);

    return ( 
        <nav className="h-full flex items-center px-8 space-x-4">
            {links.current.map((link, idx) => {
                const active = router.pathname === link.href;
                return <Link key={idx} className={`${active ? 'text-zinc-900' : ''} hover:text-zinc-900 font-semibold text-zinc-400 duration-[0.07s]`} href={link.href}>{link.name}</Link>
            })}
        </nav>
     );
}

export default Navbar;