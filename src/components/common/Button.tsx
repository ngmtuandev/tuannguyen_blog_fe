import { Button } from "@nextui-org/react";
import { TButton } from "../../types";

const Buttons = ({ title, style, type, isLoading }: TButton) => {
  return (
    <div>
      <Button
        isLoading={isLoading}
        type={type}
        className={style}
        color="primary"
        href="#"
        variant="flat"
      >
        {title}
      </Button>
    </div>
  );
};

export default Buttons;
