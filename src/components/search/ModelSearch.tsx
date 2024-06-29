import { Chip } from "@nextui-org/react";
import { useGetTags } from "../../hooks";
import { useRecoilState } from "recoil";
import { tagState } from "../../store/tag.store";
import {
  convertToSlug,
  formatDate,
  handleGetLocalStorage,
} from "../../helper/Xfunction";
import { LANGUAGE } from "../../utils/constant";
import { valueSearchState } from "../../store/value-search.store";
import useSearchPost from "../../hooks/post/useSearchPost";
import { TPostDetail } from "../../types";
import { Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import path from "../../utils/path";

const ModelSearch = ({ setIsInsideModelSearch }: any) => {
  const { dataTags } = useGetTags();
  const [tag, setTag] = useRecoilState(tagState);
  const [valueSearch, _] = useRecoilState(valueSearchState);

  const { posts } = useSearchPost({
    languageCode: handleGetLocalStorage(LANGUAGE.KEY) || LANGUAGE.VI,
    page: 1,
    limit: 3,
    tagsId: tag,
    title: valueSearch,
  });

  const handleSelectTag = (id: number) => {
    setTag(id);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={() => setIsInsideModelSearch(true)}
      onMouseLeave={() => setIsInsideModelSearch(false)}
      className="absolute z-50 md:w-[35rem] mt-3 rounded-md shadow-md min-h-28 bg-white p-3"
    >
      <div className="flex items-center gap-3">
        {dataTags &&
          dataTags?.data?.map((item: { name: string; id: number }) => {
            return (
              <div
                key={item?.id}
                className="cursor-pointer"
                onClick={() => handleSelectTag(item.id)}
              >
                <Chip
                  color="primary"
                  variant={item?.id == tag ? "shadow" : "bordered"}
                >
                  {item?.name}
                </Chip>
              </div>
            );
          })}
      </div>
      <div>
        {posts &&
          posts?.results &&
          posts?.results?.map((item: TPostDetail, index: number) => {
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <Image
                    isBlurred
                    width={90}
                    src={
                      item?.thumbnail ??
                      "https://nextui-docs-v2.vercel.app/images/album-cover.png"
                    }
                    alt="NextUI Album Cover"
                    className="m-5"
                  />
                  <div className="flex flex-col">
                    <NavLink
                      to={`${path.BLOG}/${convertToSlug(item?.title!)}`}
                      state={[{ postid: item?.postid }, undefined, undefined]}
                    >
                      <span className="uppercase font-semibold hover:underline cursor-pointer">
                        {item?.title}
                      </span>
                    </NavLink>
                    <small>{formatDate(item?.createdat)}</small>
                  </div>
                </div>

                <Chip color="primary" variant="flat" size="md">
                  {item?.tagname}
                </Chip>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ModelSearch;
