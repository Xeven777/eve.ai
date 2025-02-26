import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed left-1/2 border backdrop-blur-lg bg-background/30 rounded-full z-50 -translate-x-1/2 px-4 md:px-10 py-1 bg top-1 w-full mx-auto max-w-6xl flex items-center justify-between">
      <h2 className="font-semibold bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        EveAI
      </h2>
      <div className="flex gap-16 ">
        <a>Features</a>
        <a>Setup</a>
      </div>
      <a
        href="http://github.com/xeven777"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="rounded-full">Github</Button>
      </a>
    </div>
  );
};

export default Navbar;
