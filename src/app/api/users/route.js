// import prisma from '@/lib/db';

export async function GET() {
  try {
    const [users] = await db.query("SELECT * FROM users");
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Database query failed" }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  const { username, email, password_hash } = await req.json();
  try {
    const query =
      "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)";
    await db.query(query, [username, email, password_hash]);
    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Database insertion failed" }),
      { status: 500 }
    );
  }
}
