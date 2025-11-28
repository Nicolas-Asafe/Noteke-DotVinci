import { variables } from "../../config/variables.js";

export default function XApiKeyMiddleware(req, res, next) {
    const apiKey = req.header('x-api-key');
    if (!apiKey || apiKey !== variables.API.X_API_KEY) {
        return res.status(401).json({ error: 'Unauthorized: Invalid or missing API key' });
    }
    next();
}
