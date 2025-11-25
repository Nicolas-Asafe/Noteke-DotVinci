import Org from "../models/org.model.js";
import Studio from "../models/studio.model.js";
export default class StudioService {
    constructor(studioRepository) {
        this.studioRepository = studioRepository;
    }
    async registerStudio(studioData) {
        if (!studioData.name || !studioData.description || !studioData.admin_id) {
            throw new Error("Studio name and description are required.");
        }
        const newStudio = new Studio(studioData.name, studioData.description,studioData.admin_id);
        return await this.studioRepository.createStudio(newStudio);
    }
    async getStudioProfile(studioId) {
        if (!studioId) {
            throw new Error("Studio ID is required");
        }
        return await this.studioRepository.getStudioById(studioId);
    }
    async addDeveloperToStudio(studioId, devId) {
        if (!studioId || !devId) {
            throw new Error("Studio ID and Developer ID are required");
        }
        return await this.studioRepository.addDevToStudio(studioId, devId);
    }
    async banDeveloperFromStudio(studioId, devId) {
        if (!studioId || !devId) {
            throw new Error("Studio ID and Developer ID are required");
        }
        return await this.studioRepository.banDevFromStudio(studioId, devId);
    }
    async deleteStudioAccount(studioId) {
        if (!studioId) {
            throw new Error("Studio ID is required");
        }
        return await this.studioRepository.deleteStudio(studioId);
    }
    async createOriginalImage(studioId, imageData) {
        if (!studioId || !imageData) {
            throw new Error("Studio ID and Image Data are required");
        }   
        return await this.studioRepository.createOriginalImageForStudio(studioId, imageData);
    }
    async createOriginalOrganization(studioId, orgData) {
        if (!studioId || !orgData.name || !orgData.description || !orgData.html_content || !orgData.data || !orgData.image_icon_id || !orgData.banner_image_id) {
            throw new Error("Studio ID and Organization Data are required");
        }
        const newOriginalOrg = new Org(orgData.name, orgData.description, studioId, orgData.html_content, orgData.data, orgData.image_icon_id, orgData.banner_image_id);
        return await this.studioRepository.createOriginalOrganizationForStudio(studioId, newOriginalOrg);
    }
}