export function Background() {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full bg-background overflow-hidden">
      {/* 1. Base Gradient (Subtle Vignette) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 opacity-80"></div>

      {/* 2. Grid Pattern - High Contrast for Dark Mode */}
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* 3. Top Center Main Glow - Cyan/Blue for Tech feel */}
      <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none"></div>

      {/* 4. Bottom Right Accent Glow - Purple */}
      <div className="absolute bottom-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none"></div>
      
      {/* 5. Top Left Accent Glow - Blue */}
      <div className="absolute top-[10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none"></div>

      {/* 6. Noise Texture for "Grainy" look (Optional, adds realism) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
}