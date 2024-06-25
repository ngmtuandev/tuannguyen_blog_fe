import { handleGetLocalStorage } from "../../helper/Xfunction";
import { useGetPosts } from "../../hooks/post/usePost";
import { TPostDetail } from "../../types";
import { LANGUAGE } from "../../utils/constant";
import PostDetail from "./PostDetail";
import InfiniteScroll from "react-infinite-scroll-component";

const Post = () => {
  const { data, fetchNextPage, hasNextPage } = useGetPosts({
    languageCode: handleGetLocalStorage(LANGUAGE.KEY) || LANGUAGE.VI,
    limit: 2,
  });

  const _posts = data?.pages?.reduce((acc, page) => {
    return [...acc, ...page.data?.results];
  }, []);

  const handleFetchNextPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  return (
    <InfiniteScroll
      dataLength={_posts?.length ?? 0}
      next={handleFetchNextPage}
      hasMore={hasNextPage}
      loader={<h4>Loading...</h4>}
      scrollThreshold={0.9}
    >
      <div className="px-[12rem]">
        {data &&
          _posts?.map((item: TPostDetail, index: number) => {
            return <PostDetail key={index} dataPostDetail={item}></PostDetail>;
          })}
      </div>
    </InfiniteScroll>
  );
};

export default Post;
