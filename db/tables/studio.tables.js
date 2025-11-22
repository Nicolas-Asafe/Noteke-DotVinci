async function createStudioTable(pool) {
    const query = `
    CREATE TABLE IF NOT EXISTS studios (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(100) UNIQUE NOT NULL,
        description TEXT,
        admin_id UUID NOT NULL,
        images JSONB,
        orgnizations_id UUID,
        devs_id UUID[]
    )`;
    try {
        await pool.query(query);
        console.log("Studio table created or already exists.");
    }   
    catch (err) {
        console.error("Error creating studio table:", err);
    }   
}

export default createStudioTable;