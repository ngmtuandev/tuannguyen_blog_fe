import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  cn,
} from "@nextui-org/react";
import { toast } from "react-toastify";
import { EditDocumentIcon } from "../../assets/EditDocumentIcon";
import { DeleteDocumentIcon } from "../../assets/DeleteDocumentIcon";
import { Dot } from "../../assets";
import { useDeleteComment } from "../../hooks";
const OptionComment = ({ commentId }: any) => {
  const { mutate: $deleteComment } = useDeleteComment();
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  const handleDeleteComment = () => {
    $deleteComment(commentId, {
      onSuccess: () => {
        toast.success("Delete Successfully");
      },
      onError: () => {
        toast.error("Delete Failure");
      },
    });
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <img src={Dot} className="w-4 cursor-pointer" alt="" />
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="edit"
          shortcut="⌘⇧E"
          startContent={<EditDocumentIcon className={iconClasses} />}
        >
          Edit file
        </DropdownItem>
        <DropdownItem
          onClick={handleDeleteComment}
          key="delete"
          className="text-danger"
          color="danger"
          shortcut="⌘⇧D"
          startContent={
            <DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />
          }
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default OptionComment;
