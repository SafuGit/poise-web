import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#131313]/40 backdrop-blur-2xl glassmorphism-edge">
      <nav className="mx-auto flex w-full max-w-360 items-center justify-between px-6 py-5 md:px-12 md:py-8">
        <div className="font-['Space_Grotesk'] text-2xl font-medium tracking-tighter text-white">
          Poise
        </div>

        <div className="hidden items-center gap-12 font-['Space_Grotesk'] font-medium tracking-[-0.02em] md:flex">
          <a className="border-b border-[#00FBFB]/50 pb-1 font-medium text-white" href="#">
            Home
          </a>
          <a
            className="text-[#B9CAC9] transition-all duration-300 hover:text-white hover:opacity-80"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-[#B9CAC9] transition-all duration-300 hover:text-white hover:opacity-80"
            href="#how-it-works"
          >
            How it Works
          </a>
          <a className="text-[#B9CAC9] transition-all duration-300 hover:text-white hover:opacity-80" href="#">
            GitHub
          </a>
        </div>

        <div className="hidden md:block">
          <button className="pulse-gradient rounded-full px-8 py-3 font-medium text-on-primary-fixed transition-all hover:opacity-90 active:scale-95">
            Download Now
          </button>
        </div>

        <button
          aria-controls="mobile-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="rounded-full bg-surface-container-highest/20 p-2 text-white transition-all hover:bg-surface-container-highest/40 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {isOpen && (
        <div
          className="mx-6 mb-4 rounded-2xl border border-white/5 bg-[#131313]/80 p-5 backdrop-blur-2xl md:hidden"
          id="mobile-nav"
        >
          <div className="flex flex-col gap-4 font-['Space_Grotesk']">
            <a
              className="border-b border-[#00FBFB]/50 pb-1 font-medium text-white"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              className="text-[#B9CAC9] transition-all duration-300 hover:text-white hover:opacity-80"
              href="#features"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              className="text-[#B9CAC9] transition-all duration-300 hover:text-white hover:opacity-80"
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </a>
            <a
              className="text-[#B9CAC9] transition-all duration-300 hover:text-white hover:opacity-80"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </a>
            <button className="pulse-gradient mt-2 rounded-full px-8 py-3 font-medium text-on-primary-fixed transition-all hover:opacity-90 active:scale-95">
              Download Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;