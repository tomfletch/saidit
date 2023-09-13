import { FC } from 'react';
import styles from './PostFeed.module.css';
import { ExtendedPost } from '@/types/post';
import { Post } from '../Post/Post';

type PostFeedProps = {
  initialPosts: ExtendedPost[];
  channelId: string;
};

export const PostFeed: FC<PostFeedProps> = ({ initialPosts, channelId }) => {
  return (
    <div className={styles.postFeed}>
      {initialPosts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
