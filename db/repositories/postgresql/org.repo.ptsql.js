import OrgRepository from "../../core/repositories/org.repositorie.js";
import pool from "../../db/connection.js";

export default class OrgRepoPostgresql extends OrgRepository {
    async createOrganization(organization) {
        const { name, description, studioId, html_content, data, image_icon_id, banner_image_id } = organization;
        const query =
            "INSERT INTO organizations (name, description, studio_id, html_content, data, image_icon_id, banner_image_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
        const values = [name, description, studioId, html_content, data, image_icon_id, banner_image_id];

        return pool
            .query(query, values)
            .then((result) => result.rows[0])
            .catch((error) => Promise.reject(error));
    }

    async getOrganizationById(orgId) {
        const query = "SELECT * FROM organizations WHERE id = $1";
        const values = [orgId];

        return pool
            .query(query, values)
            .then((result) => result.rows[0])
            .catch((error) => Promise.reject(error));
    }

    async updateOrganization(orgId, updatedData) {
        const { name, description, studioId, html_content, data, image_icon_id, banner_image_id, users } = updatedData;
        const query =
            "UPDATE organizations SET name = $1, description = $2, studio_id = $3, html_content = $4, data = $5, image_icon_id = $6, banner_image_id = $7, users = $8 WHERE id = $9 RETURNING *";
        const values = [name, description, studioId, html_content, data, image_icon_id, banner_image_id, users, orgId];

        return pool
            .query(query, values)
            .then((result) => result.rows[0])
            .catch((error) => Promise.reject(error));
    }

    async deleteOrganization(orgId) {
        const query = "DELETE FROM organizations WHERE id = $1";
        const values = [orgId];

        return pool
            .query(query, values)
            .then(() => Promise.resolve())
            .catch((error) => Promise.reject(error));
    }

    async getAllOrganizations() {
        const query = "SELECT * FROM organizations";

        return pool
            .query(query)
            .then((result) => result.rows)
            .catch((error) => Promise.reject(error));
    }

    async getOrganizationsByStudioId(studioId) {
        const query = "SELECT * FROM organizations WHERE studio_id = $1";
        const values = [studioId];

        return pool
            .query(query, values)
            .then((result) => result.rows)
            .catch((error) => Promise.reject(error));
    }
}