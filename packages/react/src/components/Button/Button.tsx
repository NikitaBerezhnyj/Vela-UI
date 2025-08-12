import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled,
  children,
  ...props
}) => {
  const className =
    variant === "secondary" ? `${styles.button} ${styles.secondary}` : styles.button;

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
