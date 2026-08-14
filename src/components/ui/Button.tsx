import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  className?: string;
  "data-cursor-text"?: string;
};

export default function Button({
  href,
  children,
  variant = "outline",
  external,
  className,
  ...rest
}: ButtonProps) {
  const isInternal = href.startsWith("/");
  const Comp = isInternal ? Link : "a";

  const base =
    "group inline-flex items-center gap-3 px-6 py-4 text-sm font-medium transition-colors duration-300";
  const variants = {
    primary: "bg-accent text-background hover:bg-accent/90",
    outline: "border border-border text-foreground hover:border-accent hover:text-accent",
    ghost: "text-foreground hover:text-accent",
  };

  return (
    <Comp
      href={href}
      {...(isInternal ? {} : { target: external ? "_blank" : undefined, rel: external ? "noopener noreferrer" : undefined })}
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      <span>{children}</span>
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </Comp>
  );
}
