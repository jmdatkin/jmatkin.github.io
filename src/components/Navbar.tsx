import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

function Navbar() {

    const router = useRouter();

    const links = useRef([
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Projects",
            href: "/projects"
        },
        {
            name: "Resume",
            href: "/resume"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Blog",
            href: "/blog"
        },
    ]);


    return (
        <nav className="h-full flex items-center px-3 justify-around md:justify-start">
            {links.current.map((link, idx) => {
                // const active = router.pathname === link.href;
                const re = new RegExp(`^${link.href}(/.+)?$`);
                const active = re.test(router.pathname);
                return <Link key={idx} className={`${active ? 'text-zinc-900' : ''} block p-4 grow md:grow-0 h-full flex items-center hover:text-zinc-900 font-semibold text-zinc-400 duration-[0.07s]`} href={link.href}>{link.name}</Link>
            })}
        </nav>
    );
}

export default Navbar;