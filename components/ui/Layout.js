export default function Layout({ children }) {
  return (
    <div className="min-h-screen relative bg-mauve1 text-mauve12">
      <Nav />
      <main id="main" className="pt-12 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

import { Nav, Footer } from "./index";
