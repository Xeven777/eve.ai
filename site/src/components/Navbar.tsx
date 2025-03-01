const Navbar = () => {
  return (
    <div className="fixed left-1/2 border border-border/40 backdrop-blur-lg bg-background/30 rounded-full z-50 -translate-x-1/2 px-4 md:px-10 py-1 bg top-1 w-full mx-auto max-w-6xl flex items-center justify-between shadow-sm">
      <h2 className="font-semibold bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        EveAI
      </h2>
      <div className="flex gap-16 ">
        <a href="#setup">Setup</a>

        <a href="#features">Features</a>
      </div>
      <a
        href="https://github.com/Xeven777/eve.ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="group relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-b-2 border-l-2 border-r-2 border-primary bg-gradient-to-tr from-primary to-pink-500 px-4 py-1.5 text-white shadow-md transition duration-300 active:translate-y-0.5 active:border-primary active:shadow-none">
          <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
          <span className="relative font-medium tracking-tight">Github</span>
        </button>
      </a>
    </div>
  );
};

export default Navbar;
