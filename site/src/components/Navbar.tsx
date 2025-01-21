import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed left-1/2 border backdrop-blur-lg bg-background/30 rounded-full z-50 -translate-x-1/2 px-4 md:px-10 py-1 bg top-1 w-full mx-auto max-w-6xl flex items-center justify-between">
      <div>EveAI</div>
      <div className="flex ">
        <p>Features</p>
        <p>Setup</p>
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
