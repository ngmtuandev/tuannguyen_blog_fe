import { atom } from "recoil";

export const commentState = atom({
  key: "commentState",
  default: [],
});

export const parentCommentState = atom({
  key: "parentCommentState",
  default: 0,
});
