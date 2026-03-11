export default function GradientBackground({ children }) {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] overflow-hidden text-white">

      {/* gradient mesh */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-700 opacity-30 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-600 opacity-30 blur-[200px] rounded-full"></div>

      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-pink-600 opacity-20 blur-[160px] rounded-full"></div>

      <div className="relative z-10">{children}</div>

    </div>
  );
}