import { handleGetLocalStorage } from "../../helper/Xfunction";
import useFindFilterPost from "../../hooks/post/usePost";
import { TPostDetail } from "../../types";
import { LANGUAGE } from "../../utils/constant";
import PostDetail from "./PostDetail";

const Post = () => {
  const { isLoadingPost, posts } = useFindFilterPost({
    languageCode: handleGetLocalStorage(LANGUAGE.KEY) || LANGUAGE.VI,
    page: 1,
    limit: 3,
  });
  return (
    <div className="px-[12rem]">
      {posts &&
        posts?.results?.map((item: TPostDetail, index: number) => {
          return <PostDetail dataPostDetail={item}></PostDetail>;
        })}
    </div>
  );
};

export default Post;
