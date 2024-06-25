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
import { formatDate } from "../../helper/Xfunction";
import { Great, Good, Like } from "../../assets/index";

const PostDetail = ({ dataPostDetail }: { dataPostDetail?: TPostDetail }) => {
  return (
    <div className="my-8">
      <Card className="py-4" isFooterBlurred>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold text-[1.3rem] hover:underline cursor-pointer">
            {dataPostDetail?.title}
          </p>
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
          <div className="flex items-center gap-2">
            <img src={Like} className="w-5 h-5 object-cover" alt="like"></img>
            <span>{dataPostDetail?.like ?? 0} lượt</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Good} className="w-5 h-5 object-cover" alt="like"></img>
            <span>{dataPostDetail?.good ?? 0} lượt</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Great} className="w-5 h-5 object-cover" alt="like"></img>
            <span>{dataPostDetail?.great ?? 0} lượt</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PostDetail;
