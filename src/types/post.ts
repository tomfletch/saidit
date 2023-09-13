import { Post, Channel, Comment, PostVote, User } from "@prisma/client";

export type ExtendedPost = Post & {
  channel: Channel;
  votes: PostVote[];
  author: User;
  comments: Comment[];
};
