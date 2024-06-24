import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../../assets";
import { TInput } from "../../types";
import clsx from "clsx";

const InputPassword = ({
  label,
  placeholder,
  style,
  value,
  onChange,
  onBlur,
  name,
}: TInput) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div>
      <Input
        label={label}
        variant="bordered"
        placeholder={placeholder}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className={clsx("max-w-xs", style)}
      />
    </div>
  );
};

export default InputPassword;
