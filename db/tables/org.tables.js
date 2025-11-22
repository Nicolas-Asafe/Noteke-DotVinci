async function createOrganizationTable(pool) {
    const query = `
    CREATE TABLE IF NOT EXISTS organizations (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(100) UNIQUE NOT NULL,
        description TEXT,
        studio_id UUID,
        html_content TEXT,
        data JSONB,
        image_icon_id UUID,
        banner_image_id UUID,
        users INTEGER DEFAULT 0
    )`;
    try {
        await pool.query(query);
        console.log("Organization table created or already exists.");
    } catch (err) {
        console.error("Error creating organization table:", err);
    }
}

export default createOrganizationTable;