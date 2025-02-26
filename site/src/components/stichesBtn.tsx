const StitchesButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="group relative rounded-lg border-2 border-primary bg-primary px-5 py-1 font-medium text-white duration-1000 hover:shadow-lg hover:shadow-pink-500/50 active:scale-x-95">
      <span className="absolute left-0 top-0 size-full rounded-md border border-dashed border-pink-50 shadow-inner shadow-white/30 group-active:shadow-white/10 transition-all duration-300"></span>
      <span className="absolute left-0 top-0 size-full rotate-180 rounded-md border-pink-50 shadow-inner shadow-black/30 group-active:shadow-black/10 transition-all duration-300"></span>
      {children}
    </button>
  );
};

export default StitchesButton;
