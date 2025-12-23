import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTechColor(tech: string): string {
  const t = tech.toLowerCase();
  
  if (t.includes("react") || t.includes("next")) return "bg-cyan-500/10 text-cyan-300 border-cyan-500/20";
  if (t.includes("python") || t.includes("django") || t.includes("flask")) return "bg-blue-500/10 text-blue-300 border-blue-500/20";
  if (t.includes("aws") || t.includes("cloud")) return "bg-orange-500/10 text-orange-300 border-orange-500/20";
  if (t.includes("docker") || t.includes("kubernetes")) return "bg-sky-500/10 text-sky-300 border-sky-500/20";
  if (t.includes("node") || t.includes("javascript") || t.includes("typescript")) return "bg-yellow-500/10 text-yellow-300 border-yellow-500/20";
  if (t.includes("db") || t.includes("sql") || t.includes("redis") || t.includes("mongo")) return "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
  if (t.includes("ai") || t.includes("ml") || t.includes("gpt") || t.includes("tensor")) return "bg-purple-500/10 text-purple-300 border-purple-500/20";
  if (t.includes("git") || t.includes("cicd")) return "bg-red-500/10 text-red-300 border-red-500/20";
  
  // Default fallback
  return "bg-slate-500/10 text-slate-300 border-slate-500/20";
}