import { TPostDetail } from "../../types";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  Chip,
} from "@nextui-org/react";
import { CheckIcon } from "../../assets";
import { convertToSlug, formatDate } from "../../helper/Xfunction";
import { Great, Good, Like } from "../../assets/index";
import { useRecoilState } from "recoil";
import { emotionCurrentState } from "../../store/emotion-of-post.store";
import { useGetEmotionOfPost } from "../../hooks";
import { NavLink } from "react-router-dom";
import Emotion from "./Emotion";

const PostDetail = ({ dataPostDetail }: { dataPostDetail?: TPostDetail }) => {
  const [emotionId, _] = useRecoilState(emotionCurrentState);

  const { emotion } = useGetEmotionOfPost({
    postId: dataPostDetail?.postid,
    emotionId: emotionId,
  });

  return (
    <div className="my-8">
      <Card className="py-4" isFooterBlurred>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <NavLink
            to={`${convertToSlug(dataPostDetail?.title!)}`}
            state={[dataPostDetail, emotion, dataPostDetail?.postid]}
          >
            <p className="text-tiny uppercase font-bold text-[1.3rem] hover:underline cursor-pointer">
              {dataPostDetail?.title}
            </p>
          </NavLink>
          <small className="mt-2 font-medium text-gray-700">
            {formatDate(dataPostDetail?.createdat)}
          </small>
          <small className="text-default-500 my-2">
            <Chip
              startContent={<CheckIcon size={14} />}
              variant="faded"
              color="primary"
            >
              {dataPostDetail?.tagname && dataPostDetail?.tagname}
            </Chip>
          </small>
          <h4 className="font-semibold text-medium">
            {dataPostDetail?.description
              ? dataPostDetail?.description
              : "Đang cập nhập"}
          </h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={
              dataPostDetail?.thumbnail
                ? dataPostDetail?.thumbnail
                : "https://nextui.org/images/hero-card-complete.jpeg"
            }
            width={500}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-3 w-auto shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80 pr-2">{`${dataPostDetail?.view} lượt đọc`}</p>
            <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Đọc ngay
            </Button>
          </CardFooter>
        </CardBody>
        <div className="px-4 mt-2 flex items-center gap-3">
          <Emotion
            icon={Like}
            emotionTotal={dataPostDetail?.like}
            emotion={emotion}
            current={1}
          ></Emotion>
          <Emotion
            icon={Good}
            emotionTotal={dataPostDetail?.good}
            emotion={emotion}
            current={2}
          ></Emotion>
          <Emotion
            icon={Great}
            emotionTotal={dataPostDetail?.great}
            emotion={emotion}
            current={3}
          ></Emotion>
          {/* <div className="flex items-center gap-2 mt-2">
            <Popover key={"top"} placement={"top-start"} color="foreground">
              <PopoverTrigger>
                <div
                  onClick={() => {
                    setEmotionId(1);
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src={Like}
                    className="w-5 h-5 object-cover"
                    alt="like"
                  ></img>
                  <span>{dataPostDetail?.like ?? 0} lượt</span>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Popover Content</div>
                  <div className="text-tiny flex flex-col gap-1">
                    {emotion &&
                      emotion?.data?.map(
                        (item: { user_name: string }, index: number) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-2 mt-2"
                            >
                              <Avatar
                                classNames={{
                                  base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                                  icon: "text-black/80",
                                }}
                                size="sm"
                                showFallback
                                name={item?.user_name}
                                src="https://images.unsplash.com/broken"
                              />
                              <span>{item?.user_name}</span>
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div> */}
          {/* <div className="flex items-center gap-2 mt-2">
            <Popover key={"top"} placement={"top-start"} color="foreground">
              <PopoverTrigger>
                <div
                  onClick={() => {
                    setEmotionId(2);
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src={Good}
                    className="w-5 h-5 object-cover"
                    alt="like"
                  ></img>
                  <span>{dataPostDetail?.good ?? 0} lượt</span>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Popover Content</div>
                  <div className="text-tiny flex flex-col gap-1">
                    {emotion &&
                      emotion?.data?.map(
                        (item: { user_name: string }, index: number) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-2 mt-2"
                            >
                              <Avatar
                                size="sm"
                                showFallback
                                name={item?.user_name}
                                src="https://images.unsplash.com/broken"
                                classNames={{
                                  base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                                  icon: "text-black/80",
                                }}
                              />
                              <span>{item?.user_name}</span>
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div> */}
          {/* <div className="flex items-center gap-2 mt-2">
            <Popover key={"top"} placement={"top-start"} color="foreground">
              <PopoverTrigger>
                <div
                  onClick={() => {
                    setEmotionId(3);
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src={Great}
                    className="w-5 h-5 object-cover"
                    alt="like"
                  ></img>
                  <span>{dataPostDetail?.great ?? 0} lượt</span>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Popover Content</div>
                  <div className="text-tiny flex flex-col gap-1">
                    {emotion &&
                      emotion?.data?.map(
                        (item: { user_name: string }, index: number) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-2 mt-2"
                            >
                              <Avatar
                                classNames={{
                                  base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                                  icon: "text-black/80",
                                }}
                                size="sm"
                                showFallback
                                name={item?.user_name}
                                src="https://images.unsplash.com/broken"
                              />
                              <span>{item?.user_name}</span>
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div> */}
        </div>
      </Card>
    </div>
  );
};

export default PostDetail;
