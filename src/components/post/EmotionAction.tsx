import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Image,
} from "@nextui-org/react";
import { Great, Good, Like } from "../../assets/index";
import { useCreateEmotionOfPost } from "../../hooks/emotion/useCreateEmotionOfPost";
import { EMOTION_CODE } from "../../utils/constant";

const EmotionAction = ({ postId }: any) => {
  const { mutate: $createEmotionOfPost } = useCreateEmotionOfPost();

  const handleCreateEmotionOfPost = (emotionId: number) => {
    $createEmotionOfPost({ post: postId, emotion: emotionId });
  };

  return (
    <div>
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button variant="bordered">Bạn nghĩ sao về bài viết ?</Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Static Actions">
          <DropdownItem key="new">
            <div
              onClick={() => handleCreateEmotionOfPost(EMOTION_CODE.LIKE)}
              className="flex items-center gap-3 px-2"
            >
              <Image isZoomed width={30} alt="emotion" src={Like} />
              Bài viết hay
            </div>
          </DropdownItem>
          <DropdownItem key="copy">
            <div
              onClick={() => handleCreateEmotionOfPost(EMOTION_CODE.GOOD)}
              className="flex items-center gap-3 px-2"
            >
              <Image isZoomed width={30} alt="emotion" src={Good} />
              Bài viết rất tốt
            </div>
          </DropdownItem>
          <DropdownItem key="edit">
            <div
              onClick={() => handleCreateEmotionOfPost(EMOTION_CODE.GREAT)}
              className="flex items-center gap-3 px-2"
            >
              <Image isZoomed width={30} alt="emotion" src={Great} />
              Bài viết tuyệt vời
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default EmotionAction;
