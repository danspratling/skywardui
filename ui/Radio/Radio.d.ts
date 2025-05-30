export type RadioProps = {
  name: string;
  label?: string;
  hideLabel?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  icon?: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
  className?: string;
  required?: string;
  size?: "sm" | "md" | "lg";
  as?: "button" | "span";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
