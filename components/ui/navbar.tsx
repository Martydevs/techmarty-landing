import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { pageRoutes } from "@/content/routing";
import { isCurrentRouteActive } from "@/lib/routing";
import ThemeToggle from "./shadcn/theme-toggle";

export default function Navbar() {
  const path = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const handleScroll = () =>
      header?.classList.toggle("blur-background", window.scrollY > 0);

    if (header) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="z-10 w-full border-b border-zinc-900 shadow-sm sticky top-0 transition-all duration-300 bg-zinc-800"
    >
      <div className="w-full flex flex-wrap justify-between items-center py-4 px-6 gap-4 mx-auto container">
        <span className="text-white font-display font-bold text-xl md:text-2xl">
          <h1>Techmarty</h1>
        </span>

        <div className="h-auto w-auto flex items-center gap-2">
          <nav className="flex items-center gap-6">
            {pageRoutes.map((route, index) => {
              const isLastItem = index === pageRoutes.length - 1;
              const isActive = isCurrentRouteActive(route.href, path);

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`navbar-link ${
                    isLastItem && "navbar-button-link"
                  } ${isActive && "navbar-link-active"}`}
                >
                  {route.text}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
