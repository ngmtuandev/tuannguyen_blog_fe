import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useGetComments } from "../../hooks";
import CommentItem from "./CommentItem";
import { parentCommentState, commentState } from "../../store/comment.store";

const CommentList = ({ postId }: any) => {
  const [commentList, setCommentList] = useRecoilState<any>(commentState);
  const [parentId] = useRecoilState(parentCommentState);
  const { comments, refetch } = useGetComments({
    parentId: parentId || 0,
    postId,
  });

  useEffect(() => {
    if (comments) {
      if (Array.isArray(comments)) {
        if (parentId === 0) {
          setCommentList(comments);
        } else {
          updateCommentsWithChildren(parentId, comments);
        }
      }
    }
  }, [comments, parentId]);

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
    setCommentList((prevComments: any) => recursiveUpdate(prevComments));
  };

  return (
    <div className="flex flex-col gap-4">
      {commentList &&
        commentList.map((item: any, index: number) => (
          <CommentItem
            key={index}
            data={item}
            postId={postId}
            refetchComments={refetch}
          />
        ))}
    </div>
  );
};

export default CommentList;
