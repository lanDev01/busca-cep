import type { ComponentProps } from "react";
import { LabelStyle } from ".";

interface LabelProps extends ComponentProps<"label"> {
  htmlFor: string;
  text: string;
}

export function Label({ htmlFor, text, ...props }: LabelProps) {
  return (
    <LabelStyle {...props} htmlFor={htmlFor}>
      {text}
    </LabelStyle>
  );
}
