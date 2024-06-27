import { Textarea } from "@nextui-org/react";
import Buttons from "../common/Button";
import { useState } from "react";
import { useCreateComment } from "../../hooks";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Comment = ({ postId }: { postId: number }) => {
  const [text, setText] = useState("");
  const { mutate: $createComment } = useCreateComment();
  const handleComment = (e: any) => {
    e.preventDefault();
    $createComment(
      { text, post: postId, parentId: 0 },
      {
        onSuccess: (response) => {
          if (response?.status) {
            setText("");
            toast.success("Comment successfully");
          } else {
            setText("");
            toast.success("Comment failure");
          }
        },
        onError: () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login Failure",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        },
      }
    );
  };
  return (
    <div>
      <form className="flex flex-col gap-2" onSubmit={handleComment}>
        <Textarea
          key={"faded"}
          variant={"faded"}
          label="Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          labelPlacement="outside"
          placeholder="Do you thing ?"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
        <Buttons type="submit" title="comment"></Buttons>
      </form>
    </div>
  );
};

export default Comment;
