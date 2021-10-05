export default function Nav() {
  return (
    <header className="px-6 sticky top-0 left-0 w-full h-12 z-20 bg-mauve1 bg-opacity-95 border-b border-mauve3">
      <nav className="flex items-center h-full relative justify-between">
        <a
          href="#main"
          tabIndex="1"
          className="!absolute block bg-mauve1 sr-only focus-within:not-sr-only peer h-full focus:ring ring-mauve8 p-8"
        >
          Skip to content
        </a>
        <div className="peer-focus:text-transparent">Alpha desenvolvimento</div>
        <div className="flex gap-4">
          <Link href="about" passHref>
            <a>About</a>
          </Link>
          <Link href="work" passHref>
            <a>Work</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";
