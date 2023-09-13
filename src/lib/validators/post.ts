import { z } from 'zod'

export const PostValidator = z.object({
    title: z.string().min(3).max(128),
    body: z.string().max(2000),
})

export type CreatePostPayload = z.infer<typeof PostValidator>
