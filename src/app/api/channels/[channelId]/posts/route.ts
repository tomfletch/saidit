import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { PostValidator } from '@/lib/validators/post';
import { NextResponse } from 'next/server';

type RouteParams = {
  params: {
    channelId: string;
  };
};

export async function POST(req: Request, { params: { channelId }}: RouteParams) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 });
    }

    // Check that the channel exists
    const channelExists = await prisma.channel.findFirst({
      where: { id: channelId }
    });

    if (!channelExists) {
      return new Response('Channel not found', { status: 404 });
    }

    const requestBody = await req.json();
    const { title, body } = PostValidator.parse(requestBody);

    // Create post and associate it with the current user
    const post = await prisma.post.create({
      data: {
        title,
        body,
        channelId,
        authorId: session.user.id
      }
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response('Could not create post', { status: 500 });
  }
}