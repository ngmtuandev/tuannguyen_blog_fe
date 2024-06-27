import { useState, useEffect } from "react";
import { Textarea, User } from "@nextui-org/react";
import { formatDate } from "../../helper/Xfunction";
import { useRecoilState } from "recoil";
import { commentState } from "../../store/comment.store";
import { useCreateComment, useGetComments } from "../../hooks";
import { toast } from "react-toastify";
import Buttons from "../common/Button";
import { useLikeComment } from "../../hooks/comment/likeComment";
import OptionComment from "./OptionComment";
import { dataUserState } from "../../store/user.store";

const CommentItem = ({ data, postId, refetchComments }: any) => {
  const [showChildren, setShowChildren] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [_, setCommentList] = useRecoilState(commentState);
  const { comments, refetch } = useGetComments({ parentId: data.id, postId });
  const [dataInfoUser] = useRecoilState(dataUserState);

  const { mutate: $createComment } = useCreateComment();
  const { mutate: $likeComment } = useLikeComment();

  useEffect(() => {
    if (showChildren && comments) {
      updateCommentsWithChildren(data.id, comments);
    }
  }, [comments, showChildren]);

  const handleLikeComment = () => {
    $likeComment(data.id, {
      onSuccess: (response) => {
        if (response?.status) {
          toast.success("Like Successfully");
        } else {
          toast.warning("Like Failure");
        }
      },
      onError: () => {
        toast.warning("Like Failure");
      },
    });
  };

  const updateCommentsWithChildren = (parentId: number, children: any) => {
    const recursiveUpdate = (comments: any) => {
      return comments.map((comment: any) => {
        if (comment.id === parentId) {
          return { ...comment, children };
        } else if (comment.children) {
          return { ...comment, children: recursiveUpdate(comment.children) };
        } else {
          return comment;
        }
      });
    };
    setCommentList((prevComments) => recursiveUpdate(prevComments));
  };

  const handleLoadReplies = () => {
    setShowChildren(!showChildren);
  };

  const handleReply = () => {
    setShowReplyForm(!showReplyForm);
  };

  const handleInputChange = (e: any) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = async (e: any) => {
    e.preventDefault();
    $createComment(
      {
        text: replyText,
        parentId: data.id,
        post: postId,
      },
      {
        onSuccess: () => {
          toast.success("Comment Successfully");
        },
        onError: () => {
          toast.warning("Comment Failure");
        },
      }
    );

    setReplyText("");
    setShowReplyForm(false);
    refetchComments();
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <div>
          <User
            name={data?.user?.userName}
            description={data?.user?.email}
            avatarProps={{
              src: data?.user?.avatar
                ? data?.user?.avatar
                : "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
          <div className="flex mt-1 items-center gap-5">
            <small className="pr-4 border-r-1">
              {formatDate(data?.createdAt)}
            </small>
            <small
              onClick={() => handleLikeComment()}
              className="cursor-pointer hover:underline"
            >
              {data?.like ?? 0} like
            </small>
          </div>
        </div>
        {data?.user?.email === dataInfoUser?.email && (
          <div>
            <OptionComment commentId={data.id}></OptionComment>
          </div>
        )}
      </div>
      <div>
        <p className="mt-2">{data?.text}</p>
      </div>

      <div className="flex mt-1 items-center gap-5">
        <button className="text-blue-500" onClick={handleLoadReplies}>
          {showChildren ? "Hide Replies" : "Load Replies"}
        </button>
        <button className="text-blue-500 ml-2" onClick={handleReply}>
          Reply
        </button>
      </div>

      {showReplyForm && (
        <form onSubmit={handleReplySubmit} className="mt-2 flex flex-col gap-3">
          <Textarea
            label="Description"
            placeholder="Enter your description"
            disableAnimation
            disableAutosize
            onChange={handleInputChange}
            value={replyText}
          />
          <Buttons type="submit" title="Reply"></Buttons>
        </form>
      )}

      {showChildren && data.children && (
        <div className="ml-8">
          {data.children.map((child: any) => (
            <CommentItem
              key={child.id}
              data={child}
              postId={postId}
              refetchComments={refetch}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
