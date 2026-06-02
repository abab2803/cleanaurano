import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <span className="text-xl font-bold text-foreground">
        Clean<span className="text-primary">Aura</span>
      </span>
    </Link>
  );
}

