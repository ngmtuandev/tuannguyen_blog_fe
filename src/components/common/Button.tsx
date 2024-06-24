import { Button } from "@nextui-org/react";
import { TButton } from "../../types";

const Buttons = ({ title, style, type }: TButton) => {
  return (
    <div>
      <Button type={type} className={style} color="primary" href="#" variant="flat">
        {title}
      </Button>
    </div>
  );
};

export default Buttons;
