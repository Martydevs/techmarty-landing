import { pageRoutes } from "@/content/routing"

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-primary-50 border-b border-primary-200 shadow-sm">
      <div className="w-full flex flex-wrap justify-between items-center py-4 px-6 gap-4 mx-auto container">
        <span className="text-primary-900 font-display font-bold text-xl md:text-2xl">
          <h1>Techmarty</h1>
        </span>
        <nav className="flex items-center gap-6">
          {pageRoutes.map((route, index, list) => {
            const last = list.length - 1;
            const isLast = index === last;

            return (
              <Link
                key={route.href}
                href={route.href}
                className={`${isLast ? "navbar-button-link" : "navbar-link"}`}
              >
                {route.text}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
