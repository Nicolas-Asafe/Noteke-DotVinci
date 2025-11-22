import { Pool } from "pg";
import { variables } from "../config/variables.js";

import createStudioTable from "./tables/studio.tables.js";
import createOrganizationTable from "./tables/org.tables.js";
import createUserTable from "./tables/user.tables.js";

async function connectToDatabase() {
    try {
        const pool = new Pool({
            user: variables.DB.USER,
            host: variables.DB.HOST,
            database:variables.DB.NAME,
            password: variables.DB.PASSWORD,
            port: variables.DB.PORT,
            connectionString: variables.DB.CONNECTION_STRING
        });
        console.log("Connected to the database successfully.");
        return pool;
    }catch(err){
        console.error("Error connecting to the database:", err);
        throw err;
    }
}
const pool = await connectToDatabase();
await createOrganizationTable(pool);
await createStudioTable(pool);
await createUserTable(pool);
export default pool