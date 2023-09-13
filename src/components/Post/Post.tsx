import { FC } from 'react';
import styles from './Post.module.css';
import { ExtendedPost } from '@/types/post';
import { BiTimeFive, BiUser } from 'react-icons/bi';

type PostProps = {
  post: ExtendedPost;
};

export const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className={styles.post}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.metadata}>
        <span><BiUser /> u/{post.author.username}</span>
        <span><BiTimeFive /> {post.createdAt.toLocaleString()}</span>
      </p>
      <p className={styles.body}>{post.body}</p>
    </div>
  );
};
