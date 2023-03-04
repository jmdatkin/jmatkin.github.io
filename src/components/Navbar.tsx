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
        <nav className="h-full flex items-center px-8 justify-around md:justify-start space-x-4">
            {links.current.map((link, idx) => {
                // const active = router.pathname === link.href;
                const re = new RegExp(`^${link.href}(/.+)?$`);
                const active = re.test(router.pathname);
                return <Link key={idx} className={`${active ? 'text-zinc-900' : ''} hover:text-zinc-900 font-semibold text-zinc-400 duration-[0.07s]`} href={link.href}>{link.name}</Link>
            })}
        </nav>
    );
}

export default Navbar;