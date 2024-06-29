import { useLocation } from "react-router-dom";
import useFindItemPost from "../../hooks/post/useGetItemPost";
import { Image } from "@nextui-org/react";
import HeaderPostItemDetail from "./HeaderPostItemDetail";
import { Great, Good, Like } from "../../assets/index";
import { emotionCurrentState } from "../../store/emotion-of-post.store";
import { useRecoilState } from "recoil";
import Emotion from "./Emotion";
import { useGetEmotionOfPost } from "../../hooks";
import EmotionAction from "./EmotionAction";
import Comment from "./Comment";
import CommentList from "../comment/CommentList";

const PostItemDetail = () => {
  let { state } = useLocation();
  const { post_item } = useFindItemPost(state[0]?.postid!);
  const [emotionId, _] = useRecoilState(emotionCurrentState);

  const { emotion } = useGetEmotionOfPost({
    postId: state[0]?.postid,
    emotionId: emotionId,
  });

  return (
    <div className="px-[10rem]">
      <HeaderPostItemDetail post_item={post_item}></HeaderPostItemDetail>
      <div className="flex flex-col justify-center items-center mt-10">
        <h3 className="mt-4 uppercase text-[1.7em] font-semibold">
          {post_item?.title}
        </h3>
        <span className="my-2">{post_item?.content_description}</span>
        <Image
          width={700}
          height={400}
          src={post_item?.thumbnail}
          fallbackSrc="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
          alt="img_item"
        />
        <div className="flex items-center gap-7">
          <Emotion
            current={1}
            icon={Like}
            emotionTotal={post_item?.like}
            emotion={emotion}
          ></Emotion>
          <Emotion
            current={2}
            icon={Good}
            emotionTotal={post_item?.good}
            emotion={emotion}
          ></Emotion>
          <Emotion
            current={3}
            icon={Great}
            emotionTotal={post_item?.great}
            emotion={emotion}
          ></Emotion>
        </div>
        <div className="min-h-16 mt-7 mb-3">{post_item?.content}</div>
      </div>
      <div>
        <EmotionAction postId={state[2]}></EmotionAction>
      </div>
      <div className="my-8 flex flex-col gap-12">
        <Comment postId={state[0]?.postid}></Comment>
        <div>
          <CommentList postId={state[0]?.postid}></CommentList>
        </div>
      </div>
    </div>
  );
};

export default PostItemDetail;
