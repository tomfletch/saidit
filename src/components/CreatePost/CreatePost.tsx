'use client';

import { FC, FormEvent, useState } from 'react';
import styles from './CreatePost.module.css';
import { Button } from '../ui/Button';
import { useMutation } from '@tanstack/react-query';
import { CreatePostPayload } from '@/lib/validators/post';
import axios from 'axios';

type CreatePostProps = {
  channelId: string
};

export const CreatePost: FC<CreatePostProps> = ({ channelId }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: async ({ channelId, title, body }: { channelId: string, title: string, body: string }) => {
      const payload: CreatePostPayload = { title, body };
      const { data } = await axios.post(`/api/channels/${channelId}/posts`, payload);
      return data;
    },
    onError: () => {
      // TODO: show error toast
      console.log('ERROR');
    },
    onSuccess: () => {
      // TODO: redirect to new post and show success toast
      console.log('POSTED');
    }
  });


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost({ channelId, title: postTitle, body: postBody });
  };

  return (
    <form className={styles.createPost} onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>
      <input
        type="text"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
        placeholder="Post content"
      />
      <Button type="submit" isLoading={isLoading}>Create Post</Button>
    </form>
  );
};
