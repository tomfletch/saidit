import { CreatePost } from "@/components/CreatePost";
import { PostFeed } from "@/components/PostFeed";
import { INFINITE_SCROLL_RESULTS_COUNT } from "@/config";
import { NextPage } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string
  }
};

const Channel: NextPage<PageProps> = async ({ params }) => {
  const { slug } = params;

  const channel = await prisma?.channel.findFirst({
    where: { name: slug },
    include: {
      posts: {
        include: {
          author: true,
          votes: true,
          comments: true,
          channel: true,
        },
        orderBy: {
          createdAt: 'desc'
        },
        take: INFINITE_SCROLL_RESULTS_COUNT
      }
    }
  })

  if (!channel) return notFound()

  return (
    <div className='container'>
      <h1>c/{channel.name}</h1>
      <CreatePost
        channelId={channel.id}
      />
      <PostFeed
        initialPosts={channel.posts}
        channelId={channel.id}
      />
    </div>
  );
};

export default Channel;