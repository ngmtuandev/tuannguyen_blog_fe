export type TNotification = {
  createdAt: string;
  createdBy: number;
  id: number;
  isRead: boolean;
  message: string;
  postId: number;
  user: User;
  post: any;
};

export type User = {
  avatar: string | null;
  createdAt: string;
  createdBy: number;
  description: string | null;
  email: string;
  id: number;
  password: string;
  role: string;
  userName: string;
};
