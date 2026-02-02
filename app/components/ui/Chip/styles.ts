const baseStyles = "inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

const variants = {
  default: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground",
};

const activeStyle = "bg-primary text-primary-foreground hover:bg-primary/90 border-transparent";

export type ChipVariant = keyof typeof variants;

export const chipStyles = (variant: ChipVariant = "default", active: boolean = false, className: string = "") => {
  // Se estiver ativo, usamos o estilo ativo (primary).
  // Se não, usamos o estilo da variante selecionada (default ou outline).
  // Isso evita conflitos de classes (ex: bg-secondary + bg-primary) já que removemos o tailwind-merge.
  const variantStyle = active ? activeStyle : variants[variant];
  
  return `${baseStyles} ${variantStyle} ${className}`;
};
