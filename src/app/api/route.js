// // src/app/api/test/route.js

// export async function GET() {
//     return new Response(JSON.stringify({ message: 'Hello from Next.js API!' }), {
//         status: 200,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
// }
// src/app/api/test/route.js

// src/app/api/test/route.js
import db from '@/api/db';

export async function GET(request) {
  try {
    const [rows] = await db.query('SELECT * FROM users'); 
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

 