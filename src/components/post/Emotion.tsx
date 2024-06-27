import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
} from "@nextui-org/react";
import { useRecoilState } from "recoil";
import { emotionCurrentState } from "../../store/emotion-of-post.store";

const Emotion = ({ icon, emotionTotal, emotion, current }: any) => {
  const [_, setEmotionId] = useRecoilState(emotionCurrentState);
  return (
    <div className="flex items-center gap-2 mt-2">
      <Popover key={"top"} placement={"top-start"} color="foreground">
        <PopoverTrigger>
          <div
            onClick={() => {
              setEmotionId(current);
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={icon} className="w-5 h-5 object-cover" alt="like"></img>
            <span>{emotionTotal ?? 0} lượt</span>
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
                      <div key={index} className="flex items-center gap-2 mt-2">
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
    </div>
  );
};

export default Emotion;
