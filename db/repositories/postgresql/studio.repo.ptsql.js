import StudioRepository from "../../core/repositories/studio.repositorie.js";
import pool from "../../db/connection.js";

export default class StudioRepoPostgresql extends StudioRepository {
    async createStudio(studioData) {
        const { name, description, admin_id } = studioData;
        const query =
            "INSERT INTO studios (name, description, admin_id, images, orgnizations_id, devs_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
        const values = [name, description, admin_id, [], [], []];

        return pool
            .query(query, values)
            .then((result) => result.rows[0])
            .catch((error) => Promise.reject(error));
    }

    async getStudioById(studioId) {
        const query = "SELECT * FROM studios WHERE id = $1";
        const values = [studioId];

        return pool
            .query(query, values)
            .then((result) => result.rows[0])
            .catch((error) => Promise.reject(error));
    }

    async addDevToStudio(studioId, devId) {
        const query =
            "UPDATE studios SET devs_id = array_append(devs_id, $2) WHERE id = $1 RETURNING *";
        const values = [studioId, devId];

        return pool
            .query(query, values)
            .then((result) => result.rows[0])
            .catch((error) => Promise.reject(error));
    }

    async banDevFromStudio(studioId, devId) {
        const query =
            "UPDATE studios SET devs_id = array_remove(devs_id, $2) WHERE id = $1 RETURNING *";
        const values = [studioId, devId];

        return pool
            .query(query, values)
            .then((result) => result.rows[0])
            .catch((error) => Promise.reject(error));
    }

    async deleteStudio(studioId) {
        const query = "DELETE FROM studios WHERE id = $1";
        const values = [studioId];

        return pool
            .query(query, values)
            .then(() => Promise.resolve())
            .catch((error) => Promise.reject(error));
    }

    async createOriginalImageForStudio(studioId, imageData) {
        const query =
            "UPDATE studios SET images = array_append(images, $2::jsonb) WHERE id = $1 RETURNING *";
        const values = [studioId, JSON.stringify(imageData)];

        return pool
            .query(query, values)
            .then((result) => result.rows[0])
            .catch((error) => Promise.reject(error));
    }

    async createOriginalOrganizationForStudio(studioId, orgData) {
        const query =
            "UPDATE studios SET orgnizations_id = array_append(orgnizations_id, $2) WHERE id = $1 RETURNING *";
        const values = [studioId, orgData];

        return pool
            .query(query, values)
            .then((result) => result.rows[0])
            .catch((error) => Promise.reject(error));
    }

    async getAllStudios() {
        const query = "SELECT * FROM studios";

        return pool
            .query(query)
            .then((result) => result.rows)
            .catch((error) => Promise.reject(error));
    }

    async getStudiosByAdminId(adminId) {
        const query = "SELECT * FROM studios WHERE admin_id = $1";
        const values = [adminId];

        return pool
            .query(query, values)
            .then((result) => result.rows)
            .catch((error) => Promise.reject(error));
    }
}
