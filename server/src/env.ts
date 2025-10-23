import z from "zod"

const DEFAULT_PORT = 3333 

const envSchema = z.object({
  PORT: z.coerce.number().default(DEFAULT_PORT),
  DATABASE_URL: z.string().url().startsWith("postgres://"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
})

export const env = envSchema.parse(process.env)