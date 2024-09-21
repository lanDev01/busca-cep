import type { ComponentProps } from "react";
import { InputStyle } from ".";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ ...props }: InputProps) {
  return <InputStyle {...props} />;
}
