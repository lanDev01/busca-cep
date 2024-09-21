import { LabelStyle } from ".";

interface LabelProps {
  htmlFor: string;
}

export function Label({ htmlFor }: LabelProps) {
  return <LabelStyle htmlFor={htmlFor}>Digite seu CEP</LabelStyle>;
}
