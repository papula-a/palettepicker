import db from '../../../../../lib/db';

export async function GET(req, { params }) {
    const { id } = params;
    try {
        const [user] = await db.query('SELECT * FROM users WHERE user_id = ?', [id]);
        console.log('User data:', user);  // Log the data to validate the query
        if (user.length === 0) {
            return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
        }
        return new Response(JSON.stringify(user[0]), { status: 200 });
    } catch (error) {
        console.error('Failed to retrieve user:', error);
        return new Response(JSON.stringify({ message: 'Database query failed' }), { status: 500 });
    }
}

export async function PUT(req, { params }) {
    const { id } = params;
    const { username, email, password_hash } = await req.json();
    try {
        const [result] = await db.query(
            'UPDATE users SET username = ?, email = ?, password_hash = ? WHERE user_id = ?',
            [username, email, password_hash, id]
        );
        if (result.affectedRows === 0) {
            return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
        }
        return new Response(JSON.stringify({ message: 'User updated successfully' }), { status: 200 });
    } catch (error) {
        console.error('Failed to update user:', error);
        return new Response(JSON.stringify({ message: 'Database update failed' }), { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    const { id } = params;
    try {
        const [result] = await db.query('DELETE FROM users WHERE user_id = ?', [id]);
        if (result.affectedRows === 0) {
            return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
        }
        return new Response(null, { status: 204 });
    } catch (error) {
        console.error('Failed to delete user:', error);
        return new Response(JSON.stringify({ message: 'Database deletion failed' }), { status: 500 });
    }
}
