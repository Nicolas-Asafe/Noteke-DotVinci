import dotenv from 'dotenv';
dotenv.config();

export const variables = {
    API:{
        PORT:process.env.API_PORT || 3000,
        X_API_KEY:process.env.X_API_KEY || 'default_api_key',
        JWT_SECRET:process.env.JWT_SECRET || 'default_jwt_secret'
    },
    DB:{
        HOST:process.env.DB_HOST || 'localhost',
        PORT:process.env.DB_PORT || 5432,
        USER:process.env.DB_USER || 'user',
        PASSWORD:process.env.DB_PASSWORD || 'password',
        NAME:process.env.DB_NAME || 'noteke_db',
        CONNECTION_STRING:process.env.CONNECTION_STRING || 'postgresql://user:password@localhost:5432/noteke_db'
    }
};