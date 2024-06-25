import { atom } from "recoil";

export const emotionOfPostState = atom({
  key: "emotionOfPostState",
  default: {
    postId: undefined,
    emotionId: undefined
  }
});

export const emotionCurrentState = atom<number>({
  key: "emotionCurrentState",
  default: undefined
});
