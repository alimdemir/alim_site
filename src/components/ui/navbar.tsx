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
    <nav className="fixed left-1/2 top-0 z-50 -translate-x-1/2">
      <div className="flex items-center gap-4 rounded-b-3xl bg-black px-6 py-3 sm:gap-8 md:gap-14 md:px-10 lg:gap-16 shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`text-[12px] font-medium transition-colors sm:text-[14px] md:text-base whitespace-nowrap`}
              style={{
                color: isActive ? "#E1E0CC" : "rgba(225, 224, 204, 0.6)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "rgba(225, 224, 204, 0.6)";
                }
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
