import type { ChangeEvent } from "react";
import { Input } from "../input/input";
import { Label } from "../label/label";

interface InputGroupProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  readOnly?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputGroup({
  label,
  id,
  name,
  placeholder,
  value,
  readOnly = false,
  onChange,
}: InputGroupProps) {
  return (
    <div className="wrapper-input">
      <Label htmlFor={id} text={label} />
      <Input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
}
