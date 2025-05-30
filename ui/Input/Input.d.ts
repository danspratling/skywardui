export type InputProps = {
  id: string;
  type?: "text" | "email" | "tel" | "password";
  // inputMode?: "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal"
  error?: bool;
} & React.InputHTMLAttributes<HTMLInputElement>;
