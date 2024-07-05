import { Input } from "@nextui-org/react";
import { TInput } from "../../types";
import clsx from "clsx";

const InputCommon = ({
  type,
  label,
  isRequired,
  style,
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  disabled,
}: TInput) => {
  return (
    <div>
      <Input
        disabled={disabled}
        isRequired={isRequired}
        isClearable
        type={type}
        label={label}
        variant="bordered"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className={clsx("max-w-xs", style)}
      />
    </div>
  );
};

export default InputCommon;
