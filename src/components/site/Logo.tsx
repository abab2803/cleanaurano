import { Moon, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
        <Moon className="h-5 w-5 text-primary" strokeWidth={2.5} />
        <Sparkles className="absolute -right-0.5 -top-0.5 h-3 w-3 text-primary" strokeWidth={2.5} />
      </div>
      <span className="text-xl font-bold text-foreground">
        Clean<span className="text-primary">Aura</span>
      </span>
    </Link>
  );
}
