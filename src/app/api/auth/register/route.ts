import { db } from '@/db';
import { registerSchema } from '@/lib/validators/register';
import bcrypt from 'bcrypt';
import z from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { users } from '@/db/schema';

export async function POST(req: Request) {
  try {
    const saltRounds = 10;

    // Retrieve the request body and validate it
    const data = await req.json();
    const payload = registerSchema.parse(data);

    // Check if user already exists
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, payload.email),
    });

    if (user) {
      // Conflicting error code
      return new Response(null, { status: 409 });
    }

    // Encrypt password with bcrypt
    bcrypt.hash(payload.password, saltRounds, async (err, hash) => {
      if (err) {
        // Bad request
        return new Response(null, { status: 400 });
      }
      // Store user information in DB
      await db.insert(users).values({ id: uuidv4(), email: payload.email, name: payload.name, password: hash });
    });

    // If successful 200 status and initialise signIn with NextAuth
    return new Response(JSON.stringify(uuidv4()), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
    return new Response(null, { status: 500 });
  }
}
