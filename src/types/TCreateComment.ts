export type TCreateComment = {
  text: string;
  post: number;
  parentId?: number | undefined | null;
};
