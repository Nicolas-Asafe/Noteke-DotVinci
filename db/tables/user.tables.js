async function createUserTable(pool) {
    const query = `
    CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        orgnizations_id UUID,
        dev BOOLEAN DEFAULT false,
        studios_id UUID[]
    )`;
    try {
        await pool.query(query);
        console.log("User table created or already exists.");
    } catch (err) {
        console.error("Error creating user table:", err);
    }
}

export default createUserTable;
