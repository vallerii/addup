import LightningIcon from "./LightningIcon";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function Badge({ children, variant = "primary", size = "md" }: BadgeProps) {
  const sizeClasses = {
    sm: "h-[27px] px-3 text-xs",
    md: "h-[29px] px-3 text-xs",
    lg: "h-[30px] px-3 text-sm",
  };

  const variantClasses = {
    primary: "bg-primary-50 text-primary-400",
    secondary: "bg-primary-700 text-primary-400",
  };

  return (
    <div className={`inline-flex w-fit items-center justify-center gap-2 rounded-full ${sizeClasses[size]} ${variantClasses[variant]} font-medium`}>
      <div className="w-5 h-5 rounded-full flex items-center justify-center bg-primary-400">
        <LightningIcon className="w-2 h-2 text-white" />
      </div>
      <span>{children}</span>
    </div>
  );
}
