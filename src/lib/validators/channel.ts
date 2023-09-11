import { z } from 'zod'

export const ChannelValidator = z.object({
    name: z.string().min(3).max(21),
})

export type CreateChannelPayload = z.infer<typeof ChannelValidator>
