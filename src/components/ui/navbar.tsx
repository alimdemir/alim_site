"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımda", href: "/hakkimda" },
    { name: "Yetenekler", href: "/yetenekler" },
    { name: "Projeler", href: "/projeler" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <nav className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8 mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Alim Demir
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        {/* Mobile Nav */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end md:hidden">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold inline-block">Alim Demir</span>
          </Link>
          <nav className="flex items-center space-x-2 text-xs font-medium overflow-x-auto">
             {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors whitespace-nowrap px-2 py-1 ${
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}
